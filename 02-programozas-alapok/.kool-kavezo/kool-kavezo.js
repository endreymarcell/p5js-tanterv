ignoredPropNames = [
    "initialPropNames",
    "currentPropNames",
    "catGroup",
    "nyanImage",
    "colorNames",
]

function fakePreload() {
    // I'm intentionally not using preload here.
    // It makes the sketch start faster, and we don't need this image right away anyway
    // so it's fine to just load it in the background.
    nyanImage = preloadImage("http://endreymarcell.hu/p5v2/nyan.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    textAlign("center", "center")
    textFont("Verdana")

    initialPropNames = getAllPropNames()
    ignoredPropNames = ignoredPropNames.concat(initialPropNames)

    setupSprites()

    company = "Kool Kávézó"
    nameColor = "chocolate"
    nameSize = 60
    stars = 1
    wallColor = "white"
    zoom = 0.8

    _isHelp = false
    _canSpeak = false
    _bobSayCounter = 0
    _bobSayMessage = ""
    _shouldShowData = false
    _deliveryOpacity = 0
    fakePreload()

    myVoice = new p5.Speech()
    setTimeout(function() {
        if (myVoice.isLoaded) {
            _canSpeak = true
            var englishVoices = myVoice.voices.filter(function(voice) { return voice.lang.indexOf('en-') == 0 } )
            var randomEnglishVoice = random(englishVoices)
            myVoice.setVoice(randomEnglishVoice.name)
        }
    }, 1000)
}

function draw() {
    scale(zoom)
    translate(0, height * (1 / zoom - 1))
    background(wallColor)

    drawCurrentVariables()
    drawCafeName()
    drawShelves()
    drawDelivery()
    drawMySprites()
    drawHelp()
}


////////////////////////////////////////////////////////////////////////////////////////////


function setupSprites() {
    catGroup = createGroup()
    coffeeGruop = createGroup()

    for (var i = 0; i < 5; i += 1) {
        coffee = createSprite(140, height - 150 - i * 120)
        coffee.draw = drawCup
        coffee.setCollider("rectangle", 0, 0, 30, 60)
        coffee.isDragged = false
        coffeeGruop.add(coffee)
    }

    bob = createSprite(width / 2, height - 110)
    bob.color = random(colorNames)
    bob.draw = drawBob
    bob.lift = 0
    bob.direction = "right"
    bob.friction = 0.9
    bob.restitution = 0
    bob.mood = 0
    _bobIsDragging = false
    bob.left = function() { bob.direction = "left"; bob.addSpeed(10, WEST) }
    bob.right = function() { bob.direction = "right"; bob.addSpeed(10, EAST) }
    bob.jump = function() { if (bob.overlap(floor)) {bob.addSpeed(30, NORTH) } }
    bob.say = bobSay

    bobsPalm = createSprite(0, 0, 10, 10)
    bobsPalm.visible = false

    floor = createSprite(width / 2, height, width * 3, 1)
    floor.immovable = true

    shelf = createSprite(92, height - 100, 200, 40)
    shelf.visible = false
    shelf.immovable = true

    counter = createSprite(width - 30, height - 45, 60, 90)
    counter.immovable = true
    counter.shapeColor = "chocolate"

}

function drawDelivery() {
    textSize(400)
    noStroke()
    fill(10, 230, 50, _deliveryOpacity)
    textAlign("center", "center")
    text("✓", width / 2, height / 2)
    _deliveryOpacity -= 2
}

function drawCurrentVariables() {
    if (!_shouldShowData) {
        return
    }

    currentPropNames = getRelevantProps()
    currentVarNames = currentPropNames.filter(function (prop) {
        return typeof(window[prop]) != "function" && typeof(window[prop]) != "object"
    })

    var xx = 350
    var yy = 180

    textAlign("left")
    textSize(15)
    text("ÁLTALÁNOS ADATOK", xx - 100, yy - 20)
    textSize(12)

    for (var i = 0; i < currentVarNames.length; i += 1) {
        var varDetails = getVarDetails(currentVarNames[i])
        textAlign("right")
        text(varDetails.name, xx, yy + i * 20)
        textAlign("center")
        fill(200)
        text("==", xx + 25, yy + i * 20)
        fill(0)
        textAlign("left")
        text(varDetails.value, xx + 50, yy + i * 20)
        fill(200)
        textStyle("italic")
        text("(" + varDetails.type + ")", xx + 200, yy + i * 20)
        textStyle("normal")
        fill(0)
        textAlign("center")
    }

    yy += 40 + i * 20

    textAlign("left")
    textSize(15)
    text("BOB SAJÁT ADATAI", xx - 100, yy - 20)
    textSize(12)

    var bobsVars = ["color", "mood", "lift"]
    for (var i = 0; i < bobsVars.length; i += 1) {
        var varDetails = getVarDetailsForBob(bobsVars[i])
        textAlign("right")
        text("bob." + varDetails.name, xx, yy + i * 20)
        textAlign("center")
        fill(200)
        text("==", xx + 25, yy + i * 20)
        fill(0)
        textAlign("left")
        text(varDetails.value, xx + 50, yy + i * 20)
        fill(200)
        textStyle("italic")
        text("(" + varDetails.type + ")", xx + 200, yy + i * 20)
        textStyle("normal")
        fill(0)
        textAlign("center")
    }
}

function drawCafeName() {
    textFont("Georgia")
    textStyle("italic")
    textSize(nameSize)
    textAlign("center")
    noStroke()
    fill(nameColor)
    text(company, width / 2, 50)
    fill("black")
    textStyle("normal")
    textSize(32)
    var starString = ""
    for (var i = 0; i < Math.floor(stars); i += 1) {
        starString += "★"
    }
    text(starString, width / 2, 100)
}

function drawMySprites() {
    deleteOldCats()
    catGroup.bounce(catGroup)

    var lift = max(Math.floor(bob.lift), 0)
    bob.setCollider("rectangle", 0, -13 - lift * 30, 120, 227 + lift * 60)
    bob.addSpeed(1, SOUTH)
    bob.collide(floor)
    bob.collide(counter)
    bob.collide(shelf)

    drawCups()

    allSprites.draw()
}

function drawCups() {
    for (var i = 0; i < coffeeGruop.length; i += 1) {
        cup = coffeeGruop[i]
        if (!_bobIsDragging && cup.overlap(bobsPalm)) {
            cup.isDragged = true
            _bobIsDragging = true
        }
        if (cup.isDragged) {
            cup.position.x = bobsPalm.position.x + (bob.direction == "right" ? 15 : -15)
            cup.position.y = bobsPalm.position.y - 20
            if (bob.overlap(counter) && bob.lift < 1) {
                coffeeGruop.remove(cup)
                cup.remove()
                stars += 1
                _deliveryOpacity = 255
                _bobIsDragging = false
            }
        }
    }
}

function drawHelp() {
    if (_isHelp) {
        background(245, 245, 220, 150)
        stroke("maroon")
        strokeWeight(20)
        fill("burlywood")
        rect(50, 50, width - 100, height - 100)
        noStroke()
        fill("maroon")
        textSize(32)
        textAlign("center")
        textFont("Verdana")
        text("SÚGÓ", width / 2, 100)
        textAlign("left")

        var xx = 130
        var yy = 180
        textSize(16)
        text("ÁLTALÁNOS PARANCSOK", xx - 30, yy - 20)
        textSize(14)
        var methodNames = [
            "help()",
            "cursor()",
            "noCursor()",
            "showData()",
            "hideData()",
            "cat(N)",
            "alert(S)",
        ]
        for (var i = 0; i < methodNames.length; i += 1) {
            text(methodNames[i], xx, yy + i * 20)
        }

        var xx = 400
        textSize(16)
        text("ÁLTALÁNOS KÉRDÉSEK", xx - 30, yy - 20)
        textSize(14)
        var funcNames = [
            "day()",
            "dayName()",
            "uppercase(S)",
            "random(N1, N2)",
            "round(N)",
            "min(N1, N2, N3...)",
            "max(N1, N2, N3...)",
        ]
        for (var i = 0; i < funcNames.length; i += 1) {
            text(funcNames[i], xx, yy + i * 20)
        }

        var xx = 130
        var yy = 400
        textSize(16)
        text("BOB SAJÁT PARANCSAI", xx - 30, yy - 20)
        textSize(14)
        var bobsMethodNames = [
            "bob.left()",
            "bob.right()",
            "bob.jump()",
            "bob.say(S)",
        ]
        for (var i = 0; i < bobsMethodNames.length; i += 1) {
            text(bobsMethodNames[i], xx, yy + i * 20)
        }

        textSize(16)
        textAlign("right")
        text("Amíg a súgó nyitva van, a program áll.", width - 90, height - 120)
        text("Kattints bárhova a folytatáshoz :)", width - 90, height - 100)
        noLoop()
    }
}

function drawBob() {
    push()

    var lift = max(Math.floor(bob.lift), 0)

    if (typeof(bob.color) == 'function') {
        console.info(bob.color)
        bob.color = 0
        console.warn("Ne felejtsd el a színek nevét időzőjelek közé tenni!")
    }

    noStroke()
    fill("dimgray")
    circle(-40, 80, 40)     // left wheel
    circle(0, 80, 40)       // center wheel
    circle(40, 80, 40)      // right wheel
    fill(bob.color)
    rect(0, 30, 120, 60)    // bottom part
    var y = -30 - 60 * lift
    rect(0, -lift * 30, 60, lift * 60)  // middle part
    rect(0, -30 - 60 * lift, 120, 60)   // top part
    stroke('black')
    noFill()
    for (var i = 0; i < lift; i += 1) {
        circle(0, -30 - 60 * i, 10)             // middle markers
    }
    noStroke()
    fill(bob.color)
    rect(0, y - 60, 70, 70) // head

    fill("dimgray")

    if (bob.direction == "right") {
        rect(60, y, 100, 10)    // arm
        bobsPalm.position.x = bob.position.x + 95
        circle(20, y - 75, 5)   // eyes
        stroke("dimgray")
        noFill()
        strokeWeight(3)
        if (bob.mood > 0) {
            arc(33, y - 80, 70, 70, PI / 2, PI * (0.51 + min(bob.mood, 5) * 0.09))     // happy
        } else if (bob.mood < 0) {
            arc(33, y - 20, 70, 70, PI + 1.2 + max(bob.mood, -5) * 0.15, PI * 1.5)     // sad
        } else {
            line(33, y - 50, 20, y - 50)
        }
    } else {
        rect(-60, y, 100, 10)    // arm
        bobsPalm.position.x = bob.position.x - 95
        circle(-20, y - 70, 5)   // eyes
        stroke("dimgray")
        strokeWeight(3)
        noFill()
        if (bob.mood > 0) {
            arc(-33, y - 80, 70, 70, PI - PI * (0.51 + min(bob.mood, 5) * 0.09), PI / 2)     // happy
        } else if (bob.mood < 0) {
            arc(-33, y - 20, 70, 70, PI - PI * 1.5, PI - (PI + 1.2 + max(bob.mood, -5) * 0.15))     // sad
        } else {
            line(-33, y - 50, -20, y - 50)
        }
    }
    bobsPalm.position.y = bob.position.y + y

    if (_bobSayCounter > 0) {
        textFont("Courier New")
        textSize(15)
        textAlign("center")
        noStroke()
        fill(0)
        text(_bobSayMessage, 0, -150)
        _bobSayCounter -= 1
    }

    pop()
}

function getAllPropNames() {
    var props = []
    for (var prop in window) {
        props.push(prop)
    }
    return props
}

function getRelevantProps() {
    var props = []
    for (var prop in window) {
        var isIgnoredPropName = ignoredPropNames.indexOf(prop) != -1
        var isHiddenPropName = prop[0] == "_"
        if (!isIgnoredPropName && !isHiddenPropName) {
            props.push(prop)
        }
    }
    return props
}

function getVarType(x) {
    if (typeof(x) == "string") {
        if (parseInt(x) == x) {
            return "Ez most szám vagy szöveg? :"
        }
    }
    return typeof(x)
}

function getVarDetails(propName) {
    var val = window[propName]
    return {
        type: getVarType(val),
        name: propName,
        value: typeof(val) == "string" ? ('"' + val + '"') : val
    }
}

function getVarDetailsForBob(varName) {
    var val = bob[varName]
    return {
        type: getVarType(val),
        name: varName,
        value: typeof(val) == "string" ? ('"' + val + '"') : val
    }
}

function cat(n) {
    for (var i = 0; i < n; i++) {
        var newCat = createSprite(random(-300, -10), random(height));
        newCat.addImage(nyanImage);
        newCat.setSpeed(random(6, 10), random(-3, 3));
        catGroup.add(newCat);
    }
}

function deleteOldCats() {
    for (var i = 0; i < catGroup.length; i++) {
        if (catGroup[i].position.x > width + 100) {
            catGroup[i].remove()
        }
    }
}

function drawCup(x, y) {
    x = x || 0
    y = x || 0
    push()
    stroke("black")
    strokeWeight(1)
    fill(240)
    quad(
        x - 20, y - 30,
        x + 20, y - 30,
        x + 10, y + 30,
        x - 10, y + 30
    )
    pop()
}

function drawShelves() {
    push()

    textSize(26)
    textAlign("right")
    var coffeeNames = [
        "Espresso", "Latte", "Cappuccino", "Cortado", "Macchiato",
    ]
    for (var i = 0; i < coffeeNames.length; i += 1) {
        stroke("chocolate")
        strokeWeight(3)
        fill("white")
        rect(-10, height - 120 - i * 120, 170, 40)
        noStroke()
        fill("chocolate")
        text(coffeeNames[i], 150, height - 100 - i * 120)
    }

    pop()
}

function help() {
    _isHelp = true
}

function mouseClicked() {
    if (_isHelp) {
        _isHelp = false
        loop()
    }
}

function bobSay(message) {
    _bobSayCounter = 120
    _bobSayMessage = message
    if (_canSpeak) {
        myVoice.speak(message)
    }
}

colorNames = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
]

function showData() {
    _shouldShowData = true
}

function hideData() {
    _shouldShowData = false
}
