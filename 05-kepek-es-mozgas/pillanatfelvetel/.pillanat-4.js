function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    background("white")         // background a setup-ban
    loadPixels()                // elmentjük a vászon eredeti állapotát
}

function draw() {
    updatePixels()              // a vásznat nem fehérre festjük, hanem
                                // a legutolsó pillanatfelvételt rajzoljuk rá
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function mouseClicked() {
    loadPixels()                // kattintáskor pillanatfelvétel készül a vászonról
}
