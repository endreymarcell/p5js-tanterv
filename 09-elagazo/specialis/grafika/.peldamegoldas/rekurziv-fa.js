function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(255, 246, 224)
    goto(width / 2, height)
    recursive(130, 12)
}

function recursive(size, depth) {
    stroke(color(81, 53, 2, depth * 30))
    strokeWeight(depth)
    goline(size)
    if (depth > 1) {
        left(30)
        recursive(size / 1.3, depth - 1)
        right(90)
        recursive(size / 1.8, depth - 1)
        left(60)
    }
    back(size)
}
