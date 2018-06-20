function preload() {
    catImage = preloadImage("http://www.freepngimg.com/download/cat/11-2-cat-png.png")
    dogImage = preloadImage("http://www.freepngimg.com/download/dog/8-dog-png-image-picture-download-dogs.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    cat = createSprite(random(150, width - 150), random(150, height - 150))
    cat.addImage(catImage)
    cat.scale = 0.3
    cat.mirrorX(pick([1, -1]))
    cat.mouseActive = true
    dog = createSprite(random(150, width - 150), random(150, height - 150))
    dog.addImage(dogImage)
    dog.scale = 0.6
    dog.mirrorX(pick([1, -1]))
    dog.mouseActive = true
}

function draw() {
    background("white")
    line(width / 2, 0, width / 2, height)
    line(0, height / 2, width, height / 2)
    allSprites.draw()
}
