function setup() {
    createCanvas(windowWidth, windowHeight)
    background("white")
    strokeWeight(10)
}

function draw() {
    background("white")
    stroke(150 * noise(frameCount / 100))
    translate(width / 2, height / 2)
    for (i = 0; i < 360; i += 1) {
        line(0, height / 2 * noise(i / 200, frameCount / 300), 0, 0)
        rotate(radians(1))
    }
}
