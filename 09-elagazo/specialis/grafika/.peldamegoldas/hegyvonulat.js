function setup() {
    createCanvas(windowWidth, windowHeight)
    background("white")
    for (i = 0; i < width; i += 1) {
        line(i, height * noise(i / 100), i, height)
    }
}

function draw() {

}
