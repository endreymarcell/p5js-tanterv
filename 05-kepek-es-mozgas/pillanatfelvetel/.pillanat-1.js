function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
}

function draw() {
    background("white")         // background a draw-ban
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function mouseClicked() {
}
