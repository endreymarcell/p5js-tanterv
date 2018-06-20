function preload() {
    guitarImage = preloadImage("https://cdn.dribbble.com/users/5172/screenshots/873110/attachments/93723/guitar.png")
    pianoImage = preloadImage("https://images.vexels.com/media/users/3/148906/isolated/preview/d49e883ea93579b9f770baf731c6d87c-piano-musical-instrument-silhouette-by-vexels.png")
    dogImage = preloadImage("http://www.freepngimg.com/download/dog/5-dog-png-image.png")
    guitarSound = preloadSound("http://endreymarcell.hu/p5v2/sounds/guitar.mp3")
    pianoSound = preloadSound("http://endreymarcell.hu/p5v2/sounds/piano.mp3")
    dogSound = preloadSound("http://endreymarcell.hu/p5v2/sounds/dog.wav")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    guitar = createSprite(width / 4, height/ 2)
    guitar.mouseActive = true
    guitar.addImage(guitarImage)
    guitar.scale = 0.3
    piano = createSprite(width / 2, height/ 2)
    piano.mouseActive = true
    piano.addImage(pianoImage)
    piano.scale = 0.3
    dog = createSprite(width / 4 * 3, height/ 2)
    dog.mouseActive = true
    dog.addImage(dogImage)
    dog.scale = 0.3
}

function draw() {
    background("white")
    allSprites.draw()
}

function mouseClicked() {
    if (guitar.mouseIsOver) {
        playSound(guitarSound)
    }
    if (piano.mouseIsOver) {
        playSound(pianoSound)
    }
    if (dog.mouseIsOver) {
        playSound(dogSound)
    }
}
