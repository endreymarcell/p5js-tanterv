## Hangos programok

A hangos programokhoz mindig ezt a sablont használd kiindulásként: http://jsbin.com/ruvarih/edit?js,output  
/// [.peldamegoldas/hangos-sablon.html](.peldamegoldas/hangos-sablon.html)  
/// Minimálisan módosított sablon, importálni kell a p5.sound.js-t és a [p5.speech.marca.js](../../../.private/misc/p5.speech.marca.js)-t  

### Hangfájlok lejátszása

#### Elmélet
A hangfájlok lejátszása két lépésből áll: be kell tölteni a hangfájlt egy változóba, aztán le kell játszani.  
A betöltés nagyon hasonlít a képek betöltésére: a `preload` blokkban kell csinálni, egy `preloadSound()` függvény áll rendelkezésre, aminek át kell adni a fájl URL-jét:  
```javascript
function preload() {
    cookieSound = preloadSound("http://endreymarcell.hu/p5v2/sounds/cookiemonster.m4a")
}
```
A lejátszáshoz pedig meg kell hívni a `playSound()` függvényt, és átadni neki a változót, amibe beletötötted a hangot:  
```javascript
function mouseClicked() {
    playSound(cookieSound)
}
```

#### Hangfájlok
Képeket viszonylag könnyű találni az interneten, de direkt linkelhető hangájlokat már nem, úgyhogy előre gyűjtöttem egy adagot, amit lehet használni:  

Autó: http://endreymarcell.hu/p5v2/sounds/car.wav  
Cookie Monster: http://endreymarcell.hu/p5v2/sounds/cookiemonster.m4a  
Kosárlabda: http://endreymarcell.hu/p5v2/sounds/basketball.wav  
Basszusgitár: http://endreymarcell.hu/p5v2/sounds/bass.wav  
Dob: http://endreymarcell.hu/p5v2/sounds/drums.wav  
Gitár: http://endreymarcell.hu/p5v2/sounds/guitar.mp3  
Zongora: http://endreymarcell.hu/p5v2/sounds/piano.mp3  
Trombita: http://endreymarcell.hu/p5v2/sounds/trumpet.wav  
Lövés: http://endreymarcell.hu/p5v2/sounds/gunshot.wav  
Robbanás: http://endreymarcell.hu/p5v2/sounds/explosion.mp3  
Kutya: http://endreymarcell.hu/p5v2/sounds/dog.wav  
Ostor: http://endreymarcell.hu/p5v2/sounds/ostor.wav  
Kolomp: http://endreymarcell.hu/p5v2/sounds/cowbell.wav  
Shame: http://endreymarcell.hu/p5v2/sounds/shame.m4a  

#### Programok
  
__Cookie monster__  
/// Példamegoldás: http://jsbin.com/lojalit/edit?js,output ill. [.peldamegoldas/cookie-monster.js](.peldamegoldas/cookie-monster.js)  
Írj egy programot, amiben a Cookie monster megörül, ha sütit adsz neki.  
Keress egy képet a cookie monsterről, meg egyet egy sütiről, és töltsd be őket a `preload` blokkban. Ugyanitt töltsd be a fenti hangok közül az ide vonatkozót.  
Hozz létre két sprite-ot, és állítsd be rájuk a képeket. A szörny-sprite legyen a vászon közepén.  
 A `draw` blokkban írd meg, hogy a süti-sprite mindig kövesse az egeret, és egy if-fel írd meg azt is, hogy ha a süti-sprite átfed a szörny-sprite-tal (`overlap()`), akkor játszódjon le a betöltött hang (`playSound()`).  
 
 __Zenekar__  
 /// Példamegoldás: http://jsbin.com/vekonax/edit?js,output ill. [.peldamegoldas/zenekar.js](.peldamegoldas/zenekar.js)  
Töltsd be három dolog hangját a fenti gyűjteményből - akár hangszerek, akár más -, és keress hozzájuk képeket is.  
Hozz létre három sprite-ot, helyezd el őket a vásznon kb. egyenletes távolságra, és mindegyikük `mouseActive` változóját állítsd igazra. A betöltött képeket add nekik alakul.  
A `mouseClicked` blokkban if-ekkel vizsgáld meg, hogy az egér melyik sprite fölött van (`mouseIsOver`), és játszd le a megfelelő hangfájlokat hozzájuk.  

### Beszédgenerálás

#### Elmélet
A beszédgeneráláshoz először is létre kell hozni egy `voice` ("beszédhang") objektumot a `setup` blokkban:  
```javascript
voice = createVoice()
```
Beszéltetni pedig aztán így lehet:  
```javascript
voice.speak("We wish you a merry christmas!")
```
Folyamatban lévő beszédet pedig így tudsz megállítani:  
```javascript
voice.stop()
```

Számítógéptől, operációs rendszertől, illetve böngészőtől függően különböző beszédhangokat is választhatsz. Hogy pontosan mi a választék, azt úgy tudhatod meg, hogy a konzolon kiadod a `voice.listVoices()` parancsot.  
A megfelelő hangot aztán a `voice.setVoice()` paranccsal tudod beállítani, pl. így:  
```javascript
voice.setVoice("Mariska")
```
Ennek van egy olyan rákfenéje, hogy várni kell egy kicsit a parancs kiadásával, nem lehet rögtön a `createVoice()` után csinálni. Szóval inkább tedd közvetlenül a `speak()` elé.  
/// Mentorok, figyelem: ^ ez kontraintuitív, ergó hibaforrás, gondoljunk rá.  
Figyelj arra, hogy a kimondandó szöveg passzoljon a kiválasztott beszédhang nyelvéhez.  

Amit még be tudsz állatani a beszédhangon (ha az adott böngésző támogatja):  
`voice.setPitch(n)` - a hang magasságát állítja be, `n` egy szám 0.01 és 2 között (alapértelmezés: 1)  
`voice.setRate(n)` - a beszéd sebességét állítja 0.1 és 2 között (alapértelmezés: 1)  
`voice.setVolume(n)` - a beszéd hangerejét állítja 0 és 1 között (alapértelmezés: 1)  

#### Programok

__Változó beszédhang__  
/// Példamegoldás: http://jsbin.com/vupaduj/edit?js,output ill. [.peldamegoldas/beszedhang.js](.peldamegoldas/beszedhang.js)  
Írj egy programot, amiben az egér mozgatásával tudod változtatni a beszéd magasságát és sebességét!  
A `setup` blokkban hozz létre egy beszédhangot (`createVoice()`), a `mouseClicked` blokkban pedig mondass ki vele valamit (én azt választottam, hogy "Winter is coming", de te mondhatsz bármi mást).  
Aztán írd meg, hogy a kimondás sebessége az egér vízszintes helyzetéhez igazodjon. Használd a `map()` függvényt, hogy az egér vízszintes helyzetét átvetítsd a 0-tól `width`-ig tartó tartományról a sebesség 0.1-től 2-ig lévő tartományára, és az így kapott értéket állítsd be a beszéd sebességeként.  
/// voice.setRate(map(mouseX, 0, width, 0.01, 2))  
Ha ez megvan, hasonló módon írd meg, hogy a hang magassága az egér függőleges helyzetétől függjön: a vászon legtetején 2, a legalján 0.01 legyen.  
/// voice.setPitch(map(mouseY, 0, height, 2, 0.1))  
Amivel még fel tudod okosítani a programot: írd bele, hogy ha beszéd közben kattintasz, akkor ne kelljen kivárni a végigmondást, hanem azonnal maradjon abba a beszéd, és induljon el az új értékekkel.  
Ha szeretnél, választhatsz magadnak másik beszédhangot is, csak figyelj rá, hogy a beszélő nyelve passzoljon a kimondott szöveghez.  

__Sztereotípiák__  
/// Példamegoldás: http://jsbin.com/sutizub/edit?js,output ill. [.peldamegoldas/sztereotip.js](.peldamegoldas/sztereotip.js)  
Írj egy programot, amiben négy különböző nemzetiségű ember szólal meg a saját nyelvén! Én az angol, német, francia és olasz nyelveket választottam, de választhatsz mást is.  
Hozz létre négy sprite-ot, és helyezd el őket egyenletesen a vásznon. Állítsd mindegyikük `mouseActive` változóját igazra. Hozz létre egy beszédhangot is.  
A `mouseClicked` blokkban írj négy if-et, és vizsgáld meg bennük, hogy rákattintottál-e a sprite-okra (`sprite.mouseIsOver`). Ha igen, állíts be egy megfelelő nyelvű beszédhangot, és mondass ki valamit azon a nyelven.  
Kereshetsz képeket is a négy sprite-nak, például zászlókat, vagy jellemzően olyan nemzetiségűnek kinéző embereket.  

### Beszéd megértése

#### Előkészületek
Ilyen programot sajnos JSBinen nem tudunk most írni. A JavaScript kódot ezúttal a gépen lévő, Atom nevű kódszerkesztőben írjuk. A mentorod segít eltájékozódni.  
Az asztalon keresd meg az Atom ikonját, és indítsd el a programot. Bal oldalon látod a szerkeszthető programokat. Három programnak csináltam helyet, de ha kell több, a sablon lemásolásával lehet csinálni.  
A menüben válaszd a Packages - atom-live-server - Start Server parancsot. A megnyíló Chrome ablakban kattints az első programra. (Ha engedélyt kér a mikrofon használatára, engedélyezd.) Itt fog futni a programod (ez az Output fül megfelelője).  
Atomban válaszd ki a fájlok közül az "1. program" mappában lévő sketch.js nevű fájlt. Ide írhatod a JavaScript kódot. A változtatásaid után újra kell töltened a weboldalt.  
Az a legpraktikusabb, ha a számítógép képernyőjének a bal felébe az Atomot teszed, a jobb felébe pedig a Chrome-ot.  
Ha kész az első program, a böngésző vissza-gombjával vissza tudsz menni a programok közötti választáshoz.

__Otthonra:__ mentsd le [ezt a fájlt](p5-hangok.html) a számítógépre (jobb klikk a linken, mentés másként), és töltsd le az Atom nevű kódszerkesztő programot [innen](https://atom.io/). Aztán nyisd mge a HTML fájlt Atomban is és Chrome-ban is.  
Atomban látni fogod azt a részt a fájlban, ahova a JavaScript kódot kell írnod. A változtatások után mentsd el a fájlt, menj át Chrome-ba, és töltsd újra az oldalt - és már fut is a programod!  
Ha szükséged lenne a JavaScript konzolra, hogy lásd a `print()` függvénnyel kiírt üzeneteket vagy az esetleges hibákat, a Ctrl + Shift + J (macbookon Cmd + Shift + J) billentyűkombinációbal tudod megnyitni.     

#### Elmélet
A hangfelvételhez először létre kell hozni és be kell kapcsolni egy hangfelvevőt a `setup` blokkban:  
```javascript
rec = createRecorder()
rec.start()
```

Ha a felvevő felvett és megértett egy szövegrészletet, akkor le fog futni a `soundRecorded` blokk. A blokkon belül a `rec.resultString` változóban éred el, hogy mit hallott/értett a gép, erre aztán tudsz reagálni.  
A felvevő alapvetően angolul ért, de ha a géped és a böngésződ ezt támogatja, beállíthatsz más nyelveket is, magyart például így:  
```javascript
rec = createRecorder("hu-HU")
```

#### Programok
__Értő__  
/// Példamegoldás: [.peldamegoldas/erto.js](.peldamegoldas/erto.js)  
Először csak próbáld ki, hogy működik-e a hangfelismerés: hozz létre és indíts el egy felvevőt a `setup` blokkban, aztán a hangok elkapásakor lefutó `soundRecorded` blokkban fesd fehérre a vásznat (de a `draw` blokkban ne!), és írd ki a `text()` függvénnyel a vászon közepére a megértett szöveget!  
/// text(rec.resultString, width / 2, height / 2 )  
(Jobban mutat a szöveg, ha középre is igazítod, és megnöveled kicsit a méretét. A múlt órai jegyzetben találsz ehhez parancsokat, vagy a mentorod tud segíteni.)  
/// textAlign("center", "center")  
/// textSize(20)  
(Érdekesség: a felvevőnek a `resultString` mellett van egy `resultConfidence` nevű változója is - ez egy 0 és 1 között szám, ami azt mutatja, mennyire "biztos benne" a gép, hogy jól értette, amit mondtál. Ha gondolod, ezt is kiírhatod a vászonra, és kísérletezhetsz vele.)  

Ha működik, mehetsz tovább a valódi programokra.  

__Rajzoló__  
/// Példamegoldás: [.peldamegoldas/rajzolo.js](.peldamegoldas/rajzolo.js)  
A `setup` blokkban a felvevőn túl hozz létre egy sprite-ot is, akit aztán a hangoddal tudsz majd mozgatni. (Ha azt szeretnéd, hogy csíkot is húzzon maga után, a vászon fehérre festését tedd át a `draw` blokkból a `setup` blokkba.)  
A `soundRecorded` blokkban írj egy if-et, ahol megnézed, hogy a megértett szöveg "up" volt-e (vagy "fel", ha átállítottad a nyelvet magyarra). Ha igen, rakd a sprite-ot 100 képponttal feljebb vásznon. Ugyanígy írd meg a három másik irányt is.  
Vagy ha a léptetés helyett folyamatos mozgást szeretnél, akkor ne a sprite koordinátáit módosítsd, hanem adj neki sebességet (`setSpeed()`) a megfelelő irányba. Akkor viszont esetleg hozzáadhatsz egy "stop" parancsszót is, ami nullára állítja a sebességet.  

__Színező__  
/// Példamegoldás: [.peldamegoldas/szinezo.js](.peldamegoldas/szinezo.js)  
Írj olyan programot, amiben egy sprite mindig követi az egeredet, és csíkot húz maga után - idáig könnyű.  
Most pedig írd meg, hogy ha kimondasz egy színt, akkor a sprite onnantól olyan színű lesz (`shapeColor`). Ha a program nem értette a színt, a sprite fehérre változik.    
Próbálj meg egérrel és beszéddel rajzolni. Ne felejtsd el, [ezeket a színeket](https://www.w3schools.com/cssref/css_colors.asp) mind használhatod.  
(Annyi gond lehet, hogy a több szóból álló színek neve egy szóba van írva, pl. "darkblue", de a szövegfelismerő ezeket külön szavakként írja le, pl. "dark blue". Ezt úgy tudod megoldani, hogy a `resultString` változón meghívod a `replace()` függvényt, amivel kiszeded belőle a szóközöket: `rec.resultString.replace(" ", ""))`.)  

__Kávézó__  
/// Példamegoldás: [.peldamegoldas/kavezo.js](.peldamegoldas/kavezo.js)  
Írj interfészt egy hanggal irányítható kávéfőzőhöz! Keress képet három különböző kávéfajtáról (pl. presszó, cappuccino, latte), és töltsd őket változóba a `preload` blokkban. Hozz létre a `setup` blokkban egy sprite-ot, és tedd a vászon közepére.  
A `soundRecorded` blokkban pedig egy if-fel írd meg, hogy ha a hallott szöveg "espresso" volt, akkor a sprite kapja meg a presszó kávé képét; aztán két másik if-fel a két másik kávét.  
