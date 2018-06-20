function preload() {
    mordonImage = preloadImage("https://i.imgflip.com/j4kq3.jpg")
    eyeImage = preloadImage("https://vignette.wikia.nocookie.net/monster-islands-roblox/images/2/2a/Ruby_Eyeball.png")

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    mordon = createSprite(width / 2, height / 2)
    mordon.addImage(mordonImage)
    eye = createSprite(width / 2 - 8, height / 2 - 86)
    eye.addImage(eyeImage)
    eye.scale = 0.2
    count = 0
}

function draw() {
    background("white")
    count += 0.03
    eye.rotation = 360 * noise(count)
    allSprites.draw()
}
