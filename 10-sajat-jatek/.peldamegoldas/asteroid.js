function preload() {
    birdImage = preloadImage("http://endreymarcell.hu/p5v2/Flappy_Bird.png")
}

function setup() {
    createCanvas(windowHeight / 1.5, windowHeight)
    bird = createSprite()
    bird.position.x = width / 2
    bird.position.y = height * 3 / 4
    bird.addImage(birdImage)

    delta = random(-height / 4, height / 4)

    wall1 = createSprite()
    wall1.position.x = width + 100
    wall1.position.y = delta
    wall1.width = 200
    wall1.height = 300
    wall1.setSpeed(3, WEST)
    wall1.shapeColor = "limegreen"

    wall2 = createSprite()
    wall2.position.x = width + 100
    wall2.position.y = height + delta
    wall2.width = 200
    wall2.height = 300
    wall2.setSpeed(3, WEST)
    wall2.shapeColor = "limegreen"

    score = 0
    textSize(30)
    noLoop()
}

function draw() {
    background("skyblue")
    bird.addSpeed(0.4, SOUTH)
    bird.rotation = bird.velocity.y * 2
    allSprites.draw()
    text(score, width - 40, height - 40)
    if (wall1.position.x < -50) {
        delta = random(-height / 4, height / 4)
        wall1.position.x = width + 100
        wall1.position.y = -delta
        wall2.position.x = width + 100
        wall2.position.y = height - delta
        score += 1
    }
    if (bird.overlap(allSprites) || bird.position.y > height) {
        noLoop()
    }
}

function mouseClicked() {
    loop()
    bird.setSpeed(10, NORTH)
}
