function preload() {
    espresso = preloadImage("https://www.nespresso.com/shared_res/mosaic_freehtml/images/coffees/ranges/espresso/big_cup.png")
    cappuccino = preloadImage("http://cafe.alibaba.com.iq/wp-content/uploads/2016/07/cappuccino_cup.png")
    latte = preloadImage("https://www.teisseire.com/media/1395/_0033_hazelnut-latte-png.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    rec = createRecorder()
    rec.start()
    bob = createSprite()
    bob.position.x = width / 2
    bob.position.y = height / 2
}

function draw() {
    background("white")
    allSprites.draw()
}

function soundRecorded() {
    if (rec.resultString == "espresso") {
        bob.addImage(espresso)
    }
    if (rec.resultString == "cappuccino") {
        bob.addImage(cappuccino)
    }
    if (rec.resultString == "latte") {
        bob.addImage(latte)
    }
}
