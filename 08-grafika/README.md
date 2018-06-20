# Grafika

## Paint

/// Óra előtt mindenkinek a gépébe beleteszünk egy post-itet egy festmény címével, festőjével.  
/// Festmények:  
/// Mona Lisa (Da Vinci)  
/// Csillagos éj (Van Gogh)  
/// Az utolsó vacsora (Da Vinci)  
/// Lány gyöngy fülbevalóval (Vermeer)  
/// Vénusz születése (Boticelli)  
/// Ádám teremtése (Michelangelo)  
/// Vasárnap délután Grande Jatte szigetén (Seurat)  
/// Az emlékezet állandósága (Dalí)  
/// Önarckép (Van Gogh)  
/// Magányos cédrus (Csontváry)  
/// Majális (Szinyei)  
/// Ásító inas (Munkácsy)  
/// Amerikai gótika (Wood)  
/// Sikoly (Munch)  
/// Reggeli a szabadban (Manet)  
/// Varjak a búzamezőn (Van Gogh)  
/// A feladat pedig:  
Próbáld meg tíz perc alatt minél élethűbben reprodukálni a számodra kiosztott híres festményt [ebban a nagyon egyszerű Paint programban](http://jsbin.com/wayacaw/quiet)!  
/// Illetve: [.paint.html](.paint.html)  
Közben fél szemmel figyelj a magyarázó szövegre, amit a kép alján látsz. A program itt mindig kiírja, milyen p5 függvénnyel lehet megrajzolni, amit épp csináltál.  
/// Nagyon jól alkalmazható órakezdéskor, ha a lányok nem egyszerre érkeznek. Aki kicsit korábban jött, kicsit több időt kap a rajzolásra. Legjobb, ha a később érkezőknek a többiek mondják el a feladatot.  


## Emoji

```javascript
function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background("yellow")

    strokeWeight(30)

    stroke("blue")
    point(100, 100)

    stroke("green")
    point(200, 100)

    stroke("red")
    line(100, 200, 200, 170)

}
```

## Rajzolós parancsok összefoglalása

__Alakzatok__  
`point(x, y)`: rajzol egy pöttyöt az (x, y) pontba  
Például: `point(100, 200)`  

`line(x1, y1, x2, y2)`: húz egy vonalat az (x1, y1) pontból az (x2, y2) pontba  
Például: `line(0, 0, mouseX, mouseY)`  

`rect(x, y, w, h)`: rajzol egy téglalapot, aminek a sarka az (x, y) pont, w a szélessége és h a magassága  
Például: `rect(0, 0, width / 2, height / 2)`  

`circle(x, y, r)`: rajzol egy kört, aminek (x, y) a középpontja és r a sugara  
Például: `circle(width / 2, height / 2, 150)`  

__Alakzatok kinézete__  
`strokeWeight(n)`: beállítja a vonal vastagságát  
Például: `strokeWeight(12)`  

`stroke(c)`: beállítja a körvonal színét  
Például: `stroke("black")` vagy `stroke(color(208, 165, 171))`  

`noStroke()`: kikapcsolja a körvonalat  

`fill(c)`: beállítja a kitöltőszínt (ami az alakzatok belsejében van)  
Például: `fill("blue")` vagy `fill(color(17, 81, 55))`  

`noFill()`: kikapcsolja a kitöltőszínt (az alakzatok belseje átlátszó lesz)  

__Szöveg__
`text(s, x, y)`: kiírja `s` szöveget (x, y) pontba  
Például: `text("Szia!", width / 2, height / 2)`  

`textSize(n)`: beállítja a betűméretet n-re  
Például: `textSize(48)`  

`textFont(s)`: beállítja a betűtípust s-re
Például: `textFont("Courier New")`  

`textAlign(s1, s2)`: beállítja a szöveg igazítását, tehát hogy mikor meghívjuk a `text()` függvényt, akkor az átadott (x, y) pont a szöveg melyik pontja lesz.  
Alapértelmezésben ez a bal szöveg bal felső sarka, de átállíthatjuk a szöveg középpontjára: `textAlign("center", "center")`  

## Rajzolós programok

### Körös

__Random__  
Írj egy programot, ami minden pillanatban rajzol a vászonra egy kört (`circle()`) véletlen helyre, véletlen méretben (mondjuk 10-500 képpont között mozogjon a sugara). A kör kerete (`stroke()`) fekete legyen, a belseje ne legyen kiszínezve (`noFill()`). A vászont ne fesd le újra meg újra, hogy a körök megmaradjanak.  
Aztán egészítsd ki úgy, hogy a kör keretének a vastagsága (`strokeWeight()`) is véletlen legyen (mondjuk 1 és 10 képpont között) és a keret színe is.  
Azt is beleírhatod, hogy a `draw`-ban mégis lefested a vásznat újra meg újra fehérre, de csak nagyon halványan (tehát majdnem átlátszóan). Így a régebben rajzolt körök elhalványulnak.  

__Egérfogó__  
Írj egy programot, ami mindig rajzol egy kört a vászon közepére, és mindig pont akkorát, hogy a kör széle pont érintse az egeret.  
Ezt úgy tudod megcsinálni, hogy a kör sugarát mindig akkorára állítod, amilyen messze az egér épp van a vászon közepétől. Ehhez használd a `dist()` ("distance", távolság) függvényt, ami négy számot vár - az első pont x és y koordinátáit és a második pont x és y koordinátáit - és megmondja a két pont közötti távolságot.  

__Hipno__  
Írj egy programot, ami for ciklussal megrajzol 10 kört a vászon közepére: az elsőt 10 képpontos sugárral, a másodikat 20, a harmadikat 30 stb.  
Ha ez megvan, okosítsd fel úgy, hogy mindig csak annyi kört rajzoljon, hogy a körök ne menjenek "túl" az egéren. Tehát amilyen távol van az egér épp a vászon középpontjától, legfeljebb akkora lehet a legnagyobb kör - viszont annyi mindig legyen is. (Szóval például ha behúzod az egeret 12 képpontra a középponttól, akkor csak 1 kör legyen, de ha elviszed mondjuk 438 messzire, akkor legyen 48.) Ld. a `dist()` függvényt az előző feladatból.  
Én valószínűleg úgy csinálnám, hogy eleve megpróbálnám az egér helyzetéhez igazítva beállítani a for ciklus felső határát. 

### Vonalas

__Random__  
Húzz véletlen vonalakat a vásznon - véletlen pontokból véletlen pontokba. A vásznat te töröld le közben.  

__Görbüljek meg, ha nem igaz__  
Rajzolj sok egyenes vonalból egy görbét, mint [ezen a képen](http://informalmathematics.org/wp-content/uploads/2017/10/LineArt4.jpg).  
Írj egy for ciklust, ami sorban húzza a vonalakat: a (0, 0) pontból a (0, height) pontba; a (10, 0) pontból a (0, height - 10) pontba; a (20, 0) pontból a (0, height - 20) pontba stb. Gondolkodj vagy beszéld meg a mentoroddal, mi legyen a ciklus felső határa.  

__Vonalkód__  
Generálj egy vonalkódot úgy, hogy egymás mellé húzol sok függőleges vonalat, és véletlenszerűen döntöd el, hogy fehérek vagy feketék lesznek.  
A `draw` blokkban írt for-ciklussal kezd el függőleges vonalat kúzni, egyelőre jó lesz a vászon bal felső sarkából: az első vonal menjen a (0, 0) pontból a (0, 100) pontba; a második az (1, 0) pontból az (1, 100) pontba; a harmadik a (2, 0) pontból a (2, 100) pontba és így tovább. Húzz kétszáz vonalat.  
Ha ez megvan, írd meg, hogy a vonal színe vagy fehér legyen, vagy fekete. Ehhez egy új véletlen-függvényt használunk, aminek a neve `pick()` (válassz). Ez a függvény egy listát vár, tehát szögletes zárójelek között vesszővel elválasztva felsorolt dolgokat, és véletlenszerűen választ közülük egyet. Például így tudsz véletlenszerűen vagy 1-es vagy -1-es forgási sebességet adni egy sprite-nak: `bob.rotationSpeed = pick(1, -1)`.  
Ha kész vagy, gondolkozhatsz azon, hogyan tennéd a vonalkódot a vászon közepére.  
Azt is megírhatod, hogy minden egérkattintásra új vonalkód generálódjon.  
Vagy akár azt, hogy egy véletlen számsor is oda legyen írva a vonalkód alá, mint a valódiaknál.  
/// Példamegoldás: http://jsbin.com/gosipex/edit?js,output  
/// Illetve: [.peldamegoldas/vonalkod.js](.peldamegoldas/vonalkod.js)  

### Szöveges

Szöveges programok `setup` blokkjában általában érdemes kiadni ezt a parancsot, ami középre igazítja a szövegeket:  
```javascript
textAlign("center", "center")
```

__Betűvető__  
Minden pillanatban írj ki a vászon egy véletlen pontjára egy véletlen betűt a `text()` függvénnyel. Véletlen betűt úgy tudsz választani, hogy meghívod a `pick()` függvényt ezzel a bemenettel:  
```javascript
"abcdefghijklmnopqrtuvwxyz".split("")
```
A vásznat ne töröld le a betűk között, és a betűk mérete (`textSize()`) legyen véletlen mondjuk 10 és 80 között.  
Ha szeretnéd, véletlenre állíthatod a betűk színét (`fill()`) is.  

__Ráíró__  
Írj egy programot, ami egérkattintásra a kattintás helyére írja azt, hogy "helló". Aztán írd át úgy, hogy ne ezt írja, hanem mindig kérdezzen rá, hogy mit írjon ki - ehhez használd a `prompt()` parancsot. Ez feldob egy felugró ablakot, aztán visszatérési értékként visszaadja azt, amit beleírtál. A visszatérési értéket aztán bele tudod tenni egy változóba (mint ahogy a `createSprite()` függvény visszatérési értékét beletöltjük a `bob` változóba), vagy akár csak közvetlenül fel tudod használni a `text()` függvényben.  

__Gyorsolvasás__  
_Okosság_  
A `split()` függvény használata: ha meghívod egy szövegre, szétválasztja a szóközöknél, és egy listát ad vissza, amiben szavak vannak. A lista olyan, mint a sprite-csoport: szögletes zárójelekkel el tudod kérni belőle az első, második stb. elemet.  
Például ha azt írod a konzolba, hogy `"ez egy szöveg".split()`, akkor azt kapod eredményül, hogy `["ez", "egy", "szöge"]`. Ha pedig ezt eleve egy változóba töltöd bele -  `words = "ez egy szöveg".split()` - akkor utána a `words[0]` kifejezés értéke az lesz, hogy `"ez"`, a `words[1]` lesz az `"egy"` és a `words[2]` a `"szöveg"`.   
_Program_  
Írj egy programot, amivel úgy tudsz szövegeket szupergyorsan elolvasni, hogy nagy sebességgel pörgeti a szavakat a képernyőn. Először is keress pár mondat szöveget az interneten, akármit.  
A program `setup` blokkjában hozz létre két változót: az egyikbe tedd bele a szöveget, pontosabban a szöveget, amire meghívod a `split()` függvényt, hogy szavakra bontsa. A másik változó egy számláló, ebben a 0 számot tedd egyelőre.  
Aztán a `draw` blokkban minden pillanatban fesd le fehérre a vásznat, írd ki `text()` függvénnyel a szavak közül azt, ahányadiknál a számláló tart, aztán pedig növeld meg a számlálót.  
Ez elsőre valószínűleg túl gyors lesz, mert a `draw` blokk nagyon gyorsan ismétlődik. Viszont ennek a sebességét be tudod állítani, ha a `setup` blokkban meghívod a `frameRate()` függvényt és átadsz neki egy számot, ami megmondja, hogy másodpercenként hágyszor fusson le a `draw`.  
/// Példamegoldás: http://jsbin.com/gafafaz/edit?js,output  
/// Illetve: [.peldamegoldas/gyorsolvasas.js](.peldamegoldas/gyorsolvasas.js)  
