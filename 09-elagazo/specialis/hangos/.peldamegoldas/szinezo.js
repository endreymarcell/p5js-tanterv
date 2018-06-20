function setup() {
    createCanvas(windowWidth, windowHeight)
    rec = createRecorder()
    rec.start()
    bob = createSprite()
    background("white")
}

function draw() {
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function soundRecorded() {
    bob.shapeColor = rec.resultString.replace(" ", "")
}
