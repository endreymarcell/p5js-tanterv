function preload() {
    carImage = preloadImage("https://www.clearpng.com/contents/sharedthumbimages/353ef/clearPNG-Cars-Ferrari-Red-Ferrari--458-Italia-V8-Engine-1710-3.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    road = createSprite(width / 2, height / 2)
    road.width = width - 300
    road.height = height
    road.shapeColor = 50
    lines = createGroup()
    for (i = 0; i < 5; i += 1) {
        line = createSprite()
        line.position.x = width / 2
        line.position.y = i * 230
        line.width = 20
        line.height = 140
        line.shapeColor = "white"
        line.setSpeed(9, SOUTH)
        lines.add(line)
    }
    car = createSprite(width / 2, height / 2)
    car.addImage(carImage)
    car.rotation = 90
}

function draw() {
    background("white")
    car.position.x = random(200, width - 200)
    for (i = 0; i < lines.length; i += 1) {
        if (lines[i].position.y > height + 70) {
            lines[i].position.y = -70
        }
    }
    allSprites.draw()
}
