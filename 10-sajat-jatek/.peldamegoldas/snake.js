function setup() {
    createCanvas(roundTo(windowWidth, 50), roundTo(windowHeight, 50))
    bob = createSprite()
    bob.position.x = roundTo(random(0, width), 50) + 25
    bob.position.y = roundTo(random(0, height), 50) + 25
    bob.width = 45
    bob.height = 45
    bob.shapeColor = "indigo"
    snake = createGroup()
    snake.add(bob)
    bob2 = createSprite()
    bob2.position.x = bob.position.x + 50
    bob2.position.y = bob.position.y
    bob2.width = 45
    bob2.height = 45
    bob2.shapeColor = "indigo"
    snake.add(bob2)
    bob3 = createSprite()
    bob3.position.x = bob.position.x + 100
    bob3.position.y = bob.position.y
    bob3.width = 45
    bob3.height = 45
    bob3.shapeColor = "indigo"
    snake.add(bob3)
    apple = createSprite()
    apple.shapeColor = "indigo"
    apple.position.x = roundTo(random(0, width), 50) + 25
    apple.position.y = roundTo(random(0, height), 50) + 25
    apple.width = 45
    apple.height = 45
    frameRate(3)
    keyCode = LEFT_ARROW
}

function draw() {
    background("white")
    first = snake[0]
    last = snake[snake.length - 1]
    last.position.x = first.position.x
    last.position.y = first.position.y
    shift(snake)
    first = snake[0]
    last = snake[snake.length - 1]
    if (keyCode == LEFT_ARROW) {
        first.position.x -= 50
    }
    if (keyCode == RIGHT_ARROW) {
        first.position.x += 50
    }
    if (keyCode == UP_ARROW) {
        first.position.y -= 50
    }
    if (keyCode == DOWN_ARROW) {
        first.position.y += 50
    }
    if (first.position.x < 0) {
        first.position.x += width
    }
    if (first.position.x > width) {
        first.position.x -= width
    }
    if (first.position.y < 0) {
        first.position.y += height
    }
    if (first.position.y > height) {
        first.position.y -= height
    }
    if (first.overlap(snake)) {
        noLoop()
    }
    if (apple.overlap(snake)) {
        apple.position.x = roundTo(random(0, width), 50) + 25
        apple.position.y = roundTo(random(0, height), 50) + 25
        bob = createSprite()
        bob.shapeColor = "indigo"
        bob.position.x = last.position.x
        bob.position.y = last.position.y
        bob.width = 45
        bob.height = 45
        snake.add(bob)
    }
    allSprites.draw()
}
