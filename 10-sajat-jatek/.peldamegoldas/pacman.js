function preload() {
    mouseImage = preloadImage("https://image.flaticon.com/icons/png/128/587/587335.png")
    pacmanImage = preloadImage("https://upload.wikimedia.org/wikipedia/commons/7/72/Pacman_emoticon.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    mouse = createSprite()
    mouse.addImage(mouseImage)
    mouse.scale = 0.15
    floor = createSprite()
    floor.position.x = width / 2
    floor.position.y = height / 2
    floor.width = width
    floor.height = 5
    pacman = createSprite()
    pacman.addImage(pacmanImage)
    pacman.scale = 0.2
    pacman.position.x = width / 2
    noCursor()
}

function draw() {
    background("white")
    mouse.position.x = mouseX
    mouse.position.y = mouseY
    if (mouse.visible) {
        if (mouseY < floor.position.y - 26) {
            floor.position.y -= 2
        } else if (mouseY > floor.position.y - 24) {
            floor.position.y += 2
        } else {
            if (mouseX < pacman.position.x) {
                pacman.position.x -= 2
                pacman.mirrorX(-1)
            }
            if (mouseX > pacman.position.x) {
                pacman.position.x += 2
                pacman.mirrorX(1)
            }
            if (pacman.overlap(mouse)) {
                mouse.visible = false
            }
        }
    }
    pacman.position.y = floor.position.y - 31
    allSprites.draw()
}

function mouseClicked() {
    mouse.visible = true
}
