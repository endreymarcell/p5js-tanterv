function setup() {
    createCanvas(windowWidth, windowHeight)
    ball = createSprite()
    ball.position.x = width / 2
    ball.position.y = height / 2 - 200
    ground = createSprite()
    ground.position.x = width / 2
    ground.position.y = height / 2 + 200
    ground.width = 500
    ground.height = 1
    ball.restitution = 0.98
    ground.immovable = true
}
function draw() {
    background("white")
    ball.addSpeed(0.1, SOUTH)
    ball.bounce(ground)
    allSprites.draw()
}
