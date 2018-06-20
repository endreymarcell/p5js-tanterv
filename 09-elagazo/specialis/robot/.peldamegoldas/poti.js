function setup() {
    createCanvas(windowWidth, windowHeight)
    board = p5.board('/dev/cu.usbserial-DN02SQ06', 'arduino')
    pot = board.pin(0, 'ANALOG', 'INPUT')
    pot.read()
    bob = createSprite()
    bob.position.x = width / 2
    bob.position.y = height / 2
}


function draw() {
    background("white")
    bob.scale = pot.val || 0
    bob.rotation = map(pot.val || 0, 0, 1023, 0, 360)
    allSprites.draw()
}
