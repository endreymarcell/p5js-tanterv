function setup() {
    createCanvas(windowWidth, windowHeight)
    rec = createRecorder()
    rec.start()
    background("white")
    textAlign("center", "center")
    textSize(20)
}

function draw() {
}

function soundRecorded() {
    text(rec.resultString, width / 2, height / 2)
}
