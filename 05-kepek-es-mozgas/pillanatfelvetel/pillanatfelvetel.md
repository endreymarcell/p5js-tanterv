# Pillanatfelvételek készítése

Tegyük fel, hogy egy olyan programot akarsz írni, amiben egy sprite (bármilyen alakú is) mindig követi az egeredet, kattintásra pedig lenyomatot hagy a vásznon.  

__Első próbálkozás__  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
}

function draw() {
    background("white")         // background a draw-ban
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function mouseClicked() {
}
``` 
(Link: http://jsbin.com/rixukit/edit?js,output)  
/// Illetve: [.pillanat-1.js](.pillanat-1.js)  
Oké, itt a sprite követi az egeret, de nem tudunk lenyomatot hagyni a vásznon. Hiszen a draw blokk elején mindig fehérre festjük az egész vásznat - tehát eltűnik bármiféle lenyomat.    

__Második próbálkozás__  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    background("white")         // background a setup-ban
}

function draw() {
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function mouseClicked() {
}
``` 
(Link: http://jsbin.com/mevoyuc/edit?js,output)  
/// Illetve: [.pillanat-2.js](.pillanat-2.js)  
Most kipróbáltuk, hogy nem festjük le újra meg újra az egész vásznat, hogy ne vesszen el a lenyomat. Príma, így viszont a sprite folyamatosan csíkot húz maga után, ami megint nem jó.  

__Harmadik próbálkozás__  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    background("white")         // background a setup-ban
}

function draw() {
    allSprites.draw()
}

function mouseClicked() {       // pozícionálás kattintáskor
    bob.position.x = mouseX
    bob.position.y = mouseY
}
``` 
(Link: http://jsbin.com/wucumad/edit?js,output)  
/// Illetve: [.pillanat-3.js](.pillanat-3.js)  
Itt az az ötlet, hogy a sprite csak kattintáskor ugrik az egér helyére. Ettől jól működik a lenyomat, viszont azon kívül a sprite nem követi az egeret, pedig mi azt is szeretnénk.  

__Megoldás__  
A megoldáshoz szükségünk van két, eddig ismeretlen függvényre:  
`loadPixels()` - "pillanatfelvételt" csinál a vászonról, megjegyzi a vászon aktuális kinézetét,  
`updatePixels()` - felülírja a vásznat a legutolsó elmentett pillanatfelvétellel.  

```JavaScript
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
```
(Link: http://jsbin.com/hufijew/edit?js,output)  
/// Illetve: [.pillanat-4.js](.pillanat-4.js)  

Jó nyomdázást! :)  
