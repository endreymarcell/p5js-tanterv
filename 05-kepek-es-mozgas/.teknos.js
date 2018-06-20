function preload() {
    turtleImage = preloadImage("https://s3.envato.com/files/197623685/loggerhead_top1.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    turtle = createSprite()
    turtle.position.x = width / 2
    turtle.position.y = height / 2
    turtle.addImage(turtleImage)
    turtle.scale = 0.2
}

function draw() {
    background("white")
    allSprites.draw()
}

function mouseClicked() {
    turtle.rotation = random(0, 360)
    turtle.setSpeed(1, turtle.rotation)
}
