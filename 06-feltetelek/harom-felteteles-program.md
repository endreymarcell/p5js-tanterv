## Három példaprogram feltétellel

Ez a vízcsepp-program, amiben a vízcsepp visszaugrik a vászon tetejére:
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = width / 2
    bob.setSpeed(1, SOUTH)
}

function draw() {
    background("white")

    if (bob.position.y > height) {      // HA elérte a vászon alját
        bob.position.y = 0
    }

    allSprites.draw()
}
```

Ebben a programban egy kutya üldöz egy macskát, de a macska mindig elugrik:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    dog = createSprite()
    cat = createSprite()
    cat.position.x = random(0, width)
    cat.position.y = random(0, height)
}

function draw() {
    background("white")
    dog.position.x = mouseX
    dog.position.y = mouseY

    if (dog.overlap(cat)) {                 // HA a kutya rálóg a macskára
        cat.position.x = random(0, width)
        cat.position.y = random(0, height)
    }

    allSprites.draw()
}
```

Ez a propeller csak akkor forog, ha felette van az egér:
```JavaScript
function preload() {
    propellerImage = preloadImage("http://wfarm3.dataknet.com/static/resources/icons/set73/be07a928.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = width / 2
    bob.position.y = height / 2
    bob.addImage(propellerImage)
    bob.scale = 0.4
    bob.mouseActive = true          // ez kell a későbbi `mouseIsOver` használatához
}

function draw() {
    background("white")

    if (bob.mouseIsOver) {          // HA az egér a sprite fölött van
        bob.rotation -= 5
    }

    allSprites.draw()
}
```
