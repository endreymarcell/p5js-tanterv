function preload() {
    img = preloadImage("https://images.vexels.com/media/users/3/134789/isolated/preview/aa4c5ca0e2a83abbf167e49c8a50e834-feliz-sonrisa-emoticon-emoji-icono-by-vexels.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite(width / 2, height / 2)
    bob.addImage(img)
    bob.scale = width / img.width
}

function draw() {
    background("white")
    bob.rotation = rotationZ + 90
    allSprites.draw()
}
