## Kétágú feltétel

__A cél:__ olyan program, amiben a vászon piros színű, ha az egér a vászon bal felében van, és kék, ha a jobb felében.  

__Első lépés:__ egy üres program.  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
}
```

__Második lépés:__ HA az egér a vászon _bal_ felében van, legyen a háttér _piros_.  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    if (mouseX < width / 2) {
        background("red")
    }
}
```

__Harmadik lépés:__ HA az egér a vászon _jobb_ felében van, legyen a háttér _kék_.  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    if (mouseX < width / 2) {
        background("red")
    }
    if (mouseX > width / 2) {
        background("blue")
    }
}
```

__Megvilágosodás:__ ezt a két feltételt össze lehet vonni:  
HA az egér a vászon _bal_ felében van, legyen a háttér _piros_  
KÜLÖNBEN pedig legyen a háttér _kék_.  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    if (mouseX < width / 2) {
        background("red")
    } else {
        background("blue")
    }
}
```
(Az "else" jelentése angolul: különben.)  
