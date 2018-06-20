function preload() {
    ballImg = preloadImage("http://www.robinwood.com/Catalog/FreeStuff/Textures/TextureDownloads/Balls/NewTennisBallColor.jpg")
    groundImg = preloadImage("https://img00.deviantart.net/165c/i/2008/148/b/8/wood_floor_by_gnrbishop.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight, "webgl")

    ball = createSprite(0, -200)
    ball.draw3d = () => sphere(50)
    ball.texture = ballImg
    ball.restitution = 0.98

    ground = createSprite(0, 200, 500, 1)
    ground.draw3d = () => plane(500, 500)
    ground.rotationX = PI / 2
    ground.texture = groundImg
    ground.immovable = true

    counter = 0
}

function draw() {
    counter -= 0.01
    rotateY(counter)

    background(200)
    ball.addSpeed(0.2, SOUTH)
    ball.bounce(ground)

    ambientLight(200)
    pointLight(color(100), 100, 100, 0)

    draw3dSprites()
}
