# Saját játék

- [Mátrix-eső](#mátrix-eső)  
- [Flappy bird](#flappy-bird)  
- [Asteroid](#asteroid)  
- [Snake](#snake)  
- [Azért nem csináltam meg a házit, mert a Pacman megette a kurzoromat](#azért-nem-csináltam-meg-a-házit-mert-a-pacman-megette-a-kurzoromat)  

## Mátrix-eső
_35 sornyi kód_  
Inspiráció: https://www.youtube.com/watch?v=QHVqpRRX6EU  
/// Példamegoldás: http://jsbin.com/vayefon/edit?js,output ill. [.peldamegoldas/matrix-eso.js](.peldamegoldas/matrix-eso.js)  

__1. lecsorgó sprite-ok__  
A `setup` blokkban egy for ciklusban hozz létre 10 sprite-ot, és mindegyiknek állítsd a szélességét és a magasságát is 15 képpontra. Az x koordinátjára mindegyiknek az `i` ciklusváltozótól függjön: az elsőnek 0 legyen, a másodiknak 15, a harmadiknak 30 stb. A 10 sprite valószínűleg nem lesz elég, úgyhogy növeld addig a számot, amíg a sprite-sor elér a vászon jobb széléig.  

Aztán a `draw` blokkba is írj egy for ciklust, ami végigmegy az `allSprites` összes elemén, és mindegyiket lejjebb teszi 15 képponttal. Írj ide még egy `if`-et is, amiben megnézed, hogy az adott sprite kiment-e már a vászon alján (nagyobb-e az y koordinátája a vászon magasságánál), és ha igen, helyezd vissza őt a vászon tetejére.    

Elvileg most egy újra meg újra lezóduló sprite-függönyt kapsz. Sajnos kicsit túl gyorsan zuhannak, lassabbra kéne venni őket. Megírhatnánk, hogy kevesebbet mozduljanak lefelé 15 képpontnál, de igazából nem lassú, folyamatos csorgásra van szükségünk, hanem erre a darabos ugrálásra, csak lassabban. Ehhez állítsd át a `draw` ismétlődési sebességét a `frameRate()` függvénnyel, ami egy számot vár: azt, hogy másodpercenként hányszor fusson le a `draw` blokk. Ez alapból 60 körül van, szerintem ehhez a programohoz az érték valahol 5 és 20 között optimális. Kísérletezd ki.  

__2. mindenki a helyére__  
A `setup` blokkban állítsd be, hogy a létrejövő sprite y koordinátája ne 0 legyen, hanem egy véletlen szám 0 és `-height` között. A sprite-ok így a vászon "fölött" jönnek létre, és onnan csorognak majd be.  
A `draw` blokkban szintén állítsd át a sprite-ok áthelyezését az `if`-en belül: legyen véletlen 0 és `-height / 2` között.  

__3. betűk__  
Ahhoz, hogy a sprite-ok ne négyzetként, hanem betűként rajzolódjanak ki, át kell állítanunk a rajzoló függvényüket.  

Másold be ezt a blokkot a programod végére:  
```javascript
function drawSprite() {
    
}
```
A blokkba pedig írj bele egy parancsot, ami kiírja az "A" betűt a (0, 0) pontba a `text()` függvény segítségével.  

A sprite-oknak úgy tudod megmondani, hogy mostantól ezt a blokkot hajtsák végre a kirajoláshoz, hogy a `draw` változójukat beállítod a blokk nevére: `bob.draw = drawSprite`.  

__4. Mátrix-betűk__  
Oké, most jó lenne, ha nem az "A" betűt írnánk ki sokszor, hanem a mátrixhoz hasonló speciális karaktereket. Ehhez először a `setup`-ba másold be [ezt a kódrészletet](https://gist.github.com/endreymarcell/64daa231b853cae5a164fa3fde9da2fa), ami definiálja neked a betűket egy `letters` nevű listában.  

A `drawSprite` blokkban pedig írd meg, hogy a `text()` függvény ne az "A" betűt kapja meg, hanem egy véletlenszerű betűt a `letters` listából - ehhez használd a `pick()` függvényt, ami egy listát vár, és véletlenszerűen választ belőle.  

__5. színek__  
A `setup` blokkban színezd a hátteret feketére, a `draw`-ban pedig szintén, de itt használd a négy számból álló színkódot, hogy a fekete szín mellett az átláthatóságot is állíthasd, és egy majdnem átlászó feketét csinálj.  

A betűk legyenek világos neonzöldek, ehhez a `fill()` függvényt tudod haszálni.  

__Extra: okosabb sprite-szám__  
A program elején meg kell mondanod, hogy hány sprite-ot csinálsz. Elvileg pont annyit csináltál, hogy kitöltsék a vászon szélességét, de mi van, ha legközelebb egy szélesebb képernyőn fut a program? Vagy keskenyebben, és akkor feleslegsen jönnek létre sprite-ok, mert úgysem látszanak?  

Írd meg, hogy a program elején ne egy fix szám mondja meg, hogy sprite jön létre, hanem egy matematikai művelet, ahol kiszámolod, hogy hány sprite fér el a vásznon (tehát hányszor van meg a vászon szélességében a 15 képpont, ami ugye a sprite-ok szélessége).  

## Flappy bird
_57 sornyi kód_  
Inspiráció: https://www.youtube.com/watch?v=fQoJZuBwrkU  
/// Példamegoldás: http://jsbin.com/fisureb/edit?js,output ill. [.peldamegoldas/flappy-bird.js](.peldamegoldas/flappy-bird.js)  

__1. madár__  
Hozz létre egy sprite-ot a vászon közepén. Írd meg a `draw` blokkban, hogy lehúzza a gravitáció, tehát mindig kap egy kicsi sebességet lefelé (`addSpeed()`), és a `mouseClicked`-ban, hogy minden kattintásra kap egy fix sebességet felfelé (`setSpeed()`).  
Töltsd be hozzá egy flappy bird-képet ([ezt ajánlom](http://endreymarcell.hu/p5v2/Flappy_Bird.png)), és add neki alakul.  

Írd meg azt is, hogy a madár mindig arra forduljon, amerre épp repül, illetve zuhan, méghozzá úgy, hogy az aktuális fordulatát mindig a `bird.velocity.y * 2` értékre állítod (mármint feltéve, hogy `bird` a madár-sprite neve).

__2. oszlopok__  
Hozz létre egy 200 széles, 300 magas sprite-ot, aminek az x koordinátája százzal nagyobb a vászon szélességénél, az y koordinátája pedig 0. Adj neki a `setup` blokkban egy fix sebességet balra (`setSpeed()`), a `draw` blokkban pedig vizsgáld meg, hogy az x koordinátája kisebb-e már -100-nál. Ha igen, akkor tedd át megint a vászon szélességénél 100-zal többre.  

Ha mindez megvan, csinálj még egy pont ugyanilyet, csak az y koordinátája ne 0 legyen, hanem `height`.  

__3. játékmenet__  
Írd meg, hogy ne induljon el rögtön a program, csak kattintásra. Ezt úgy tudod megtenni, hogy a `setup` blokk végén kiadod a program futását megállító `noLoop()` parancsot, egérkattintáskor pedig a `loop()` parancsot.  

A `draw` blokkban írd meg, hogy ha a madár átfed bármelyik oszlop-sprite-tal, akkor álljon meg a játék, és ez történjen akkor is, ha lefelé kiesett a vászonról.   

__4. véletlen oszlopok__  
Írd meg, hogy az oszlopokon véletlen magasságban legyen az átjáró. Ezt úgy tudod megtenni, hogy a `setup` blokkban még az oszlop-sprite-ok létrehozása előtt csinálsz egy véletlenszámot kb. -300 és 300 között (kísérletezd ki a jó értékeket), és a felső oszlop-sprite y koordinátáját nem 0-ra állítod, hanem erre a véletlenszámra, az alsó oszlop-sprite-nál meg hozzáadod a vászon magasságához, és így állítod be az y koordinátát.  

Amikor pedig az oszlop-sprite-ok kimennek a vászonról baloldalt, és visszateszed őket jobbra, csináld meg ugyanezt: véletlenszám, és y koordináták beállítása.   

__Extra: pontszám__  
Ha a pontokat is számolni akarod, hozz létre a `setup` blokkban egy változót, aminek 0 az értéke. A `draw` blokkban a `text()` függvénnyel írd ki valahova a vászonra - figyelj rá, hogy ez a sprite-ok kirajzolása _után_ legyen, különben az oszlopok el fogják takarni. A szöveg méretét is érdemes nagyobbra állítani (`textSize()`).  

Aztán pedig valahányszor az oszlopok kimentek baloldalt, és át kell őket tenni jobbra, növeld meg eggyel ennek a változónak az értékét.  

## Asteroid
_72 sornyi kód_  
Inspiráció: https://www.youtube.com/watch?v=WYSupJ5r2zo  
/// Példamegoldás: http://jsbin.com/sujinun/edit?js,output ill. [.peldamegoldas/asteroid.js](.peldamegoldas/asteroid.js)  

__1. aszteroidák__  
Keress egy képet egy aszteroidáról és töltsd be. A `setup` blokkban hozz létre egy csoportot, aztán egy for ciklusban hozz létre öt aszteroidát, tedd őket véletlen helyre, adj nekik véletlen nagyítást (értelmes kereteken belül), véletlen forgási sebességet -1 és 1 között, és véletlen irányú és méretű sebességet (szintén értelmes kereteken belül). Nem baj, ha nem találod el elsőre a véletlenszámok határait, kísérletezz velük.  

Ja, és add is őket hozzá a csoporthoz még a cikluson belül.  

__2. űrhajó__  
Keress egy képet egy űrhajóról vagy rakétáról és töltsd be. A `setup` blokkban hozz létre egy sprite-ot a vászon közepén, aki megkapja a képet alakul.  

A `keyPressed` blokkban írd meg, hogy ha megnyomod a balra billentyűt (`LEFT_ARROW`), az űrhajó kicsit balra forduljon, a jobbra billentyűre pedig kicsit jobbra. A felfelé billentyűre adj egy kis sebességet az űrhajónak. A sebesség iránya az űrhajó aktuális fordulata legyen. (Ha ettől esetleg oldalazva indulni el, próbálj meg 90-et hozzáadni vagy levonni belőle.)  

__3. vaktöltény__  
A `setup` blokkban hozz létre egy csoportot a lövedékeknek, a `keyPressed` blokkban pedig írd meg, hogy lefelé billentyű lenyomására létrejöjjön egy kicsi sprite pont ott, ahol épp az űrhajó van, és kapjon sebességet (`setSpeed()`), aminek az iránya pont úgy van beállítva, mint az előbb az űrhajó mozgásának az iránya. Add hozzá a lövedékek csoportjához is.  

__4. éles töltény__  

A `draw` blokkban egy for-ciklussal menj végig az aszteroidákon, és írd meg, hogy ha bármelyik átfed a lövedék-csoport bármelyik tagjával, akkor azt az aszteroidát kitörlöd (hívd meg a `remove()` függvényét).  

Ugyanakkor írd meg azt is, hogy ha az űrhajó átfed bármelyik aszteroidával, akkor az űrhajót is kitörlöd, és leállítod a programo futását a `noLoop()` paranccsal.   

__Extra: visszatérő aszteroidák__  
Írjuk meg, hogy az aszteroidák ne vesszenek el öröke, mikor kiúsztak a vászonról, hanem jöjjenek vissza, de véletlenszerűen.  
Az ötlet: ha egy aszteroida balra kiúszott a vászonról, akkor újra véletlen sebességet adunk neki, aminek az iránya jobbra mutat - és akkor jó esetben vissza fog úszni. A jobbra mutató irány ugye `EAST`, ezt úgy tudjuk kicsit véletlenszerűbbé tenni, hogy hozzáadunk egy -20 és 20 közötti véletlenszámot.  

Tehát a `draw` blokkban egy for ciklussal menj végig az összes aszteroidán, és nézd meg, hogy kiment-e balra a vászonról (kisebb-e az x koordinátája 0-nál). Ha igen, akkor pedig adj neki sebességet, aminek a sebessége ugyanúgy random, mint a program elején volt, az iránya pedig `EAST` plusz egy véletlenszám -20 és 20 között.  
Ezzel még annyi a baj, hogy most a vászon széléről "pattan vissza" a sprite, pedig jobb lenne, ha előbb kimenne, aztán kicsit később visszajönne. Ezt úgy tudod a legjobban megcsinálni, hogy nem a vászon bal szélét teszteled (ahol 0 az x), hanem attól még balrább (ahol már negatív az x).  

Ha ez megvan, ugyanezt a logikát meg kell írni a vászon másik három szélére is. Gondolkodós, mentorral megbeszélős.  

## Snake
_83 sornyi kód_  
Inspiráció: https://www.youtube.com/watch?v=5nOgiYJ1mzA  
/// Példamegoldás: http://jsbin.com/gapedaj/edit?js,output ill. [.peldamegoldas/snake.js](.peldamegoldas/snake.js)  

__1. egy egységnyi kígyó__  
A `setup` blokkban hozz létre egy 45\*45-ös sprite-ot véletlen helyen, a `draw` blokkban pedig írj egy `if`-et, ami megnézi, hogy a legutoljára lenyomozz billentyű a balra nyíl volt-e (`LEFT_ARROW`), és ha igen, 50 képponttal balrább teszi a sprite-ot. Írj még három `if`-et a másik három irányra.  

Ahhoz, hogy a kígyó lassabban haladjon, a `setup` blokkban állítsd a program futását lassabbra a `frameRate()` függvény segítségével. A `frameRate()` egy számot vár, ami megadja, hogy másodpercenként hányszor fusson le a `draw` blokk. Ez alapból 60 körül van, szerintem ehhez a programohoz az érték valahol 2 és 5 között optimális. Kísérletezd ki.  

Ha szeretnéd, hogy a program automatikusan elinduljon, ne csak az első billentyű lenyomásakor, a `setup` blokkban állítsd be a `keyCode` változó értékét `LEFT_ARROW`-ra.  

__2. egy teljes kígyó__  
A `setup` blokkban hozz létre még két sprite-ot, akik pont úgy néznek ki, mint a legelső, csak 50, illetve 100 képponttal jobbrább vannak a vásznon.  
Hozz létre egy csoportot is a kígyónak, és tedd bele mind a három sprite-ot.  

Most jön a trükk: nem a teljes kígyót fogjuk mozgatni, hanem mindig megfogjuk a legutolsó kockáját, és azt tesszük át a legelejére. Egész pontosan a legutolsót oda tesszük, ahol most van a legelső, és aztán onnan elmozdítjuk aszerint, hogy merre halad épp a kígyó.  
Indítsd így a `draw` blokkot:  
```javascript
first = snake[0]
last = snake[snake.length - 1]
``` 
Innentől tudsz a kígyó első kockájára `first` néven hivatkozni, az utolsóra pedig `last` néven. Írd meg, hogy az utolsó kocka ugorjon pontosan oda, ahol most az első van, utána pedig illeszd be ezt a parancsot: `shift(snake)` (ez ahhoz kell, hogy ne csak vizuálisan rendeződjön át a kígyó, hanem a számítógép memóriájában is), végül pedig még egyszer a fenti két sort (`first` és `last` beállítása).  

Ha mindez megvolt, jöhet a négy `if`-ből álló logika, amit már megírtál, csak írd át úgy, hogy az első kockára vonatkozzon (`first`).  

__3. alma__  
A `setup` blokkban hozz létre még egy sprite-ot szintén 45\*45-ös méretben, véletlen helyen. A `draw` blokkban egy `if`-fel vizsáld meg, hogy az első kígyó-elem rálóg-e az almára. (Ez az `if` a `draw` blokk végén legyen, közvetlenül az `allSprites.draw` előtt.) Ha igen, tedd az almát megint véletlen helyre, és hozz létre még egy kígyóba való sprite-ot, pont úgy, mint a `setup` blokkban, és add is hozzá a kígyó-csoporthoz. A sprite helye ugyanaz legyen, mint a most legutolsó sprite (`last`) helye.  

__4. zárt pálya__  
Az eredeti snake-ben ha a kígyó kiment a pályáról az egyik oldalon, akkor újra bejött a másikon.  
A `draw` blokkban írj egy `if`-et, amiben megnézed, hogy a legelső kígyó-darab kiment-e a vászonról bal oldalt, és ha igen, adj hozzá az x koordinátához pont annyit, amennyi a vászon szélessége. Elvileg ettől pont meg fog jelenni a vászon jobb szélén.  

Ha ez megvan, írd meg a másik három `if`-et is a vászon többi szélére.  

__5. magába harapó kígyó__  
Írd meg a `draw` blokkban, hogy ha a kígyó feje (`first`) rámegy a kígyó-csoport bármelyik másik tagjára, akkor a játék megáll (`noLoop()`).  

__Extra: pontos pálya__  
Egy tisztességes snake-ben a kígyó és az alma is egy "rácson" van rajta, nem akárhol. Ahhoz, hogy ezt elérjük, mindent pontos 50-esekre fogunk igazítani: az alma koordinátái csak az 50 többszörösei lehetnek, a kígyó-sprite-ok koordinátái úgyszintén, és a vászon méretét is így állítjuk be.  

Ehhez a `roundTo()` függvényt tudod használni, ami két számot vár: az első megmondja, _mit_ kell kerekíteni, a második, hogy _mennyire_. Tehát pl. a `roundTo(472, 100)` eredménye 500, és a `roundTo(164, 50)` eredménye 150.  

Használd a `roundTo()` függvény minden alkalommal, amikor valamilyen sprite-ot véletlen helyre helyezel. Illetve használd a program legelején is, a `createCanvas()` függvényben úgy, hogy az ablak szélességét és magasságát is 50-esre kerekíted, és ekkora vásznat hozol létre.  


## Azért nem csináltam meg a házit, mert a Pacman megette a kurzoromat
_52 sornyi kód_  
Inspiráció: https://www.youtube.com/watch?v=_H5j9cJo5bk  
/// Példamegoldás: http://jsbin.com/sigabig/edit?js,output ill. [.peldamegoldas/pacman.js](.peldamegoldas/pacman.js)  

__1. műegér__  
Keress egy képet, ami úgy néz ki, mint a számítógéped egere. Töltsd be a képet, hozz létre egy sprite-ot, add alakul neki a képet, aztán a `draw` blokkban írd meg, hogy a sprite mindig ott legyen, ahol épp az egér van. Az eredeti egeret pedig tüntesd el a legelső órán megismert `noCursor()` paranccsal.  

__2. padló__  
Hozz létre egy széles, lapos sprite-ot a vászon közepén, aztán a `draw` blokkban írd meg egy `if`-fel, hogy ha az egér feljebb van, mint ez a padló-sprite, akkor a padló menjen egy kicsit feljebb, és egy másik `if`-fel azt, hogy ha az egér lejjebb van nála, akkor menjen kicsit lejjebb.  
Gondolj arra is, hogy igazából nem padlónak kell majd egy vonalban lennie az egérrel, hanem a pacmannak, úgyhogy a padlót igazából kicsit lejjebb kéne tenni. Ezekhez az `if`-ek feltételét kell megfelelően módosítani.  
/// Nálam `if (mouseY < floor.position.y - 26)` és `if (mouseY > floor.position.y - 24)`  
/// Azért jó, ha nem pont ugyanannyi az eltérés (24 vs. 26), mert akkor van nyugalmi sáv középen, nem kezd el "vibrálni" a határon a sprite.  

__3. Pacman__  
Keress egy képet pacmanről, és hozz neki létre egy sprite-ot is. A `draw` blokkban a pacman-sprite y koordinátáját mindig állítsd kicsit kisebbre a padlóénál, hogy a pacman a padlón üljön (kísérletezd ki, hogy pontosan hány eltérés kell ehhez).  
Írd meg egy `if`-ben, hogy ha az egér balrább van, mint a pacman, akkor a pacman kicsit balra megy, és egy másik `if`-ben, hogy ha az egér jobbrább van, mint a pacman, akkor a pacman menjen kicsit jobbra.  
A mozdulásoknál egyben forgasd is helyes irányba a pacmant: a sprite-oknak van egy `mirrorX()` függvénye, ami egy számot vár, és -1 esetén tükrözi a sprite-ot, 1 esetén pedig visszafordítja az eredeti irányba.  

__4. Megevés__  
Írd meg, hogy ha a pacman-sprite rálóg az egér-sprite-ra, akkor az egér-sprite láthatatlanná válik (a sprite `visible` változóját kell hamisra állítani), egérkattintásra pedig újra láthatóvá.  
Ahhoz pedig, hogy a pacman csak a látható sprite-ra induljon rá, a `draw` blokkban lévő összes mozgást tedd bele egy nagy `if`-be, aminek a feltétele az, hogy az egér-sprite éppen látható-e.  

__Extra: pontos mozgás__  
Megírhatod azt is, hogy a pacman csak akkor induljon el a padlón, ha a padló már megfelelő magasságban van. Ennek többféle módon is neki lehet állni, mindenképp kicsit gondolkodós feladat - beszéld meg a mentoroddal.  
/// 1. ötlet: if (fentebb van) {...} else if (lentebb van) {...} else { if (balrább van) {...} else {...} }  
/// 2. ötlet: if (egyvonalban vannak) { if (balrább van) {...} else {...} } else { if (fentebb van) {...} else if (lentebb van) {...} }  
/// javaslat: if (abs(mouseY - floor.position.y) < 3) {...}  
/// 3. ötlet: draw elején moved = false, ha függőlegesen elmozdítom akkor moved = true, és minden vízszintes mozgatást egy nagy if (!moved) belsejébe  
