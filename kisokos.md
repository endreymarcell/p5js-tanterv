# p5.js kisokos

- [p5 modell](#p5-modell)  
- [p5 változók](#p5-változók)  
- [p5 függvények](#p5-függvények)
- [Sprite-ok](#sprite-ok)  
    + [Létrehozás, beállítás](#létrehozás-beállítás)
    + [Mozgás, találkozás, interakció](#mozgás-találkozás-interakció)
- [Szerkezetek (feltétel, ciklusok, csoportok)](#szerkezetek-feltétel-ciklusok-csoportok)
    + [Feltételek](#feltételek)
    + [Ciklusok](#ciklusok)
    + [Csoportok](#csoportok)
- [JSBin használata](#jsbin-használata)

## p5 modell
p5-ben a kódot speciális nevű "blokkokba" írjuk, attól függően, hogy mikor kell végrehajtódniuk.

###### `preload() { ... }`  
A program indulásakor ez a függvény fut le legelőször.  
Arra használjuk, hogy képeket töltsünk be vele.  

---

###### `setup() { ... }`  
A program indulásakor egyszer fut le.  
Ebbe tesszük azokat a parancsokat, beállításokat, amiknek csak egyszer kell lefutniuk.  
(Pl. vászon létrehozása, sprite-ok létrehozása, kezdeti beállítása.)  

---

###### `draw() { ... }`  
A program indulása után folyamatosan újra és újra lefut, másodpercenként akár harmincszor.  
Változáshoz, interakcióhoz kapcsolódó logikát írunk bele.  

---

###### `mouseClicked() { ... }`  
Akkor fut le, ha kattintunk az egérrel.  

---

###### `keyPressed() { ... }`  
Akkor fut le, ha lenyomunk egy billentyűt.  

## p5 változók (csak olvasható)

__Ezeket a változókat csak használjuk, kiolvassuk a tartalmukat, de nem állítjuk át őket.__  

###### `windowWidth` és `windowHeight`
A rendelkezésünkre álló böngészőablak szélessége, illetve magassága (szám).  
Tipikusan a `createCanvas()` paramétereként használjuk őket a `setup` blokkban.  

---

###### `width` és `height`
A létrehozott vászon szélessége, illetve magassága (szám).  
Csak akkor elérhető, ha már meghívtuk a `createCanvas()` függvényt.  

---

###### `mouseX` és `mouseY`
Megadja az egér aktuális helyének x, illetve y koordinátáját a vásznon (szám). 

---

###### `mouseIsPressed` és `keyIsPressed`
Megadja, hogy le van-e épp nyomva az egér gombja, illetve bármelyik billentyű (igaz/hamis).  
Tipikusan a `draw` blokkban használjuk.  

---

###### `key`
Megadja a legutoljára lenyomott billentyűt (betű).  
Általában a `keyPressed` blokkban használjuk.  

---

###### `keyCode`
Megadja a legutoljára lenyomott speciális billentyű kódját (szám).  
Általában a `keyPressed` blokkban használjuk.  
Lehetséges értékek: `UP_ARROW`, `DOWN_ARROW`, `LEFT_ARROW`, `RIGHT_ARROW`, `BACKSPACE`, `DELETE`, `ENTER`, `TAB`, `ESCAPE`, `SHIFT`, `CONTROL`, `OPTION`, `ALT`

---

###### `NORTH`, `SOUTH`, `EAST`, `WEST`
Az északi, déli, keleti, illetve nyugati irány (szám).  
A sprite-ok `setSpeed()` és az `addSpeed()` függvényében használhatjuk őket, vagy mint a sprite `rotation` változója.   

---

###### `frameCount`
Megadja, hogy a program indulása óta hányszor futott le a `draw` blokk (szám).  
Tipikusan a `draw` blokkban használjuk.  

## p5 függvények

###### `createCanvas(w, h)`
Létrehoz egy `w` szélességű és `h` magasságú vásznat.  
A `setup` blokkban használjuk.  

---

###### `background(c)`
Az egész vásznat `c` színűre színezi, ezzel elfed (letöröl) mindent, ami eddig a vásznon volt.  
A `c` lehet egy szín neve szövegként (pl. `"red"`) vagy egy RGB színkód, amihez a `color()` függvényt használjuk, pl. `color(100, 10, 207)`.  

---

###### `random(a, b)`
Visszaad egy véletlenszámot `a` és `b` között.  

---

###### `round(n)`
Visszaadja `n` egész számra kerekített értékét.  

---

###### `preloadImage(url)`
Az `url` alapján betölt és visszaad egy képet, amit változóban tudunk eltárolni.  
A `preload` blokkban használjuk.  

---

###### `image(img, x, y)`
Kirajzolja az `img` változóba korábban `preloadImage()` függvénnyel beletöltött képet úgy, hogy annak bal felső sarka az (x, y) pontba kerül.  

---

###### `noCursor()`
Eltünteti az egeret a vásznon.  

---

###### `cursor()`
Megjeleníti az egeret a vásznon.  

---

###### `print(s)`
Kiírja `s` szöveget a konzolra.

---

###### `alert(s)`
Kiírja `s` szöveget egy felugró ablakba.

---

###### `noLoop()`
Leállítja a program futását.

---

###### `loop()`
Újra elindítja a program futását.

## Sprite-ok

### Létrehozás, beállítás

###### `createSprite()`
Létrehoz és visszaad egy sprite-ot, amit változóba tudunk menteni.  
Példa: `bob = createSprite()`

---

###### `sprite.remove()`
Eltávolít egy sprite-ot a programból.  

---

###### `sprite.position.x` és `sprite.position.y`
Megadja vagy beállítja a sprite (középpontjának) x, illetve y koordinátáit (szám).  

---

###### `sprite.scale`
Megadja vagy beállítja a sprite "nagyítását" (szám).  
Ha 1, a sprite pont akkora, amekkoraként létrehoztuk; egynél kisebb vagy nagyobb számnál a sprite arányosan csökken vagy növekszik.  
Alapesetben: 1.  

---

###### `sprite.rotation`
Megadja vagy beállítja a sprite forgásirányát (szám).  
Alapesetben: 0 (a sprite Kelet felé néz).  

---

###### `sprite.shapeColor`
Beállítja a sprite színét (szín).  
Átadhatunk neki szöveget (`sprite.shapeColor = "blue"`) vagy RGB színkódot a `color()` függvény használatával (`sprite.shapeColor = color(123, 65, 210, 150)`).  

---

###### `sprite.addImage(img)`
A sprite-nak alakul ad egy képet, amit korábban `preloadImage()`-dzsel beletöltöttünk az `img` változóba.  

---

###### `sprite.width` és `sprite.height`
Megadja vagy beállítja a sprite szélességét, illetve magasságát (szám).  

---

###### `sprite.visible`
 megadja vagy beállítja, hogy a sprite látható-e (igaz/hamis).  
Például: `bob.visible = false`.  
Alapesetben: `true`.  

### Mozgás, találkozás, interakció

###### `sprite.setSpeed(v, d)`
`v` nagyságú sebességet ad meg egy sprite-nak `d` irányba.  
A sprite esetleges korábbi sebessége _törlődik_.  
Például: `bob.setSpeed(5, EAST)`.  

---

###### `sprite.addSpeed(v, d)`
`v` nagyságú sebességet ad hozzá egy sprite eddigi sebességéhez `d` irányba.  
A sprite esetleges korábbi sebessége _megőrződik és összeadódik_ a most megadottal.  
Például: `bob.setSpeed(1, WEST)`.  

---

###### `sprite.rotationSpeed`
Megadja vagy beállítja a sprite folyamatos, automatikus forgásának sebességét (szám).  
Például: `bob.rotationSpeed = -3`.  
Alapesetben: 0 (a sprite nem forog).  

---

###### `sprite.overlap(otherSprite)`
Megmondja, hogy a sprite fedésben van-e épp a megadott másik sprite-tal.  
Feltételekben (`if`) használjuk.  

---

###### `sprite.collide(otherSprite)`
Nekiütközteti a sprite-ot a megadott másik sprite-nak.  
Ez azt jelenti, hogy ha `sprite` és `otherSprite` találkoznak, akkor `sprite` megáll, nem tud tovább menni.  
A `draw` blokkban használjuk.  

---

###### `sprite.displace(other)`
`sprite` eltolja a megadott másik sprite-ot.  
Ez azt jelenti, hogy ha `sprite` és `otherSprite` találkoznak, `sprite` változtatás nélkül halad tovább, `otherSprite`-ot pedig eltolja az útjából.  
A `draw` blokkban használjuk.  

---

###### `sprite.bounce(otherSprite)`
`sprite` lepattan a megadott másik sprite-ról.  
Ha azt szeretnénk, hogy a másik sprite maga ne mozduljon el, akkor őt előtte mozdíthatatlanná kell tennünk (`immovable`).  
A `draw` blokkban használjuk.  

---

###### `sprite.immovable`
Beállítja, hogy egy sprite mozdíthatatlan-e (igaz/hamis).  
Csak akkor kell beállítani, ha azt akarjuk, hogy más sprite-ok le tudjak pattanni erről (`bounce()`).  

---

###### `sprite.rotateToDirection`
Beállítja, hogy a sprite mindig arra forduljon (`rotation`), amerre épp halad (igaz/hamis).  
Alapesetben: `false`. Elég egyszer beállítani, ezt tipikusan a `setup` blokkban tesszük meg (vagy akkor, amikor a sprite létrejön).  

---

###### `sprite.friction`
A sprite "csúszóssága" (szám).  
Ha 1, akkor a sprite egyenletes sebességgel halad. Ha kisebb egynél, mozgás közben veszít a sebességéből (súrlódik). Alapesetben: 1.  
Elég egyszer beállítani, ezt tipikusan a `setup` blokkban tesszük meg (vagy akkor, amikor a sprite létrejön).  

---

###### `sprite.mouseActive`
Beállítja, hogy a sprite figyelje az egér helyzetét (igaz/hamis).  
Alapesetbe: `false`. Ha szeretnénk használni a sprite `mouseIsOver` vagy `mouseIsPressed` változóját, előbb ezt igazra kell állítanunk, tipikusan a `setup` blokkban, vagy amikor a sprite létrejön.  

---

###### `sprite.mouseIsOver`
Megmondja, hogy az egér éppen a sprite fölött van-e (igaz/hamis).  
Feltételekben (`if`) használjuk.  
Csak akkor működik, ha korábban a sprite `mouseActive` változóját igazra állítottuk!    

## Rajzolás

### Alakzatok  
###### `point(x, y)`
Rajzol egy pöttyöt az (x, y) pontba.  
Például: `point(100, 200)`  

###### `line(x1, y1, x2, y2)`
Húz egy vonalat az (x1, y1) pontból az (x2, y2) pontba.  
Például: `line(0, 0, mouseX, mouseY)`  

###### `rect(x, y, w, h)`
Rajzol egy téglalapot, aminek a sarka az (x, y) pont, w a szélessége és h a magassága.  
Például: `rect(0, 0, width / 2, height / 2)`  

###### `circle(x, y, r)`
Rajzol egy kört, aminek (x, y) a középpontja és r a sugara.  
Például: `circle(width / 2, height / 2, 150)`  

### Alakzatok nézete__  
###### `strokeWeight(n)`
Beállítja a vonal vastagságát.  
Például: `strokeWeight(12)`  

###### `stroke(c)`
Beállítja a körvonal színét.  
Például: `stroke("black")` vagy `stroke(color(208, 165, 171))`  

###### `noStroke()`
Kikapcsolja a körvonalat.  

###### `fill(c)`
Beállítja a kitöltőszínt (ami az alakzatok belsejében van).  
Például: `fill("blue")` vagy `fill(color(17, 81, 55))`  

###### `noFill()`
Kikapcsolja a kitöltőszínt (az alakzatok belseje átlátszó lesz).  

### Szöveg
###### `text(s, x, y)`
Kiírja `s` szöveget (x, y) pontba.  
Például: `text("Szia!", width / 2, height / 2)`  

###### `textSize(n)`
Beállítja a betűméretet n-re.  
Például: `textSize(48)`  

###### `textFont(s)`
Beállítja a betűtípust s-re.
Például: `textFont("Courier New")`  

###### `textAlign(s1, s2)`
Beállítja a szöveg igazítását, tehát hogy mikor meghívjuk a `text()` függvényt, akkor az átadott (x, y) pont a szöveg melyik pontja lesz.  
Alapértelmezésben ez a bal szöveg bal felső sarka, de átállíthatjuk a szöveg középpontjára: `textAlign("center", "center")`  

## Szerkezetek (feltétel, ciklusok, csoportok)

#### Feltételek
Sima:  
```JavaScript
if («FELTÉTEL») {
    background("white")
}
```

Kétágú:  
```JavaScript
if («FELTÉTEL») {
    background("white")
} else {
    background("black")
}
```

A `«FELTÉTEL»` helyén állhat:  
- egyenlőség: pl. `counter == 100` vagy `bob.shapeColor == "red"`  
   
   Figyelj a _dupla_ idézőjelre  
- egyenlőtlenség: pl. `mouseX < width / 2` vagy `bob.position.y > height`  
- simán egy változó: pl. `mouseIsPressed` vagy `bob.mouseIsOver`  
   
   Az utóbbihoz a setup-ban kell egy `bob.mouseActive = true` beállítás  
- simán egy függvény: pl. `cat.overlap(dog)`  

#### Ciklusok
```JavaScript
for (i = 0; i < «HÁNYSZOR»; i += 1) {
    bob = createSprite()
}
```

Számok kiírása nullától kilencig:  
```JavaScript
for (i = 0; i < 10; i += 1) {
    print(i)
}
```

#### Csoportok

###### createGroup()
Létrehoz és visszaad egy csoportot, amit változóba tudunk menteni.  
Például: `stars = createGroup()`  

###### group.add(sprite)
Hozzáadja a sprite-ot a csoporthoz.  
Például: `stars.add(bob)`  

###### group.length
Megmondja, hogy hány sprite van éppen a csoportban (szám).

###### allSprites
Ez a csoport magától létrejön, és automatikusan belekerül minden sprite, akit létrehozunk.    

##### Tipikus használat `setup` blokkban
Létrehozzuk a csoportot, aztán 15 sprite-ot véletlen helyen, akiket hozzá is adunk:   
```javascript
stars = createGroup()
for (i = 0; i < 15; i += 1) {
    bob = createSprite()
    bob.position.x = random(0, width)
    bob.position.y = random(0, height)
    bob.mouseActive = true
    stars.add(bob)
}
```
A sprite-okat a `mouseActive` változó igazra állításával az egérre is érzékennyé tettük.  

##### Tipikus használat `draw` blokkban
Végigmegyünk a `stars` csoport összes elemén, mindegyiket elforgatjuk, és ha valamelyikre kattintottak, azt megnagyítjuk:  
```javascript
for (i = 0; i < stars.length; i += 1) {
    stars[i].rotation += 5
    if (stars[i].mouseIsOver) {
        stars[i].scale += 0.2
    }
}
```

## JSBin használata

### Kezelés

##### Bejelentkezés
A bejelentkezéshez előbb a [github.com](github.com)-ra kell regisztrálni, és ezzel belépni JSBinre, [lásd itt](03-p5-alapok/jsbin/jsbin-instructions.md).  
JSBint regisztráció és bejelentkezés nélkül is lehet használni, de akkor nem maradnak meg a programjaid.  
Bejelentkezés után a programjaid az internetre mentődnek, és bárhonnan meg tudod őket nyitni.  

---

##### Új bin
`File > New`: új programot hoz létre.  
Ha korábban elmentettél sablont, akkor annak a tartalma be lesz másolva az új programba.     

---

##### Elnevezés
A HTML fül alatt van egy ilyen részlet: `<meta name="description" content="p5v4 sablon">`  
Itt kell a `p5v4 sablon` helyére beírni a programod nevét, később ezen a néven találod meg.  

---

##### Mentés
`File > Save snapshot` vagy Ctrl + S: elmenti a programot. Figyeld a böngésző címsorát, mert csak akkor működött a mentés, ha megváltozik a cím.  
Néha többször kell próbálkozni, esetleg beleírni-kitörölni egy betűt, és újra menteni, hogy tényleg működjön.  
Az egyetlen bombabiztos megoldás annak az ellenőrzésére, hogy mentődött-e a bin, hogy megnyitod egy inkognítóablakban, és megnézed a tartalmát.  

---

##### Megnyitás
`File > My bins` vagy Ctrl + O: kapsz egy listát a korábban elmentett programjaidról a nevükkel együtt (ld. Elnevezés).  
Ha duplán kattintasz a névre, megnyílik a program. Vigyázz, ha a név mellé kattintasz, archiválod a programot.  

---

##### Futtatás
`Run with JS` gomb vagy Ctrl + Enter: futtatja a programot.  
Vigyázz arra, hogy ha a programban billentyűket szeretnél használni, akkor lehet, hogy a futtatás után először rá kell kattintani a vászonra, hogy onnantól eljussanak hozzá a billentyűlenyomások.  

### Fülek

##### HTML fül
Itt tudunk nevet adni a programnak (ld. Elnevezés).  

---

##### CSS fül
Nem használjuk.  

---

##### JavaScript fül
Ide írjuk magát a programkódot.  

---

##### Console
Itt van a konzol, vagyis parancssor. Hasznos egyes parancsok kipróbálására, illetve ha hiba van a programunkban, ide íródnak a hibaüzenetek.  

---

##### Output
Itt jelenik meg a program.

### Egyéb

##### Megosztás  
Ha kimásolod a böngésző címsorából a címet, és azt elküldöd valakinek, ő máris meg tudja nézni a programot.  
Ha azt szeretnéd, hogy a kódot ne lássa, csak a végeredményt, akkor töröld ki a címből az "edit" szót, és mindent, ami utána van.  
Ha facebookon vagy facebook messengeren szeretnéd elküldeni a programot, írd át a címében a "jsbin" szót arra, hogy "sharejsbin", különben nem fogja engedni.  
/// Több infó a jsbin megosztásról [itt](.private/sharejsbin/README.md).  

---

##### Klónozás  
`File > Clone`: leklónozza a programot (akár a sajátodat, akár valaki másét).  
Tehát készül belőle egy másolat, amit átírhatsz, de az eredeti is megmarad.  

---

##### Kódrendezés  
Ctrl + Shift + L: szépre rendezi a kódot.  

---

##### Sablon  
`File > Save as template`: elmenti a mostani programot "sablonként", úgyhogy mostantól ha új programot kezdesz a New menüponttal, ebben fogsz kiindulni.  

---

##### Speciális karakterek  
### Windows
| Karakter | kód              | Karakter | kód            |
|----------|------------------|----------|----------------|
| [        | AltGr + F        | ]        | AltGr + G      |
| {        | AltGr + B        | }        | AltGr + N      |
| <        | AltGr + í vagy m | >        | AltGr + y      |
| &        | AltGr + C        | \|       | AltGr + w      |
| *        | AltGr + -        | ;        | AltGr + ,      |

### OS X
| Karakter | kód             | Karakter | kód             |
|----------|-----------------|----------|-----------------|
| [        | alt + 8         | ]        | alt + 9         |
| {        | alt + 7         | }        | alt + ö         |
| <        | alt + shift + y | >        | alt + shift + x |
| &        | alt + 1         | \|       | alt + í         |
| *        | alt + shift + , | ;        | alt + .         |

---

##### Letöltés  
`File > Download`: letölti az egész programot weboldalként a számítógépedre, amit aztán bármilyen böngészővel meg tudsz nyitni.  

---

##### Exportálás  
`File > Export as gist`: exportálja az egész programot a github.com oldalra. 
