function setup() {
    createCanvas(windowWidth, windowHeight)
    rec = createRecorder()
    rec.start()
    bob = createSprite()
    bob.position.x = width / 2
    bob.position.y = height / 2
    background("white")
}

function draw() {
    allSprites.draw()
}

function soundRecorded() {
    // léptetés
    if (rec.resultString == "up") {
      bob.position.y -= 100
    }
    if (rec.resultString == "down") {
      bob.position.y += 100
    }
    // vagy folyamatos mozgás
    if (rec.resultString == "left") {
      bob.setSpeed(1, EAST)
    }
    if (rec.resultString == "right") {
      bob.setSpeed(1, WEST)
    }
    if (rec.resultString == "stop") {
      bob.setSpeed(0)
    }
}
