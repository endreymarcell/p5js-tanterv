function preload() {
    img = preloadImage("http://www.fordesigner.com/imguploads/Image/cjbc/zcool/png20080526/1211811474.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    for (i = 0; i < 10; i += 1) {
        bob = createSprite(width / 2, 100 + i * (height - 200) / 9)
        bob.addImage(img)
        bob.scale = 0.3
    }
}

function draw() {
    background("white")
    for (i = 0; i < 10; i += 1) {
        allSprites[i].position.x = pulse(200, width - 200, 2 + i / 20)
    }
    allSprites.draw()
}
