function preload() {
    img = preloadImage("http://www.freepngimg.com/thumb/seahorse/7-2-seahorse-png-file-thumb.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    seahorse1 = createSprite(width / 4, height / 2)
    seahorse2 = createSprite(width / 2, height / 2)
    seahorse3 = createSprite(width / 4 * 3, height / 2)
    seahorse1.addImage(img)
    seahorse2.addImage(img)
    seahorse3.addImage(img)
}

function draw() {
    background("darkblue")
    seahorse1.position.y = pulse(height / 2 - 200, height / 2 + 200, 0.5)
    seahorse2.position.y = pulse(height / 2 - 200, height / 2 + 200, 0.3)
    seahorse3.position.y = pulse(height / 2 - 200, height / 2 + 200, 0.39)
    allSprites.draw()
}
