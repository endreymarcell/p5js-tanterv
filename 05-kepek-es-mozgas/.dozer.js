function preload() {
    bulldozerImage = preloadImage("http://www.pngpix.com/wp-content/uploads/2016/08/PNGPIX-COM-Bulldozer-PNG-Transparent-Image-500x299.png")
    bearImage = preloadImage("https://i.pinimg.com/originals/ab/e2/07/abe2075d3ae5e440cc7fd56e11fba411.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    bulldozer = createSprite()
    bulldozer.position.y = height / 2
    bulldozer.addImage(bulldozerImage)
    bulldozer.scale = 0.5
    bear = createSprite()
    bear.position.x = width / 2
    bear.position.y = height / 2
    bear.addImage(bearImage)
    bear.scale = 0.4
}

function draw() {
    background("white")

    bulldozer.position.x += 1
    bulldozer.displace(bear)

    allSprites.draw()
}
