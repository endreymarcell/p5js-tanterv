function setup() {
    createCanvas(windowWidth, windowHeight)
    voice = createVoice()
    background("white")
    textSize(30)
    textAlign("center", "center")
    text("magas", width / 2, 50)
    text("mély", width / 2, height - 50)
    text("lassú", 50, height / 2)
    text("gyors", width - 50, height / 2)
}

function mouseClicked() {
    voice.stop()
    voice.setVoice("Google UK English Female")
    voice.setPitch(map(mouseY, 0, height, 2, 0.1))
    voice.setRate(map(mouseX, 0, width, 0.01, 2))
    voice.speak("We're not in Kansas anymore.")
}
