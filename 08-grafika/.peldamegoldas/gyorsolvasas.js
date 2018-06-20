function setup() {
    createCanvas(windowWidth, windowHeight)
    words = "A nyílt/nyilvános kulcsú rejtjelezés vagy titkosítás, más néven aszimmetrikus kulcsú titkosítás egy olyan kriptográfiai eljárás neve, ahol a felhasználó egy kulcspárral – egy nyilvános és egy titkos kulccsal rendelkezik. A titkos kulcs titokban tartandó, míg a nyilvános kulcs széles körben terjeszthető. A kulcsok matematikailag összefüggnek, ám a titkos kulcsot gyakorlatilag nem lehet meghatározni a nyilvános kulcs ismeretében. Egy, a nyilvános kulccsal kódolt üzenetet csak a kulcspár másik darabjával, a titkos kulccsal lehet visszafejteni.".split(" ")
    counter = 0
    frameRate(10)
    textAlign("center", "center")
    textSize(50)
}

function draw() {
    background("white")
    text(words[counter], width / 2, height / 2)
    counter += 1
}
