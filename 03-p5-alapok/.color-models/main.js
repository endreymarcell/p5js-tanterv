function setup() {
    createCanvas(windowWidth, windowHeight)
    sliders = [0, 0, 0]
    colorMode(RGB, 100, 100, 100)
    myColorMode = "rgb"
    textSize(20)
    textFont("Tahoma")
    rgbColorMode = createSprite(width / 2 - 200, height / 4)
    rgbColorMode.draw = function() {
        stroke("black")
        fill(myColorMode == "rgb" ? "white" : "grey")
        circle(0, 0, 100)
        noStroke()
        fill("black")
        textAlign("center", "center")
        textSize(20)
        text("Lámpa-\nmód", 0, 0)
    }
    rgbColorMode.mouseActive = true
    cymColorMode = createSprite(width / 2, height / 4)
    cymColorMode.draw = function() {
        stroke("black")
        fill(myColorMode == "cym" ? "white" : "grey")
        circle(0, 0, 100)
        noStroke()
        fill("black")
        textAlign("center", "center")
        textSize(20)
        text("Tinta-\nmód", 0, 0)
    }
    cymColorMode.mouseActive = true
    hsbColorMode = createSprite(width / 2 + 200, height / 4)
    hsbColorMode.draw = function() {
        stroke("black")
        fill(myColorMode == "hsb" ? "white" : "grey")
        circle(0, 0, 100)
        noStroke()
        fill("black")
        textAlign("center", "center")
        textSize(20)
        text("Insta-\nmód", 0, 0)
    }
    hsbColorMode.mouseActive = true

    sliderOffsetX = width / 3
    sliderTop = height / 2
    sliderHeight = height / 3
    stepSize = 10
}

function draw() {
    if (myColorMode == "rgb") {
        colorMode(RGB, 100, 100, 100)
        background(color(sliders[0], sliders[1], sliders[2]))
    } else if (myColorMode == "hsb") {
        colorMode(HSB, 100, 100, 100)
        background(color(sliders[0], sliders[1], sliders[2]))
    } else {
        colorMode(RGB, 100, 100, 100)
        background(color(100 - sliders[0], 100 - sliders[1], 100 - sliders[2]))
    }
    stroke("black")
    fill("white")
    textSize(25)
    textAlign("right", "center")
    
    strokeWeight(2)
    rect(width / 2 - sliderOffsetX - 5, sliderTop, 10, sliderHeight)
    circle(width / 2 - sliderOffsetX, sliderTop + sliderHeight * (1 - sliders[0] / 100), 30)
    strokeWeight(5)
    text("Q", width / 2 - sliderOffsetX - 40, sliderTop)
    text("A", width / 2 - sliderOffsetX - 40, sliderTop + sliderHeight)
    
    strokeWeight(2)
    rect(width / 2 - 5, sliderTop, 10, sliderHeight)
    circle(width / 2, sliderTop + sliderHeight * (1 - sliders[1] / 100), 30)
    strokeWeight(5)
    text("ENTER", width / 2 - 40, sliderTop)
    text("BACKSPACE", width / 2 - 40, sliderTop + sliderHeight)
    
    strokeWeight(2)
    rect(width / 2 + sliderOffsetX - 5, sliderTop, 10, sliderHeight)
    circle(width / 2 + sliderOffsetX, sliderTop + sliderHeight * (1 - sliders[2] / 100), 30)
    strokeWeight(5)
    text("FEL", width / 2 + sliderOffsetX - 40, sliderTop)
    text("LE", width / 2 + sliderOffsetX - 40, sliderTop + sliderHeight)
    
    allSprites.draw()
}

function mouseClicked() {
    if (rgbColorMode.mouseIsPressed) {
        myColorMode = "rgb"
    } else if (cymColorMode.mouseIsPressed) {
        myColorMode = "cym"
    } else if (hsbColorMode.mouseIsPressed) {
        myColorMode = "hsb"
    }
}

function keyPressed() {
    if (uppercase(key) == "Q") {
        sliders[0] = min(sliders[0] + stepSize, 100)
    }
    if (uppercase(key) == "A") {
        sliders[0] = max(sliders[0] - stepSize, 0)
    }
    if (keyCode == ENTER) {
        sliders[1] = min(sliders[1] + stepSize, 100)
    }
    if (keyCode == BACKSPACE) {
        sliders[1] = max(sliders[1] - stepSize, 0)
    }
    if (keyCode == UP_ARROW) {
        sliders[2] = min(sliders[2] + stepSize, 100)
    }
    if (keyCode == DOWN_ARROW) {
        sliders[2] = max(sliders[2] - stepSize, 0)
    }
}
