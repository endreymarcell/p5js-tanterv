function setup() {
    createCanvas(windowWidth, windowHeight, "webgl")
    for (i = 0; i < 27; i += 1) {
        cubie = createSprite()
        cubie.position.x = -100 + 100 * (i % 3)
        cubie.position.y = -100 + 100 * (floor(i / 3) % 3)
        cubie.position.z = -100 + 100 * floor(i / 9)
        cubie.ambientColor = pick([
            "white", "yellow", "red", "orange", "green", "blue"
        ])
        cubie.draw3d = () => box(80)
    }
}

function draw() {
    background(200)
    rotateY(mouseX / 100)
    rotateX(-mouseY / 100)
    ambientLight(200)
    pointLight(color(200), 300, 300, 300)
    draw3dSprites()
}
