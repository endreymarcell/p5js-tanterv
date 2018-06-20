function setup() {
    createCanvas(windowWidth, windowHeight)
    shouldShowHelpers = false
}

function draw() {
    background("white")
    if (shouldShowHelpers) {
        drawSpriteHelpers()
    }
    allSprites.draw()
    if (shouldShowHelpers) {
        drawAxes()
        drawAxisNames()
        drawCrosshair()
        drawCoordsHelpers()
    }
}

///////////////////////////////////////////////////////////////////

function showHelpers() {
    shouldShowHelpers = true
}

function hideHelpers() {
    shouldShowHelpers = false
}

function mouseClicked() {
    shouldShowHelpers = !shouldShowHelpers
}

///////////////////////////////////////////////////////////////////

function drawSpriteHelpers() {
    push()
    stroke(255, 0, 0, 100)
    strokeWeight(1)
    for (i = 0; i < allSprites.length; i += 1) {
        position = allSprites[i].position
        line(position.x, 0, position.x, height)
        line(0, position.y, width, position.y)
    }
    pop()
}

function drawAxisNames() {
    noStroke()
    fill("black")
    textSize(27)
    text("x", width / 2, 60)
    text("y", 70, height / 2)
    stroke("black")

    line(width / 4, 40, width * 3 / 4, 40)
    line(width * 3 / 4 - 20, 35, width * 3 / 4, 40)
    line(width * 3 / 4 - 20, 45, width * 3 / 4, 40)

    line(45, height / 4, 45, height * 3 / 4)
    line(40, height * 3 / 4 - 20, 45, height * 3 / 4)
    line(50, height * 3 / 4 - 20, 45, height * 3 / 4)
}

function drawAxes() {
    fill("gray")
    textSize(10)
    for (i = 100; i < width; i += 100) {
        stroke("gray")
        line(i, 0, i, 5)
        noStroke()
        text(i, i, 15)
    }
    for (i = 100; i < height; i += 100) {
        stroke("gray")
        line(0, i, 5, i)
        noStroke()
        text(i, 20, i)
    }
}

function drawCrosshair() {
    push()
    stroke("lightblue")
    fill("darkblue")
    line(0, mouseY, width, mouseY)
    line(mouseX, 0, mouseX, height)
    noStroke()
    textSize(14)
    textAlign("left", "top")
    text("x: " + mouseX + ",  y: " + mouseY, mouseX + 20, mouseY + 10)
    pop()
}

function drawCoordsHelpers() {
    push()
    fill("grey")
    textSize(14)
    textAlign("left")
    if (abs(mouseX - width / 2) < 10) {
        stroke("grey")
        line(width / 2, 0, width / 2, height)
        noStroke()
        text("x: width / 2", width / 2 + 5, mouseY - 20)
    }
    if (abs(mouseX - width) < 10) {
        stroke("grey")
        line(width, 0, width, height)
        noStroke()
        text("x: width", width - 60, mouseY + 20)
    }
    if (abs(mouseY - height / 2) < 10) {
        stroke("grey")
        line(0, height / 2, width, height / 2)
        noStroke()
        text("y: height / 2", mouseX - 90, height / 2 - 10)
    }
    if (abs(mouseY - height) < 10) {
        stroke("grey")
        line(0, height, width, height)
        noStroke()
        text("y: height", mouseX - 70, height - 10)
    }
    pop()
}
