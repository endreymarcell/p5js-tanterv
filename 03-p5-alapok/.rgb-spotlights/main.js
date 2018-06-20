function preload() {
    spotlightImage = preloadImage("http://www.seiu888.org/files/2016/09/single-spotlight-shortened.png")
    panelImage = preloadImage("https://cdn0.iconfinder.com/data/icons/IS_CMS/256/control_panel.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    
    redLight = createSprite(width / 4, spotlightImage.height / 4)
    redLight.addImage(spotlightImage)
    redLight.scale = 0.5

    greenLight = createSprite(width / 4 * 3, spotlightImage.height / 4)
    greenLight.addImage(spotlightImage)
    greenLight.scale = 0.5
    greenLight.mirrorX(-1)

    blueLight = createSprite(width / 4 * 3, height - spotlightImage.height / 4)
    blueLight.addImage(spotlightImage)
    blueLight.scale = 0.5    
    blueLight.mirrorX(-1)
    blueLight.mirrorY(-1)

    panel = createSprite(width / 4, height / 4 * 3)
    panel.scale = 0.5
    panel.addImage(panelImage)

    redSlider = createSprite(width / 4 - 150, 275, 30, 30)
    redSlider.draw = drawCircle
    redSlider.mouseActive = true
    redSlider.top = 75
    redSlider.bottom = 275
    redSlider.isDragged = false

    greenSlider = createSprite(width / 4 * 3 + 150, 275, 30, 30)
    greenSlider.draw = drawCircle
    greenSlider.mouseActive = true
    greenSlider.top = 75
    greenSlider.bottom = 275
    greenSlider.isDragged = false

    blueSlider = createSprite(width / 4 * 3 + 150, height - 75, 30, 30)
    blueSlider.draw = drawCircle
    blueSlider.mouseActive = true
    blueSlider.top = height - 275
    blueSlider.bottom = height - 75
    blueSlider.isDragged = false

    alphaSlider = createSprite(width / 4 - 150, height - 275, 30, 30)
    alphaSlider.draw = drawCircle
    alphaSlider.mouseActive = true
    alphaSlider.top = height - 275
    alphaSlider.bottom = height - 75
    alphaSlider.isDragged = false

    textAlign("center", "center")
    textFont("Georgia")
}

function draw() {
    background(220)

    currentRed = map(redSlider.position.y, redSlider.bottom, redSlider.top, 0, 255)
    currentGreen = map(greenSlider.position.y, greenSlider.bottom, greenSlider.top, 0, 255)
    currentBlue = map(blueSlider.position.y, blueSlider.bottom, blueSlider.top, 0, 255)
    currentAlpha = map(alphaSlider.position.y, alphaSlider.bottom, alphaSlider.top, 0, 255)
    colorProps = ["Red", "Green", "Blue", "Alpha"]
    colorProps.forEach(function(propName) {
        if (window["current" + propName] < 10) { window["current" + propName] = 0 }
        if (window["current" + propName] > 245) { window["current" + propName] = 255 }
    })

    noStroke()
    fill("black")
    textSize(42)
    text("RGBA", width / 2, 75)

    stroke("black")
    strokeWeight(5)
    noFill()
    rectMode("center")
    rect(width / 2, height / 2, width / 2, height / 2)
    fill("black")
    circle(width / 2, height / 2, 200)

    strokeWeight(1)
    fill("white")
    rectMode("corner")
    rect(width / 4 - 150 - 5, 75, 10, 200)
    rect(width / 4 * 3 + 150 - 5, 75, 10, 200)
    rect(width / 4 - 150 - 5, height - 75 - 200, 10, 200)
    rect(width / 4 * 3 + 150 - 5, height - 75 - 200, 10, 200)
    noStroke()
    fill("black")
    textSize(28)
    text(round(currentRed), width / 4 - 150 - 40, 175)
    text(round(currentGreen), width / 4 * 3 + 150 + 40, 175)
    text(round(currentBlue), width / 4 * 3 + 150 + 40, height - 175)
    text(round(currentAlpha), width / 4 - 150 - 40, height - 175)

    allSprites.draw()

    strokeWeight(map(currentAlpha, 0, 255, 1, 20))
    for (i = 0; i < 100; i += 1) {
        stroke(255, 0, 0, map(i, 0, 100, currentRed, -50))
        x1 = map(i, 0, 100, width / 4 - 20, width / 2 - 80)
        y1 = map(i, 0, 100, 220, height / 2 + 70)
        x2 = map(i, 0, 100, width / 4 + 30, width / 2)
        y2 = map(i, 0, 100, 180, height / 2 - 100)
        line(x1, y1, x2, y2)
    }
    for (i = 0; i < 100; i += 1) {
        stroke(0, 200, 0, map(i, 0, 100, currentGreen, -50))
        x1 = map(i, 0, 100, width / 4 * 3 + 20, width / 2 + 80)
        y1 = map(i, 0, 100, 220, height / 2 + 70)
        x2 = map(i, 0, 100, width / 4 * 3 - 30, width / 2)
        y2 = map(i, 0, 100, 180, height / 2 - 100)
        line(x1, y1, x2, y2)
    }
    for (i = 0; i < 100; i += 1) {
        stroke(0, 0, 255, map(i, 0, 100, currentBlue, -50))
        x1 = map(i, 0, 100, width / 4 * 3 + 20, width / 2 + 80)
        y1 = map(i, 0, 100, height - 220, height / 2 - 70)
        x2 = map(i, 0, 100, width / 4 * 3 - 30, width / 2)
        y2 = map(i, 0, 100, height - 180, height / 2 + 100)
        line(x1, y1, x2, y2)
    }
    
    fill(currentRed, currentGreen, currentBlue, currentAlpha)
    circle(width / 2, height / 2, 200)

    if (redSlider.mouseIsOver || greenSlider.mouseIsOver || blueSlider.mouseIsOver || alphaSlider.mouseIsOver) {
        cursor("pointer")
    } else {
        cursor("default")
    }
    if (mouseIsPressed) {
        allSprites.forEach(function(sprite) {
            if (sprite.isDragged) {
                if (mouseY < sprite.bottom && mouseY > sprite.top) {
                    sprite.position.y = mouseY
                }
            }        
        })
    }
}

function drawCircle() {
    stroke("black")
    strokeWeight(1)
    fill("white")
    circle(0, 0, 30)
}

function mousePressed() {
    allSprites.forEach(function(sprite) {
        if (sprite.mouseIsOver) {
            sprite.isDragged = true
        }        
    })
}

function mouseReleased() {
    allSprites.forEach(function(sprite) {
        sprite.isDragged = false
    })
}
