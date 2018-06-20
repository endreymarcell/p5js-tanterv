function setup() {
    createCanvas(windowWidth, windowHeight)
    textSize(16)
    mouseClicked()
}

function mouseClicked() {
    background("white")
    for (i = 0; i < 200; i += 1) {
        stroke(pick([0, 255]))
        line(200 + i, 200, 200 + i, 300)
    }
    // a számsor opcionális
    noStroke()
    for (i = 0; i < 20; i += 1) {
        text(round(random(0, 9)), 200 + i * 10, 320)
    }
}
