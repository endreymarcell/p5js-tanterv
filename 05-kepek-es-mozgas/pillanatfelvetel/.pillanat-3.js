function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    background("white")         // background a setup-ban
}

function draw() {
    allSprites.draw()
}

function mouseClicked() {       // pozícionálás kattintáskor
    bob.position.x = mouseX
    bob.position.y = mouseY
}
