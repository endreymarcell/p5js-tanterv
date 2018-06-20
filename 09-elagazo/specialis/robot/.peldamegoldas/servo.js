function setup() {
    createCanvas(windowWidth, windowHeight)
    board = p5.board('/dev/cu.usbserial-DN02SFED', 'arduino')
    servo = board.pin(9, 'SERVO')
}


function draw() {
    background("white")
    servo.write(map(mouseX, 0, width, 0, 180))  // első ötlet
    allSprites.draw()
}

function mouseClicked() {
    servo.write(random(0, 180))     // második ötlet
}
