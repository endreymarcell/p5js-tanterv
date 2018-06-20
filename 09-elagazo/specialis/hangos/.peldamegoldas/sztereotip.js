function preload() {
    englishImg = preloadImage("http://main.radioromaniacultural.ro/files/39/pet.png")
    germanImg = preloadImage("https://www.peeks.co.uk/productimages/main/4d6ac682-6c4d-4692-9429-d0c08912f0d9.png")
    frenchImg = preloadImage("https://cdn.shopify.com/s/files/1/2004/0311/products/Connoisseur-Series-17-LEGO-Minifigure_medium.png")
    italianImg = preloadImage("https://img.clipartxtras.com/1f5f305d21eee5ae25d0a786283c35a8_italian-man-clipart-63-italian-man-clipart_350-584.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    voice = createVoice()
    background("white")
    english = createSprite(200, 200)
    english.addImage(englishImg)
    english.scale = 0.7
    english.mouseActive = true
    german = createSprite(width - 200, 200)
    german.addImage(germanImg)
    german.scale = 0.7
    german.mouseActive = true
    french = createSprite(200, height - 200)
    french.addImage(frenchImg)
    french.scale = 0.9
    french.mouseActive = true
    italian = createSprite(width - 200, height - 200)
    italian.addImage(italianImg)
    italian.scale = 0.4
    italian.mouseActive = true
}

function draw() {
    background("white")
    allSprites.draw()
}

function mouseClicked() {
    voice.stop()
    if (english.mouseIsOver) {
        voice.setVoice("Google UK English Male")
        voice.speak("A cup of tea, yes, jolly good.")
    } else if (german.mouseIsOver) {
        voice.setVoice("Google Deutsch")
        voice.speak("Noch ein Bier, ja!")
    } else if (italian.mouseIsOver) {
        voice.setVoice("Google italiano")
        voice.speak("Grazie mille!")
    } else if (french.mouseIsOver) {
        voice.setVoice("Google français")
        voice.speak("Je m'appelle Claude.")
    }
}
