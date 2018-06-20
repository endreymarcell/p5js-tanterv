function preload() {
    monsterImage = preloadImage("https://www.impatientoptimists.org/~/media/Blog/Images/BlogPosts/Home-Page-Features/C/CJ-CO/cmp014asst-612x4436f4446e15454e33897db6fa72433f28png_png_autocropped.jpg")
    cookieImage = preloadImage("https://vignette.wikia.nocookie.net/halo/images/7/70/Cookie.png")
    monsterSound = preloadSound("http://endreymarcell.hu/p5v2/sounds/cookiemonster.m4a")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    rec = createRecorder()
    rec.start()
    monster = createSprite()
    monster.position.x = width / 2
    monster.position.y = height / 2
    monster.addImage(monsterImage)
    monster.scale = 0.5
    cookie = createSprite()
    cookie.addImage(cookieImage)
    cookie.scale = 0.3
}

function draw() {
    background("white")
    cookie.position.x = mouseX
    cookie.position.y = mouseY

    if (cookie.overlap(monster)) {
        playSound(monsterSound)
    }

    allSprites.draw()
}
