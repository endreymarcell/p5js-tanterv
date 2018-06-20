function preload() {
    img = preloadImage("https://opengameart.org/sites/default/files/survivor-idle_rifle_0.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    for (i = 0; i < 8; i += 1) {
        bob = createSprite(random(width), random(height))
        bob.rotation = random(360)
        bob.addImage(img)
        bob.scale = 0.4
    }
}

function draw() {
    background("white")
    allSprites.draw()
}

function mouseClicked() {
    for (i = 0; i < allSprites.length; i += 1) {
        bob = allSprites[i]
        bob.position.x = random(width)
        bob.position.y = random(height)
        bob.rotation = random(360)
        bob.addImage(img)
        bob.scale = 0.4
    }
}
