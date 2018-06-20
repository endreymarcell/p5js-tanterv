function setup() {
    createCanvas(windowWidth, windowHeight, "webgl")
    for (i = 0; i < 30; i += 1) {
        point = createSprite()
        point.position.x = random(-width, width)
        point.position.y = random(-height, height)
        point.position.z = random(-5000, -10000)
        point.draw3d = () => sphere(10)
    }
    counter = 0
}

function draw() {
    background(0)
    rotateZ(counter)
    counter += 0.003
    for (i = 0; i < allSprites.length; i += 1) {
        p = allSprites[i]
        p.position.z += 35
        if (p.position.z > 500) {
            p.position.x = random(-width / 2, width / 2)
            p.position.y = random(-height / 2, height / 2)
            p.position.z = random(-5000, -10000)
        }
    }
    draw3dSprites()
}
