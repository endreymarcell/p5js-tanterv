## Grafika

### Perlin-zaj

#### Elmélet

Tegyük fel, hogy szeretnék egy véletlen tájat generálni, kb. egy [hegyvonulatot, mint ez](https://gpfault.net/assets/post-img/perlin-noise/1d-fractal-noise-screenshot.png).  
Az az ötletem, hogy sok-sok függőleges vonalat húzok egymás mellé a vászon bal szélétől a jobb széléig. Mindegyik a vászon aljáig fog érni, de a magasságuk véletlen lesz, így aztán véletlen lesz a táj is. Ezt írom a `setup` blokkba:  
```javascript
createCanvas(windowWidth, windowHeight)
background("white")
for (i = 0; i < width; i += 1) {
    line(i, random(0, height), i, height)
}
```
[Itt az eredmény](http://endreymarcell.hu/p5v4/misc/random-lines.png). Hát ez minden, csak nem az, amit akartam.  
Azt a baj, hogy a `random()` tényleg minden pillanatban teljesen véletlen számot ad, nekem pedig az kéne, hogy a táj valahogy _egyenletesen_ legyen random, szóval véletlenszerűen változzon, de azért legyen benne egy folytonosság.  
Erre való az úgynevezett Perlin-zaj, amit p5-ben a `noise()` függvénnyel tudsz használni.  
Ez a függvény nem pont úgy működik, mint a `random()`: mindig egy 0 és 1 között számot ad vissza, úgyhogy ha én 0 és `height` között szeretném az eredményt, akkor a `noise()` visszatérési értékét be kell szoroznom a `height` változóval. Továbbá a `noise()` vár egy paramétert is, ami egy számláló kell hogy legyen, ami ráadásul csak nagyon kicsit változik az egymást követő függvényhívások között. Mivel itt egy for ciklusban használjuk a parancsot, az `i` változót tudjuk számlálóként adni neki, de ennél kisebb változások kellenek a függvénynek, úgyhogy adjunk inkább át `i / 100`-at:  
```javascript
createCanvas(windowWidth, windowHeight)
background("white")
for (i = 0; i < width; i += 1) {
    line(i, height * noise(i / 100), i, height)
}
```
Voilá - itt is van az egyenletes táj!  
/// [.peldamegoldas/hegyvonulat.js](.peldamegoldas/hegyvonulat.js)  

Mikor for ciklusban használjuk a `noise()` parancsot, akkor tudjuk az `i` ciklusváltozót használni bemenetként (csak el kell osztani, mint pl. fent százzal, különben túl gyorsan változik).  
Ha nem ciklusban akarunk ilyen véletlenszámokat, hanem időben, akkor a `setup` blokkban csináljunk egy változót (`count = 0`), aztán a `draw` blokkban mindig adjunk hozzá egy egészen kicsit (`count += 0.01`), és ezt a számlálót adjuk át a függvénynek (`noise(count)`).  
Ennek a gyakorlásaként javítsd meg ezt a programot: http://jsbin.com/xefajoq/edit?js,output  
/// [.peldamegoldas/ferrari-javitando.js](.peldamegoldas/ferrari-javitando.js)  
A programban az autónak elvileg véletlenszerűen kéne jobbra-balra húznia az autópályán. Sajnos ha a `random()` függvényt használjuk, ebből egy ronda ugrálás lesz. A `noise()` viszont tökéletes rá - írd át a programot a fent leírtaknak megfelelően!   

#### Programok
__Rémszem Mordon__  
/// Példamegoldás: http://jsbin.com/fejipac/edit?js,output ill. [.peldamegoldas/mordon.js](.peldamegoldas/mordon.js)  
Írj egy programot, amiben Rémszem Mordon szeme véletlenszerűen forog!  
Keress egy képet Mordonról (én [ezt használtam](https://i.imgflip.com/j4kq3.jpg)), és egyet egy szemgolyóról (nekem [ez jött be](https://vignette.wikia.nocookie.net/monster-islands-roblox/images/2/2a/Ruby_Eyeball.png)). Hozz létre két sprite-ot, és add nekik alakul a képeket. Mordon a vászon közepén üljön, a szemgolyót pedig kicsinyítsd (`scale`) és pozícionáld addig, amíg pont Mordon szemére kerül.  
Ha ez megvan, már csak azt kell beállítani, hogy a szem-sprite forgása (`rotation`) véletlenszerű legyen 0 és 360 között. Ha a `random()` függvényt használod, a szem őrült pörgésbe kezd, de ha a `noise()` függvénnyel forgatod a szemet, az hihetően fog nézelődni. (Ezúttal is szükséges lesz a `count` változóra.)  

__Hullámzás__  
Itt a fenti hegyvonulat implementációja: http://jsbin.com/nidarip/edit?js,output  
/// [.peldamegoldas/hegyvonulat.js](.peldamegoldas/hegyvonulat.js)  
Egészítsük ezt most úgy ki, hogy hullámozzon is!  
Ehhez kombináljuk a for ciklusban futó `noise()`-használatot az időben változó `noise()`-használattal. A for ciklus kell a vonulathoz, az idő pedig a hullámzáshoz.  
A vonulat már megvan, azt csak mozgasd át a `setup` blokkból a `draw` blokkba, hogy tudjon majd változni.  
Utána pedig írd meg a `count`-os mókát, és a `noise()` függvénynek add át ezt a változót második paraméterként. Ha minden igaz, a hegyvonulat elkezd hullámzani. A hullámzás sebességét azzal tudod állítani, hogy pontosan mennyire kicsi számmal növeled meg mindig a `count` változót.  
/// line(i, height * noise(i / 200, count), i, height)  

__Sőt, amőba__  
Próbáld ki, mi történik, ha a for ciklust nem `width`-ig futtatod, hanem 360-ig, és benne a vonalakat nem a vászon aljától felfele húzod, hanem mindig a bal felső sarokból (0, 0) függőlegesen lefele. A for ciklus elé írd be, hogy `translate(width / 2, height / 2)`, a for cikluson belül a vonal mehúzása után pedig azt, hogy `rotate(radians(1))`.  
Ha minden jól megy, egy izgő-mozgó amőbát kapsz.  
/// Példamegoldás: http://jsbin.com/horuwag/edit?js,output ill. [.peldamegoldas/amoba.js](.peldamegoldas/amoba.js)  
/// Érzem, hogy ez nem annyira önálló programozás, mint inkább tollbamondás, de ez az amőba túl faja ahhoz, hogy kihagyjam.  

### Rekurzív függvények
A rekurzió azt jelenti, hogy egy függvény önmagát hívja meg. Ezekkel a függvényekkel nagyon látványos rajzokat lehet létrehozni.  

A rekurzív programokhoz mindig ebből a sablonból indulj: http://jsbin.com/cogujov/edit?js,output  
/// [.peldamegoldas/rekurziv-sablon.html](.peldamegoldas/rekurziv-sablon.html)  

#### Elmélet  

__Teknőcgrafika__  
Ezeknél a programoknál egy újfajta rajzolást alkalmazunk, amit többek között a teknőcgrafikára építő nyelvek (Logo) is használnak. Képzeld azt, hogy van egy teknős a vászon bal felső sarkában, akinek rajzoló, illetve mozgató utasításokat tudsz adni. A rajzoló utasítások ugyanazok, mint eddig, csak mindig a (0, 0) pontból indulnak; a mozgatóak pedig:  
`goto(x, y)` - menj pontosan az (x, y) pontba  
`go(d)` - menj előre `d` képpontnyit
`goline(d)` - előre `d` képpontnyit úgy, hogy közben vonalat húzol  
`back(d)` - menj hátra `d` képpontnyit  
`right(a)` - fordulj jobbra `a` szöggel  
`left(a)` - fordulj balra `a` szöggel  

__Rekurzió__  
A sablonban szerepel egy extra blokk az eddigihez képest, a neve `recursive`, vagyis rekurzív. A `draw` blokkba most csak a rajzolás előkészületeit írjuk (háttérszín, honnan kezdődjön a rajzolás), aztán meghívjuk a `recursive()` blokkot, és a konkrét rajzoló parancsokat már ebbe írjuk bele. A hívás során ráadásul átaduk két adatot: a megrajzolandó dolog méretét ("size"), és azt, hogy milyen mély legyen a rekurzió, tehát hányszor hívja meg újra magát a rekurzív függvény.  
A rekurzív blokkon belül először megrajzoljuk az egyszerű dolgot, amit akarunk - kört, vonalat, stb. -, méghozzá abban a méretben, amit kaptunk (`size`). Aztán egy if segítségével megvizsgáljuk, elértük-e már a kért mélységet, és ha nem, újra meghívjuk saját magunkat - igány szerint kisebb méretben, és _mindenképpen_ eggyel csökkentett mélységgel (`depth`) - máskülönben végtelen ciklust csináltunk, aminek a gép sosem ér a végére, és lefagy :P  
Egyszerű példa: rajzoljunk egy kört, aminek a tetejére - a rekurzió mélységétől függően - további, kisebb köröket rajzolunk.  

```javascript
function setup() {
    createCanvas(windowWidth, windowHeight)
    noFill()
}

function draw() {
    background("white")
    // kezdőpont: a vászon közepe
    goto(width / 2, height / 2)
    // méret: 200, mélység: 3
    recursive(200, 3)
}

function recursive(size, depth) {
    // rajzolok egy kört
    circle(0, 0, size)
    if (depth > 1) {
        // előremegyek
        go(size / 2)
        // újra hívom magam fele mérettel, eggyel csökkentett mélységgel
        recursive(size / 2, depth - 1)
        // hétramegyek
        back(size / 2)
    }
}
```

__Interakció__  
A `draw` blokk számait (méret, mélység) pedig nyugodtan rá lehet kötni változó dolgokra is, pl. az egér aktuális helyzetére:  
```javascript
function draw() {
    background("white")
    goto(width / 2, height / 2)
    recursive(mouseY / 2, mouseX / 100)
}
```
(Csak vigyázz rá, hogy ne adj át túl nagy számokat, mert elszáll a böngésződ, mint a győzelmi zászló.)  
Esetleg csinálhatsz a `setup` blokkban egy `depth` változót, ami 1-ről indul, és minden kattintásra megnő eggyel.  

#### Rekurzív programok
__Beforduló vonalak__  
Megcélzott eredmény: http://getdrawings.com/images/recursive-drawing-6.png  
Ennek a programnak a rekurzív blokkjában csak arra van szükség, hogy húzz egy `size` méretű vonalat, aztán ha a mélység még nagyobb egynél, akkor fordulj jobbra 121 fokot és hívd meg önmagadat a méretet 0.95-szeresével és eggyel csökkentett mélységgel.  
Mi történik, ha a rekurziók számát rákötöd az egérre (pl. `mouseX / 10`)? És ha a befordulás fokát nem fixen 121-re állítod, hanem `mouseY / 2`-re?  
/// Példamegoldás: http://jsbin.com/diwohad/edit?js,output ill. [.peldamegoldas/rekurziv-vonalak.js](.peldamegoldas/rekurziv-vonalak.js)  

__Hipnotikus__  
Megcélzott eredmény: http://4.bp.blogspot.com/-M1PhwR6zzvk/T7EUSC2d6AI/AAAAAAAAAqw/mc4vkQ__Xfk/s1600/recursive-circles.png  
Hasonló az előző programhoz, de nem vonalat húzz a rekurzív részben, hanem rajzolj egy kört, aztán az if-ben menj előre `size * 1.5` képpontot és fordulj jobbra 25 fokot, mielőtt újra meghívod magad a méret 0.9-szeresével és eggyel csökkentett mélységgel.  
Állíts be valami jó háttérszínt, illetve kitöltőszínt a köröknek, és próbáld ki, hogy a rekurzió mélységét `mouseX / 10`-ra állítod. Kísérletezhetsz a többi szám átállításával is.  
/// Példamegoldás: http://jsbin.com/pacekew/edit?js,output ill. [.peldamegoldas/rekurziv-hipno.js](.peldamegoldas/rekurziv-hipno.js)  

__Fa__   
Megcélzott végeredmény: http://www.101computing.net/wp/wp-content/uploads/recursive-tree-steps.png  
Először menj a vászon közepére-aljára, a rekurzív függvénybe pedig írd azt, hogy előremész és húzol egy `size` méretű vonalat, és ha még van mélység, akkor elfordulsz balra 45 fokot, meghívod magad fele mérettel és eggyel csökkentett mélységgel, jobbra fordulsz 90 fokot, megint meghívod magad fele mérettel és eggyel csökkentett mélységgel, visszafordulsz balra 45 fokot, és végül, már az if záró kapcsos zárójelén kívül hátramész `size` képpontnyit.  
Ha megvan, próbálgasd kicsit állítgatni a számokat. Mi van, ha nem egyenletesen 45 fokban jobbra-balra vannak az ágak? Mi van, ha az egyik ág hosszabb, mint a másik?  
Mi van, ha a vonalvastagságot (`strokeWeight()`) is az aktuális mélységtől teszed függőve? Esetleg az ágak színét is?  
Én például egy ilyet tudtam összedobni: http://endreymarcell.hu/p5v4/misc/recursive-tree.png  
/// Példamegoldás: http://jsbin.com/hekijav/edit?js,output ill. [.peldamegoldas/rekurziv-fa.js](.peldamegoldas/rekurziv-fa.js)  

/// Megjegyzés: ha rekurzív függvényben használunk for ciklust, akkor nem elég a `for (i = 0; ...`, mindenképp kell a `var` az `i` elé, különben globális marad a változó, és összebaszódik az egész.  

### Pulzálás

(Ezekhez a programokhoz nem kell különleges sablon.)  

#### Elmélet

Van egy jó kis függvény, amit a `draw` blokkban lehet használni: a `pulse()`, vagyis pulzálás. Három számot vár: a minimum és a maximum értéket, illetve a pulzálás sebességét. Ha ezt a harmadik számot nem írod bele, akkor lesz egy alap 1-es sebesség, ennél állíthatsz kisebbet vagy nagyobbat, ha szeretnél.  
Ennek a függvénynek a kimenetét aztán rákötheted bármire. Például ebben a `draw` blokkban 100 és 300 képppont között pulzál a kör mérete:  
```javascript
function draw() {
    background("white")
    circle(width / 2, height / 2, pulse(100, 300))
}
```
De használhatod a pulzáló értéket helyre, méretre, forgásra, színre, bármire. Csak ne felejtsd: csakis a `draw` blokkban fog működni.  

#### Programok

__Valentin__  
Keress egy képet egy szívről, hozz létre egy sprite-ot a vászon közepén, aki megkapja ezt a képet alakul, és a `draw` blokkban állítsd a sprite nagyítását (`scale`) pulzálóra, hogy a szív dobogjon.  

__Riadó__  
Írj egy programot, amiben a vászon közepére nagy, piros betűkkel ki van írva, hogy "POZOR!". A betűk színet (`fill()`) a `draw` blokkban add meg, és a `color()` függvénynek olyan RGB színkódot adj át, amiben a piros pulzál 0 és 255 között, a kék és a zöld pedig fixen nulla. Ha minden igaz, a felirat pirosan fog villogni, mint egy jelzőlámpa.  

__Mélytengeri chill__  
Keress egy képet egy csikóhalról, töltsd be, aztán hozz létre három sprite-ot, és mindegyiknek add alakul a képet. A sprite-okat helyezd el egy kékre festett vásznon egyenletesen elosztva vízszintesen, függőlegesen pedig írd meg, hogy fel-le lebegjenek a `pulse()` függvény segítségével. Adj mindegyiknek egy kicsit másik lebegési sebességet, hogy ne teljesen szinkronban mozogjanak.  
/// Példamegoldás: http://jsbin.com/voseles/edit?js,output ill. [.peldamegoldas/chill.js](.peldamegoldas/chill.js)  

__Pendulum__  
A végeredmény ehhez lesz hasonló: https://www.youtube.com/watch?v=yVkdfJ9PkRQ  
Helyezz el öt-hat sprite-ot függőlegesen egymás alatt, a vászon középvonalán. "Lengesd" mindegyiket vízszintesen jobbra-balra az x koordinátájuk pulzáltatásával a `draw` függvényben. Még jobb, ha ezüstgolyó-képet is adsz nekik.  
A szép mintázatok akkor alakulnak ki, ha a `pulse()` függvénynek mindig egy kicsit más sebességet adsz meg: az első sprite-nál 2-t, a másodiknál 2.1-et, a harmadiknál 2.2-t stb.  
A legprofibb, ha for ciklussal hozod létre és mozgatod a sprite-okat, de for ciklus nélkül is jó a program.  
/// Példamegoldás: http://jsbin.com/cezukok/edit?js,output ill. [.peldamegoldas/pendulum.js](.peldamegoldas/pendulum.js)  
