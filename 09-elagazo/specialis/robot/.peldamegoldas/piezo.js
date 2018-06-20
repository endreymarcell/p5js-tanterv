function setup() {
    createCanvas(windowWidth, windowHeight)
    board = p5.board('/dev/cu.usbserial-DN02SFED', 'arduino')
    piezo = board.pin(10, 'PIEZO')
}


function draw() {
    background("white")
    allSprites.draw()
}

function mouseClicked() {
    piezo.tone(map(mouseY, height, 0, 1000, 20000), map(mouseX, 0, width, 10, 1000))
}
