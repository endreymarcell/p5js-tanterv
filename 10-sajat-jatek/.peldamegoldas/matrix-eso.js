function setup() {
    createCanvas(windowWidth, windowHeight)
    for (i = 0; i < width / 15; i += 1) {
        character = createSprite(
            i * 15,
            random(-height, 0)
        )
        character.draw = drawSprite
    }
    background("black")
    fill(142, 255, 114)
    frameRate(12)
    kanji = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑"
    katakana = "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ"
    latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    numerals = "012345679"
    letters = (kanji + katakana + latin + numerals).split("")
}

function draw() {
    background(0, 0, 0, 12)
    for (i = 0; i < allSprites.length; i += 1) {
        allSprites[i].position.y += 15
        if (allSprites[i].position.y > height) {
            allSprites[i].position.x = i * 15
            allSprites[i].position.y = random(-height / 2, 0)
        }
    }
    allSprites.draw()
}

function drawSprite() {
    letter = pick(letters)
    text(letter, 0, 0)
}
