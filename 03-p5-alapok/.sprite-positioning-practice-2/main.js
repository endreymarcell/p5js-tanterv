function setup() {
    createCanvas(windowWidth, windowHeight)
    MIN_NUM_STEPS = 4
    MAX_NUM_STEPS = 8

    nCols = round(random(MIN_NUM_STEPS, MAX_NUM_STEPS))
    colWidth = round(width / nCols)
    nRows = round(random(MIN_NUM_STEPS, MIN_NUM_STEPS + MAX_NUM_STEPS - nCols))
    rowHeight = round(height / nRows)
    nFields = nCols * nRows

    missingFieldIndex = round(random(nFields))

    DIST_COLORS = 150

    startRed = random(100)
    endRed = random(155, 255)
    startGreen = random(155, 255)
    endGreen = random(100)
    constantBlue = random(255)
    startAlpha = random(150, 200)
    endAlpha = random(200, 255)

    textAlign("center", "center")
    textSize(min(width, height))
    textFont("Georgia")
    textStyle("italic")
    letter = random("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''))
}

function draw() {
    background("white")
    stroke(0)
    strokeWeight(5)
    noFill()
    text(letter, width / 2, height / 2)
    noStroke()
    count = 0
    for (y = 0; y < height; y += rowHeight) {
        for (x = 0; x < width; x += colWidth) {
            currentRed = map(x, 0, width, startRed, endRed)
            currentGreen = map(y, 0, height, startGreen, endGreen)
            currentAlpha = map(count, 0, nFields, startAlpha, endAlpha)
            if (count == missingFieldIndex) {
                noFill()
            } else {
                fill(currentRed, currentGreen, constantBlue, currentAlpha)
            }
            rect(x, y, colWidth, rowHeight)
            count += 1
        }
    }
    allSprites.draw()
}
