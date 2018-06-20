function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background("white")
    goto(width / 2 - 200, height / 2 + 200)
    recursive(400, mouseX / 10)
}

function recursive(size, depth) {
    goline(size)
    if (depth > 1) {
        right(mouseY / 2)
        recursive(size * 0.95, depth - 1)
    }
}
