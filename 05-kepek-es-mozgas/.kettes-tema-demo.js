function setup() {
    createCanvas(windowWidth, windowHeight)
    man = createSprite()
    wall = createSprite()
    box = createSprite()

    wall.position.x = random(0, width)
    wall.position.y = random(0, height)

    box.position.x = random(0, width)
    box.position.y = random(0, height)
}

function draw() {
    background("white")

    man.position.x = mouseX
    man.position.y = mouseY

    man.collide(wall)
    man.displace(box)

    allSprites.draw()
}
