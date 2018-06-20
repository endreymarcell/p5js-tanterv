function setup() {
    createCanvas(windowWidth, windowHeight)
    nSprites = round(random(5, 25))
    spriteWidth = width / nSprites
    for (i = 0; i < nSprites; i += 1) {
        createSprite(
            spriteWidth / 2 + i * spriteWidth,
            height,
            spriteWidth,
            random(height * 2)
        )
    }
}

function draw() {
    background("white")
    allSprites.draw()
}
