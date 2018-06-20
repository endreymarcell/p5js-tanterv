function setup() {
    createCanvas(windowWidth, windowHeight)
    fill("navy")
    noStroke()
}

function draw() {
    background("orange")
    goto(150, height - 150)
    recursive(150, mouseX / 10)
}

function recursive(size, depth) {
    circle(0, 0, size)
    if (depth > 1) {
        go(size * 1.5)
        right(27)
        recursive(size * 0.90, depth - 1)
    }
}
