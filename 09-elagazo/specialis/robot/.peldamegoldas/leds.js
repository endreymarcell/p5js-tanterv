function setup() {
    createCanvas(windowWidth, windowHeight)
    board = p5.board('/dev/cu.usbserial-DN02SQ06', 'arduino')
    w = width / 8
    stripes = createGroup()
    for (i = 0; i < 8; i += 1) {
        bob = createSprite()
        bob.position.x = (i + 0.5) * w
        bob.position.y = height / 2
        bob.width = w
        bob.height = height
        bob.led = board.pin(i + 2, 'LED')
        bob.led.off()
        bob.mouseActive = true
        bob.shapeColor = ["green", "red", "yellow", "blue"][i % 4]
        stripes.add(bob)
    }
    bob = createSprite()
    bob.shapeColor = "black"
}


function draw() {
    background("white")
    allSprites.draw()
}
