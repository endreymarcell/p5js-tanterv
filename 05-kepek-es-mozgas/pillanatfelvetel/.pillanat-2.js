function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    background("white")         // background a setup-ban
}

function draw() {
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function mouseClicked() {
}
