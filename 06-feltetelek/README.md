# Feltételek

## Alap p5 sablon

Nyisd meg ezt a linket: http://jsbin.com/jobofoh/edit?js,output  
/// Illetve: [../etc/p5-sablon.js](../etc/p5-sablon.js)
Kattints a `File > Clone` menüpontra, hogy kapj belőle egy saját változatot,  
aztán pedig `File > Save as template`, hogy elmentsd "sablonként".  
Mostantól ha új bint hozol létre (`File > New`) akkor ez a sablon fog megjelenni.  

## Feltételhez kötött parancsok

/// Először megírom a programot a feltételes rész nélkül, és látványosan beleütközöm az "if" hiányába.  
/// Félbehagyom a programot, megyek a következőre, ugyanígy megírom a másik kettőt is, aztán utólag javítom őket.  

/// Három program, amibe feltétel kéne: [.harom-feltetelhianyos-program.md](.harom-feltetelhianyos-program.md)  

Feltételek kipróbálása a parancssorban: http://jsbin.com/huxamah/edit?console,output  
/// Illetve: [.conditional-pets.js](.conditional-pets.js)  
/// Kipróbálandó:  
/// * Két dolog megegyezik:    
/// 1 + 1 == 2          // felhívni a figylemet a dupla egyenlőségjelre  
/// cat.position.x == dog.position.x  
/// day() == 3  
/// dayName() == "Monday"  
/// * Két szám viszonyul:  
/// mouseX > width / 2  
/// * Simán egy változó:  
/// mouseIsPressed  
/// dog.mouseIsOver  
/// * Simán egy függvény:  
/// cat.overlap(dog)  

Feltételek formái: [feltetel-formak.md](feltetel-formak.md)  

Példák feltételes szerkezetekre: [feltetel-peldak.md](feltetel-peldak.md)  

Három példaprogram feltételekkel: [harom-felteteles-program.md](harom-felteteles-program.md)

Kétágú feltétel: [ketagu-feltetel.md](ketagu-feltetel.md)  

### Feltételes programok

__Cápatámadás__  
Írj egy programot, amiben létrejön egy sprite a vászon közepén, először még nullás nagyítással (`scale` változó), de aztán újra meg újra egy kicsit nagyobb lesz. Hasonló programunk már volt, akkor egérkattintásra kellett visszaugrania nullára a nagyításnak; most inkább úgy írd meg, hogy egy bizonyos méret után ugorjon vissza. Tehát HA elére a háromszoros nagyítást, akkor állítsd vissza a nagyítását nullára.  
(Ha van időd, kereshetsz hozzá képet is - "shark front png". Vagy ha ezt a programot már megírtad a múltkor, akkor elég, ha az előző leklónozod - File > Clone - és módosítod.)  

__Itt a piros__  
Írj egy programot, amiben létrejön egy piros színű sprite a vászon egy véletlenszerű helyén, és minden pár másodperc elteltével elugrik egy új véletlen helyre.  
Ezt úgy lehet megoldani, hogy a `setup` blokkban nem csak a sprite-ot hozod létre, hanem egy változót is, amit aztán számolásra tudsz használni. A változó neve lehet mondjuk `counter` ("számláló") és induljon nulláról. Aztán a `draw` blokkban mindig növeld meg eggyel a számlálót, és vizsgáld meg, hogy elérte-e már egy bizonyos felső határt (ez legyen mondjuk 120, de aztán átírhatod, ha túl gyors vagy lassú a program). Ha elérte, ugrasd el a sprite-ot, és nullázd le a számlálót.  
Ha szeretnél, kereshetsz képet is a sprite-nak: lehet Waldo (a piros-fehér csíkos ruhás [figura](https://media.golfdigest.com/photos/5ac259d2b312500b48a85018/master/pass/waldo2.jpg), akit [ilyen képeken](https://i.ytimg.com/vi/SiYrSYd7mlc/maxresdefault.jpg) kell megtalálni), egy nyúl ("bunny"), egy hoppanálgató Harry Potter-szereplő, vagy amit csak szeretnél.   

__Forgatás__  
Írj egy programot, amiben minden kattintáskor létrejön egy új sprite az egér helyén, és elkezd automatikusan forogni (`rotationSpeed`).  
Úgy írd meg, hogy ha a vászon bal felén jön létre, akkor jobbra forog, ellenkező esetben viszont balra (negatív forgási sebesség).  
Azt is írd bele, hogy ha a vászon felső felében jön létre, akkor narancssárga, ha az alsóban, akkor kék.  
(Ha ez megvan, kiegészítheted még azzal is, hogy egy sprite pedig fixen mindig az egeredet kövesse, viszont színben és forgásban ugyanazok a szabályok vonatkoznak rá, mint a többiekre.)  

__Színválasztó__  
Írj egy programot, amiben három sprite van, és ha rákattintasz bármelyikre, a vászon annak a sprite-nak a színére színeződik.  
Ehhez először is hozz létre egy változót, amibe beleírod egy színnek a nevét, és mikor a `draw` blokkban beszínezed az egész vásznat a `background()` paranccsal, akkor annak a parancsnak ne egy konkrét színt adj meg, hanem ezt a bizonyos változót. Hozd létre a három sprite-ot is, és az egérkattintásra figyelő blokkban egyenként teszteld le, hogy rájuk kattintottál-e (tehát hogy a kattintás pillanatában az egér a sprite fölött van-e). Ehhez szükség van arra, hogy már a sprite-ok létrehozásakor "igaz"-ra (`true`) állítsd a sprite-ok `mouseActive` változóját! Ha valóban valamelyik sprite-ra kattintottál, tárold el az ő színét abban a változóban, amit először hoztál létre.  
 
__Fémdetektor__  
Keressünk fémet detektorral! Két sprite fog kelleni: az egyik a fém, a másik a detektor. A detektornak keress egy jó képet ("metal detector"), és írd meg, hogy mindig kövesse az egeret. A fém-sprite-ot kicsinyítsd le kb. 20*20 képpontnyira, helyzed véletlen helyre a vásznon, és tedd láthatatlanná - ezt úgy tudod megtenni, hogy a sprite `visible` ("látható") nevű változóját "hamis"-ra (`false`) állítod.  
Ezek után már csak meg kell keresni a fémet a detektorral. Minden billentyűnyomáskor ellenőrizd, hogy a detektor a fém fölött van-e (rálóg-e, `overlap()`). Ha igen, tedd a fémet-sprite-ot láthatóvá.  
Kattintásra pedig legyen a fém-sprite megint láthatatlan, és ugorjon egy véletlen helyre.    

#### Unatkozós

__Rángatható sprite__  
Tipikus programozói feladat: szeretnénk, ha valamit - jelen esetben egy sprite-ot - meg lehetne fogni, és kattintással és húzással arrébb lehetne rakni.  
Ötlet: hozz létre egy változót, ami megjegyzi, hogy most épp mozgatod-e a sprite-ot. (Én úgy nevezném el, hogy "isDragging", de elnevezheted máshogy is.) Ez alapból legyen "hamis" (`false`), aztán majd állítgatjuk. Írd meg azt is a `draw`-ban, hogy ha ez a változó igaz, akkor a sprite legyen mindig az egér helyén, amúgy viszont ne.  
Infó: nem csak `mouseClicked` blokk van, hanem `mousePressed` és `mouseReleased` is - tehát pontosan el tudod kapni az egérgomb lenyomását és felengedését is. Az előbbi blokkban meg kell vizsgálni, hogy épp a sprite fölött van-e az egér (`mouseIsOver`, ne felejtsd el a `mouesActive` változót), és ha igen, "igaz"-ra (`true`) állítani azt a változódat, ami tudja, hogy épp rángatod-e a sprite-ot. A `mouseRelased` blokkban pedig ugyanezt a változót feltételn nélkül "hamis"-ra kell állítani.  

## Irányítás billentyűzettel

A legutolsó leütött billentyűt a p5 speciális változókban tárolja. Ha látható karakterről van szó, a `key` változót használhatod:  
```JavaScript
if (key == "A") {
    alert("Aha")
}
```
(Géptől, böngészőtől, és a Szaturnusz pillanatnyi állásától függően lehet, hogy a betűknek a nagy változatát kell használnod, tehát "a" helyett "A" kell a feltételbe.)  

Egyéb billentyűkhöz (enter, escape stb.) a `keyCode` változó áll rendelkezésedre, amit beépített nevekkel tudsz összehasonlítani:  
```JavaScript
if (keyCode == ENTER) {
    alert("Igen")
}
```

Az elérhető billentyűködok listája:  

Név | Billentyű      
--- | ---
`UP_ARROW`      | Felfele nyíl   
`DOWN_ARROW`    | Lefele nyíl    
`LEFT_ARROW`    | Balra nyíl
`RIGHT_ARROW`   | Jobbra nyíl
`BACKSPACE`     | Visszatörlés
`DELETE`        | Előre törlés
`ENTER`         | Enter
`TAB`           | Tab (jobbra mutató nyíl)
`ESCAPE`        | Escape (esc)
`SHIFT`         | Shift (felfelé nyíl)
`CONTROL`       | Control (ctrl)
`OPTION`        | Option (alt), csak Apple gépeken
`ALT`           | Alt, windows/linux gépeken

### Billentyűzetes programok

__Szimpla__  
Csinálj egy sprite-ot, és a billentyűnyomásra figyelő `keyPressed` blokkban írd meg feltételekkel, hogy ha megnyomod a felfele nyilat, akkor feljebb menjen 100 képponttal; ha a jobbra nyilat, akkor jobbrább menjen 100 képponttal stb.  
Kereshetsz hozzá egy felülnézeti ("top") képet is valamiről, pl. teknősről ("turtle"), rendrőautóról ("police car"), kacsacsőrű emlősről ("platypus"), ufóról, vagy ami jólesik. Akkor viszont írd bele azt is, hogy a mozgásoknál a sprite a megfelelő irányba nézzen (`rotation` változó).   

__Dupla__  
Egészítsd ki az előző programot (ha szeretnéd megtartani az előzőt, akkor File > Clone, és itt folytasd) úgy, hogy legyen valami levadászandó is benne: hozz létre még egy sprite-ot, aki kisebb a másiknál, a program elején véletlen helyről indul. Írd bele a programba, hogy valahányszor az első sprite elkapja a másodikat (tehát a két sprite átfed, `overlap()`), az első sprite kicsit megnő (`scale`), a második pedig újra véletlen helyre ugrik.  
Kereshetsz képet is a második sprite-nak: levelet ("leaf"), bűnözőt ("crimical"), garnélarákot ("shrimp"), vagy amit szeretnél.  

__Pablo Picasso__  
Írj egy programot, amiben egy sprite minden pillanatban véletlen helyre ugrik. Úgy írd meg, hogy a vászon ne törlődjön le újra meg újra, hogy megmaradjanak a sprite nyomai.  
Utána a billentyűnyomáskor lefutó blokkba (`keyPressed`) írd bele azt, hogy ha az "r" betűt nyomtad, akkor a sprite kapjon piros színt; ha a "g" betűt, akkor zöldet; ha pedig a "b" betűt, akkor kéket. A program legelején a sprite induljon piros színnel.  
Ha szeretnéd, azt is beleírhatod, hogy az "1" billentyű megnyomására a sprite összemegy az eredeti méretének a két tizedére (`scale` változó), a "2"-re megkapja az eredeti méretét, a "3"-ra viszont négyszeresére nő.  

__Rotációs kapa__  
Rakj a vászon közepére egy sprite-ot, és adj neki autókerék-alakot (vagy propeller, vagy smiley, vagy jin és jang, vagy bárki kerek). Írd meg, hogy a felfelé-billentyűre megnőjön valamennyivel a nagyítása (`scale`), a lefelé billentyűre pedig összemenjen kicsit.   
Azt is írd meg, hogy a jobbra billentyűre megnőjön valamennyivel a forgási sebessége (`rotationSpeed`), a balra billentyűre pedig lecsökkenjen kicsit.  
(Ha lélekben fel vagy készülve egy dupla feltételre: írd meg, hogy a sprite nagyítása sose menjen mondjuk 0.5 alá, tehát a lefelé gomb megnyomásakor még ezt is vizsgáld meg. Ezt vagy úgy tudod megtenni, hogy az if-be újabb if-et teszel, vagy úgy, hogy az egy darab if-be két feltételt írsz, és egy ÉS szerkezettel összekapcsolod őket - a mentorod segít.)  

__Indokolatlan rajzoló__  
A sprite-oknak van egy `visible` ("látható") nevű változója, ami alapból "igaz"-ra van állítva, de ki lehet kapcsolni. Ezt fogjuk most kihasználni.  
Keress egy képet egy mobiltelefonról, egy hotdogról, egy basszusgitárról - vagy bármi indokolatlanról, ami eszedbe jut - és add alakul egy sprite-nak, aki egyben mindig követi az egeret.  
Írd meg, hogy ha megnyomod az "i" (mint "invisible", tehát láthatatlan) billentyűt, akkor a sprite-nak a `visible` változója "hamis"-ra (`false`) állítódik, ha viszont a "v" (mint "visible") billentyűt nyomod meg, akkor állítódjon újra láthatóra.  
A program elején a sprite rögtön indítson láthatatlanul, és a `draw` blokkban ne töröld le a vásznat. Innentől kedvedre rajzolhatsz a képeddel.   

#### Unatkozós

__Invázió__  
Hozz létre egy űrhajó ("space ship" vagy "rocket") alakú sprite-ot a vászon közepén, és írd meg, hogy a jobbra-balra nyilak hatására 15 fokot forduljon a megadott irányba (`rotation`). Az a legjobb, ha olyan képet találsz, amin az űrhajó jobbra néz.  
Hozz létre egy aszteroida-alakú sprite-ot is a vászon véletlen helyén.  
Írd meg, hogy a szóköz billentyű lenyomására az űrhajó lő egyet - tehát létrejön a vászon közepén egy kicsi sprite (nem kell neki kép, csak állítsd kicsire) és kap egy fix, automatikus sebességet abba az irányba, amerre az űrhajó épp néz.  
Találat: írd meg azt is, hogy ha a lövedék és az aszteroida fedésbe kerül, az aszteroida menjen új, véletlen helyre, a lövedék pedig törlődjön ki (`remove()`).   

## Kiegészítő téma: további sprite-mozgások

### Lassuló mozgás: súrlódás

Alapból egy `setSpeed()`-del elindított sprite a végtelenségig csúszik, mert alapértelmezésben nincsen súrlódása. Ha szeretnénk neki adni, adjunk a sprite `friction` változójának értéket. Ez a változó magától 1-ről indul. Ha 1-nél kisebb számra állítjuk, akkor súrlódni kezd, és lelassul. Ha 0-ra, nem hajlandó elmozdulni. 1-nél nagyobb számra ne állítsuk, mert felrobban az univerzum.  
Igazából már akkor is látványos az eredmény, ha csak 0.98-ra csökkentjük.  

Példa:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = width / 2
    bob.setSpeed(5, SOUTH)              // csak egyszer adunk neki sebességet
    bob.friction = 0.98                 // súrlódás beállítása
}

function draw() {
    background("white")
    allSprites.draw()
}
```

### Gyorsuló mozgás: gravitáció

Mozgás fix sebességgel: `setSpeed()`, amit csak egyszer adunk ki (pl. `setup` vagy `mouseClicked` blokk).  
Mozgás egyre növekvő sebességgel: `addSpeed()`, amit újra meg újra kiadunk (tehát `draw` blokk).
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = width / 2
}

function draw() {
    background("white")
    bob.addSpeed(0.1, SOUTH)            // újra meg újra hozzáadunk a sebességéhez egy kicsit
    allSprites.draw()
}  
```

### Pattogás

Ahogy két sprite találkozásakor van parancs arra, hogy az egyik csak nekimenjen a másiknak és megálljon (`collide`, "nekiütközik"), és arra is, hogy eltolja azt (`displace`, "elmozdít"), úgy arra is van parancs, hogy a sprite lepattanjon a másikról: `bounce`.  
Alapból a két sprite mindegyike elpattan és mozogni kezd. Ha azt szeretnénk, hogy csak az első pattanjon, és a másik mozdulatlan maradjon, az utóbbinak állítsuk az `immovable` változóját `true`-ra.  

```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)

    bob = createSprite()
    bob.setSpeed(5, SOUTH)
    bob.position.x = width / 2

    cat = createSprite()
    cat.position.x = width / 2
    cat.position.y = height / 2
    cat.immovable = true            // mozdíthatatlan
}

function draw() {
    background("white")
    bob.bounce(cat)                 // visszapattanás
    allSprites.draw()
}
```

### Felhasználás

__Chicago Bulls__  
Írj egy programot, amiben egy kosárlabda-képű ("basketball") sprite lefelé zuhan a gravitáció miatt (`addSpeed`), de mindig visszapattan (`bounce()`) egy másik, lapos, széles sprite-ról, ami mozdíthatatlan (`immovable`).  

__Tüskecsarnok__  
Írj egy programot, amiben egy sün-alakú ("hedgehog") sprite a vászon közepéről indulva a jobbra-balra nyilakra jobbra-balra fordul 15 fokot (`rotation`), az előre nyílra pedig kap valamennyi sebességet mindig épp az aktuális forgásának az irányába (`addSpeed`), de hogy ne csússzon a végtelenségig, valamennyi súrlódása is van (`friction`).  
