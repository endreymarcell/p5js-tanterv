# Ciklusok

A ciklus akkor hasznos, ha egy parancsot sokszor egymás után meg szeretnél ismételni.  

/// Játék: programozó vs főnök egy p5.js programokat író cégnél  
/// Főnök: most jött egy megkeresés, ennek az ügyfélnek kéne egy program, amiben egy sprite véletlen helyen van a vásznon. Meg tudod csinálni?  
/// Programozó: persze, holnapra meglesz. (Főnök el, programozó megírja a programot.)  
/// Főnök: most szólt az ügyfél, hogy mégsem egy sprite kéne, hanem 5. Menni fog?  
/// Programozó, bosszúsan: persze, persze, nem para. (Mérgelődve megírja. Minden sprite-nak külön nevet ad.)    
/// Főnök: figyelj, mégsem öt kéne, hanem tíz.  
/// Programozó: rájön, hogy nem kell külön név minden sprite-nak, copy-paste-tel megoldja a tíz sprite-ot.  
/// Főnök: Nagyon jó. Ezzel meg is volnánk. Itt a következő megrendelés. Kétszáz sprite-ot szeretne.    
/// Programozó: akkor én leszek inkább pék.  

## A for ciklus

### Működés

A ciklus logikája a következő: előre tudom, hogy 30-szor szeretném lefuttatni. Valahol számolnom kell, tehát kell majd egy számláló változó, ami nulláról indul, és mindig hozzáadok egyet, és kell majd valami kód, ami ellenőrzi, hogy elértem-e már a 30-at.  
(A számlálót hagyományosan `i`-nek szoktuk elnevezni.)  
Tehát valami ilyesmi dolog kéne:  
```JavaScript
i = 0
if (i < 30) {
    bob = createSprite()
    bob.position.x = random(0, width) 
    bob.position.y = random(0, height)
    i += 1 
}
// és most valahogy vissza kéne ugrani az if-es sorba...
```

"Visszaugrás" nem létezik, viszont pont erre a feladatra van egy szerkezet JavaScriptben. Úgy hívják, hogy "for" ciklus.  
Hasonlóan néz ki az `if` szerkezethez, de kicsit más dolgok vannak benne. Viszont a fenti alkotóelemeket mind megtaláljuk benne valahol.  
Így néz ki:  
```JavaScript
for (i = 0; i < 30; i += 1) {
    bob = createSprite()
    bob.position.x = random(0, width) 
    bob.position.y = random(0, height)
}
```

Ha kell, a cikluson belül magát az `i` változót is tudjuk használni. Például ez a ciklus:  
```JavaScript
for (i = 0; i < 10; i += 1) {
    print("Szervusz Mufurc!")
}
```
tud számolni is:  
```JavaScript
for (i = 0; i < 10; i += 1) {
    print(i)
}
```

Ez egy csomó dologra hasznos, például ha egyenlő távolságra akarok sprite-okat letenni:  
```JavaScript
for (i = 0; i < 10; i += 1) {
    bob = createSprite()
    bob.position.x = i * 100 
    bob.position.y = height / 2
}
```

### Programok ciklussal

__Boldog karácsonyt__  
Keress egy képet egy hópihéről, és írj egy programot, amiben sötétkék vásznon egy véletlen helyen létrehozott sprite megkapja ezt a képet.  
Ha ez megvan, tedd bele a sprite létrehozását egy 15-ször lefutó ciklusba, hogy sok hópihéd legyen. 

__Körhinta__  
Írj egy programot, amiben létrejön egy sprite véletlen helyen, véletlen nagyításban 0.2 és 2 között (`scale`), és kap egy véletlen méretű automatikus forgási sebességet -5 és 5 között (`rotationSpeed`).  
Aztán írd át a programot úgy, hogy nem egy sprite jön létre, hanem 15, és ehhez használj for ciklust.  

__Madárteremtő__  
Írj egy programot, amiben minden kattintáskor létrejön egy sprite a kattintás helyén, és automatikusan elindul egy véletlen irányba (`setSpeed()`).  
Ha ez megvan, írd át úgy, hogy egy for ciklus használatával nem egy, hanem tíz sprite-ot teremtesz minden kattintásra.  
(Ha szeretnél, kereshetsz hozzájuk valami madár-képet is.)  

__Futás__  
Írj egy programot, amiben létrejön egy sprite a vászon bal felső sarkában, és kap egy automatikus sebességet jobbra (`setSpeed()`). A sebesség mérete 1 legyen.  
Utána írd át úgy a programot, hogy egy ciklusban 10 sprite-ot hozol létre, akik egyre nagyobb sebességet kapnak: az első 1-et, a második 2-t stb. - ehhez fel tudod használni az `i` ciklusváltozót.  
(Még látványosabb, ha nem pont ugyanonnan indulnak, hanem az első a vászon bal felső sarkából, a második 100 képponttal lejjebbről, a harmadik 200 képponttal lejjebbről... Ehhhez szintén az `i` változót használhatod.)  

__Diagram__  
Hozz létre egy sprite-ot az (50, height) pontban, és adj neki véletlen magasságot 0 és `height` között. Ő az oszlopdiagramunk első tagja.  
Most tedd egy tízes ciklusba a sprite-létrehozást, méghozzá úgy, hogy az első sprite x koordinátája maradjon 50, a másodiké legyen 150, a harmadiké 250 és így tovább. Ha jók csináltad, egy pofás oszlopdiagramot kapsz.  

#### Unatkozó

__Durva diagram__  
Tudod, mitől lenne még jobb a fenti diagram? Ha az utolsó oszlop pont a vászon jobb széléig érne. Ehhez a létrehozott sprite-ok szélességét kell finomhangolnunk.  
Mivel tíz sprite-ot csinálunk, a sprite-ok szélessége pont a vászon szélességének a tizede kell hogy legyen. Csinálj egy változót, amiben ezt az értéket kiszámolod és eltárolod. Utána pedig, mikor a sprite-okat létrehozod, az x koordinátájukat ennek alapján állítsd be, a szélességüket pedig pontosan ennyire.  
(Emlékeztető: 100-as szélességnél az x koordináták: 50, 150, 250, 350... A mentoroddal gondolkodhattok közösen, hogy hogy kell ezt jól kiszámolni.)  

__Durvább diagram__  
Tudod, mitől lenne még jobb az előző diagram? Ha nem mindig 10 oszlop lenne rajta, hanem mondjuk véletlen számú 5 és 25 között.  
Először csinálj egy véletlenszámot, és mentsd el egy változóba - ne felejtsd el kerekíteni!  
Utána pedig módosítsd az előbb megírt programot úgy, hogy 10 helyett mindig ezt a számot használod.  
/// Példamegoldás: http://jsbin.com/jebuwux/edit?js,output  
/// Illetve: [.peldamegoldas/durva-diagram.js](.peldamegoldas/durva-diagram.js)  


### Az allSprites csoport

A minden programban szereplő `allSprites.draw()` parancsban az `allSprites` egy csoport, ami tartalmazza az összes eddig létrehozott sprite-ot.  
Az `allSprites.length` megmondja, hány sprite van éppen, elérni pedig úgy tudjuk őket, hogy szögletes zárójelben odaírjuk a sorszámukat.  
Vigyázat, a számozás nullától kezdődik! Tehát az első létrehozott sprite az `allSprites[0]`, a második az `allSprites[1]` és így tovább.  

Ha a setupban van egy  
```JavaScript
bob = createSprite()
```
akkor utána a draw-ban a  
```JavaScript
bob.rotationSpeed = 5
```
helyettesíthető azzal, hogy  
```JavaScript
allSprites[0].rotationSpeed = 5
```

Ez azért jó, mert ha sok sprite-unk van, akkor tudunk for ciklust használni rajtuk. Például itt van ez a program, ami öt, folyamatosan növekvő sprite-ot csinál:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = random(0, width)
    bob.position.y = random(0, height)
    cat = createSprite()
    cat.position.x = random(0, width)
    cat.position.y = random(0, height)
    dog = createSprite()
    dog.position.x = random(0, width)
    dog.position.y = random(0, height)
    tom = createSprite()
    tom.position.x = random(0, width)
    tom.position.y = random(0, height)
    pip = createSprite()
    pip.position.x = random(0, width)
    pip.position.y = random(0, height)
}

function draw() {
    background("white")
    bob.scale += 0.1
    cat.scale += 0.1
    dog.scale += 0.1
    tom.scale += 0.1
    pip.scale += 0.1
    allSprites.draw()
}
```

Itt a `draw()` nézhetne ki úgy, hogy  
```JavaScript
function draw() {
    background("white")
    allSprites[0].scale += 0.1
    allSprites[1].scale += 0.1
    allSprites[2].scale += 0.1
    allSprites[3].scale += 0.1
    allSprites[4].scale += 0.1
    allSprites.draw()
}
```

Ezt pedig már simán be tudjuk rakni egy for-ciklusba:  
```JavaScript
function draw() {
    background("white")
    for (i = 0; i < 5; i += 1) {
        allSprites[i].scale += 0.1
    }
    allSprites.draw()
}
```

Sőt, tulajdonképpen a setup-ban is mehet a for:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    for (i = 0; i < 5; i += 1) {
        bob = createSprite()
        bob.position.x = random(0, width)
        bob.position.y = random(0, height)
    }
}

function draw() {
    background("white")
    for (i = 0; i < 5; i += 1) {
        allSprites[i].scale += 0.1
    }
    allSprites.draw()
}
```

Ezen a programon még lehet egy kicsit javítani. Most az a gond, hogy ha kitalálom, hogy mégsem 5 sprite kell, hanem 10, akkor két helyen is át kell írnom: a `setup` blokkban és a `draw` blokkban is.  
Úgy lehet okosabban csinálni, hogy a `draw` blokkba nem írom bele számmal, hogy hányszor fusson a ciklus, hanem azt mondom, hogy pont annyiszor, ahány sprite-om éppen van. Ezt az `allSprites.length` változó árulja el. Tehát:  
```JavaScript
for (i = 0; i < 5; i += 1) {
```
helyett
```JavaScript
for (i = 0; i < allSprites.length; i += 1) {
```
és akkor innentől kedvemre módosíthatom a létrehozott sprite-ok számát a `draw` blokkban, a `setup` automatikusan működni fog.  

### Programok csoportokkal

__Nagyon kávé__  
Írj egy programot, amiben létrehozol egy sprite-ot véletlen helyen, és aztán minden pillanatban hozzáadsz a nagyításához (`scale`) 0.1-et.  
Ha ez megvan, írd át a programot úgy, hogy 12-szer lefutó ciklusban hozz létre 12 különböző sprite-ot, és a `draw` blokkban szintén egy ciklussal végigmész mind a 12-n, és mindegyiknek megnöveled a nagyítását.  
(Kereshetsz hozzá képet is egy csésze kávéról.)  

__Alternatív nagyon kávé__
Írj egy programot, amiben kattintásra létrejön egy új sprite az egér helyén. A `draw`-ban pedig egy ciklussal menj végig az összes éppen létező sprite-on (ciklus felső határa: `allSprites.length`) és mindegyiknek hozzáadsz 0.1-et a nagyításához.  
(Kereshetsz hozzá képet is egy csésze kávéról.)  

__Aljas Nyolcas__  
Írj egy programot, amiben létrejön egy sprite véletlen helyen, véletlen irányba fordulva (`rotation`), és add neki alakul ezt a képet: https://opengameart.org/sites/default/files/survivor-idle_rifle_0.png (vagy egy hasonlót).  
Írd meg azt is, hogy egérkattintásra ugorjon egy új véletlen helyre, és kapjon új véletlen fordulatot.  
Ha ez megvan, írd át a programot úgy, hogy a `setup` blokkban egy 8-as ciklusban jöjjön létre nyolc sprite, és a `mouseClicked` blokkba is írj ciklust, hogy mindegyik új helyet és irányt kapjon.  
/// Példamegoldás: http://jsbin.com/luxuzuw/edit?js,output  
/// Illetve: [.peldamegoldas/aljas-nyolcas.js](.peldamegoldas/aljas-nyolcas.js)  

__Wow__  
Keress egy képet egy meglepett emojiról, és írj egy programot, amiben egy véletlen helyen születő sprite ezt a képet kapja meg.  
Aztán írd meg a `draw` blokkot úgy, hogy a sprite aktuális nagyítása (`scale`) mindig annyi legyen, amennyi az egér aktuális x pozíciója. Na jó, inkább oszd el az egér x pozícióját 1000-rel, és úgy állítsd be a sprite nagyításaként, különben a sprite túl nagyra fog nőni :P  
Azt is írd meg, hogy a sprite forgása (`rotation`) pedig az egér aktuális y pozícióját vegye fel.    
Ha ez megvan, jön a poén: írd át a sprite létrehozását a `setup` blokkban úgy, hogy ciklust használjon, és legyen 20 sprite; és a `draw` blokkban is használj ciklust, hogy mindegyik sprite nagyítódjon és forogjon.   
/// Példamegoldás: http://jsbin.com/duvuvoh/edit?js,output  
/// Illetve: [.peldamegoldas/wow.js](.peldamegoldas/wow.js)  

__Gyere közelebb__  
Írj egy programot, amiben létrejön egy sprite egy véletlen helyen, és aztán minden pillanatban az egértől függően állítod be a méretét - konkrétan úgy, hogy a sprite nagyítását (`scale`) beállítod ennyire: `100 / dist(bob.position.x, bob.position.y, mouseX, mouseY)`. A sprite automatikus forgási sebességét (`rotationSpeed`) is beállíthatod ugyanerre az értékre.    
(A `dist()` függvény megmondja két dolog távolságát - jelen esetben a bob nevű sprite és az egér távolságát. Az osztás pedig azért kell, mert azt szeretnénk, hogy minél _kisebb_ az egér és a sprite távolsága, annál _nagyobb_ legyen a sprite mérete - tehát meg kell fordítani az arányosságot.)  
Ha ez megvan, hozz létre egy helyett 10 sprite-ot for ciklusban a `setup` blokkban, és alkalmazd a fenti logikát mindegyikre a `draw` blokkban, persze szintén for ciklussal.  

#### Unatkozós

__Vadász__  
A `setup` blokkban hozz létre egy sprite-ot véletlen helyen, automatikus forgási sebességgel (`rotationSpeed`). Aztán írd meg, hogy ha rákattintasz, eltűnik (`remove()`). Ehhez a `mouseClicked` blokkba kell egy `if`-et írni a megfelelő feltétellel. (Ne felejtsd el előtte a `mouseActive`-ot beállítani!)    
Most írd át a programot úgy, hogy 15 sprite jön létre, és bármelyikre működik a kattintásra eltüntetés. Ehhez a `mouseClicked` blokkban bele kell raknod az `if`-et a `for` ciklusba. Arra is vigyázz, hogy a létrehozásnál jó lesz a ciklus felső határának a 15, de a kattintásnál már lehet, hogy csak 14 vagy 13 vagy még kevesebb sprite van... Úgyhogy itt már nem 15-ig kell számolni, hanem addig, ahány sprite épp benne van az `allSprites` csoportban.  

__Koreográfia__  
Írj egy programot, amiben egy sprite létrejön egy véletlen helyen, és ha lenyomsz bármilyen billentyűt, akkor automatikus forgási sebességet kap `rotationSpeed`.  
Ha ez megvan, okosítsd fel úgy, hogy a jobbra nyíl lenyomásától jobbra, a balra nyíl lenyomásától balra forgó állandó forgási sebességet kapjon a sprite.  
Most pedig írd át a sprite létrehozását és forgatását ciklusokkal, úgy, hogy tíz sprite-ra menjen egyszerre.  

## Kiegészítő téma: saját csoportok

Az `allSprites` csoport automatikusan létrejön, és automatikusan bele is kerül minden aktuálisan létező sprite. De csoportot magad is tudsz csinálni, és így a sprite-oknak csoportonként különböző viselkedést tudsz adni.  
Így kell csoportot létrehozni, és belerakni egy sprite-ot:    
```JavaScript
dogs = createGroup()
buksi = createSprite()
dogs.add(buksi)
```

Ha később a csoport minden tagjára szeretnél egy viselkedést alkalmazni, ugyanúgy a for ciklust tudod használni, mint az `allSprites` csoportnál:  
```JavaScript
for (i = 0; i < dogs.length; i += 1) {
    dogs[i].position.x = mouseX
}
```

A sprite-interakciókért felelős függvények (`overlap()` az átfedés vizsgálatára, `collide()` az ütközésre, `displace()` az eltolásra, `bounce()` a lepattanásra) használatához nem kell for ciklus, azokat csoportokra is lehet alkalmazni:  
```JavaScript
cats = createGroup()
dogs = createGroup()
// ...
cats.displace(dogs)
```

### Programok saját csoportokkal

__Toló__  
Hozz létre hat sprite-ot. Az első három legyen piros, és kerüljön egy csoportba; a második három legyen zöld, és kerüljön egy másik csoportba. Mind a hat legyen random helyen. (Én a létrehozás során valószínűleg for ciklust használnék, de három-három sprite-nál ez még nem kritikus.)  
Aztán hozz létre még egy utolsó sprite-ot, és írd meg a `draw` blokkban, hogy mindig kövesse az egeret. Azt is írd bele a `draw` blokkba, hogy az egeret követő sprite eltolja (`displace()`) a zöldeket, de megakadok (`collide`) a pirosakban.  
Ehhez nincs szükség for ciklusra, a fenti parancsokat egyéni sprite-okra és csoportokra egyaránt tudod alkalmazni.  

__Forgó__  
Keress egy képet egy pénzérméről ("coin"). Hozz létre for-ciklussal tíz sprite-ot, tedd őket véletlen helyre és add nekik alakul a pénzérme-képet. Hozz létre egy csoportot is. Aztán írj még egy for-ciklust még a `setup` blokkban, ami végigmegy az `allSprites` csoport első öt elemén, és hozzáadja őket a saját csoportodhoz.  
A `draw` blokkban pedig azt írd meg, hogy ha a vászon bal felében tartod az egeret, akkor a saját csoportodban lévő érme-sprite-ok forognak (`rotation` változó növelése).    

__Hóesős__  
Keress egy képet egy hópihéről ("snowflake"). A `setup` blokkban hozz létre egy csoportot nekik, aztán for ciklusban hozz létre 12 sprite-ot, és tedd bele őket a csoportba. Ezen felül tedd minegyiket (tobábbra is a for ciklusban) random helyre, mindegyiknek add alakul a hópihét, és adj nekik egy automatikus sebességet is lefelé (`setSpeed()`).  
Ha jól csináltad, szépen esnek lefelé a hópelyhek. (Kék háttér előtt még látványosabb, mint fehér előtt.) Most már csak az kéne, hogy ne fogyjanak el, hanem ami kiesett alul, az essen be újra felül. Ezt úgy tudod megoldani, hogy a `draw` blokkban egy for ciklussal végigmész a csoport összes tagján, és a for cikluson belül egy if-fel megnézed, hogy kimentek-e a vászon alján (tehát az y koordinátájuk nagyobb-e `height`-nál). Ha igen, akkor vissza kell őket tenni felülre (y-t nullára).  
Ha ez még nem elég, csinálj még egy sprite-ot, aki egy hóember ("snowman") alakját kapja, és persze nincs benne az általad létrehozott csoportban. A hóember álljon a vászon alján, az x koordinátája legyen mindig az egér aktuális x koordinátája, és ne tudjanak rajta átesni a hópihék (tehát ütközzenek neki, `collide()`).  

#### Unatkozós

__Tigrisbukfenc__  
Keress egy képet egy tigrisről (lehetőleg úgy, hogy épp ugrik). Hozz létre egy csoportot, és hozz létre for ciklussal nyolc tigrist, akik mind megkapján alakul ezt a képet, belekerülnek a csoportba, és mind véletlen helyre kerülnek a vásznon.  
A `draw` blokkban egy for ciklussal menj végig a tigris-csoporton, és mindenkit forgass el egy kicsit (`rotation` változó megnövelése).  
Ha ez megvan, írd át a programot úgy, hogy a program elején a tigris-sprite-ok még _nem_ kerülnek bele a tigris-csoportba, viszont igazra (`true`) állítod a `mouseActive` változójukat. Írd meg azt is, hogy ha rákattintasz valamelyik sprite-ra, akkor az hozzáadódik a csoporthoz: a `mouseClicked` blokkba kell majd egy for ciklus, ami az `allSprites` csoporton megy végig, és mindegyikre hív egy `if`-et a megfelelő feltétellel.  
