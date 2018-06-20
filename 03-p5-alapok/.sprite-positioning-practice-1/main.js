function setup() {
    createCanvas(windowWidth, windowHeight)
    xStops = []
    yStops = []
    colors = []
    while (sum(xStops) < width * 2) {
        xStops.push(round(random(80, 300)))
    }
    while (sum(yStops) < height * 2) {
        yStops.push(round(random(80, 300)))
    }
    numFields = (xStops.length + 1) * (yStops.length + 1)
    middle = floor(numFields / 2)
    for (i = 0; i < numFields; i += 1) {
        colors.push(color(
            random(220),
            random(220),
            random(220)
        ))
    }
    frameRate(2)
    angleMode(DEGREES)
    ROTATION = random(20, 70)
}

function draw() {
    background("white")
    drawGrid()
    rotate(ROTATION)
    drawSquares()
    rotate(-ROTATION)
    allSprites.draw()
}

function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, 0)
}

function drawGrid() {
    stroke(170)
    for (x = 0; x < width; x += 20) {
        line(x, 0, x, height)
    }
    for (y = 0; y < height; y += 20) {
        line(0, y, width, y)
    }
    noStroke()
}

function drawSquares() {
    cnt = 0
    y = -height
    for (j = 0; j < yStops.length; j += 1) {
        x = 0
        for (i = 0; i < xStops.length; i += 1) {
            cnt += 1
            if (cnt == middle - 9 || cnt == middle || cnt == middle + 11) {
                noFill()
            } else {
                fill(colors[cnt])
            }
            rect(x, y, xStops[i], yStops[j])
            x += xStops[i]
        }
        y += yStops[j]
    }
}
