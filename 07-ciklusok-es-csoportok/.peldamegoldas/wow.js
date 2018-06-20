function preload() {
    wowImage = preloadImage("https://i.pinimg.com/originals/6e/3d/31/6e3d310d26f3a9c6f2d8c2657a845ec7.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    for (i = 0; i < 30; i += 1) {
        bob = createSprite(random(width), random(height))
        bob.addImage(wowImage)
    }
}

function draw() {
    background("white")
    for (i = 0; i < allSprites.length; i += 1) {
        allSprites[i].scale = mouseX / 1000
        allSprites[i].rotation = mouseY
    }
    allSprites.draw()
}
