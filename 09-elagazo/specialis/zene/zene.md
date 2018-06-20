## Gépi zene

/// http://charlie-roberts.com/gibber/p5-gibber/  
A programokhoz mindig ezt a sablont használd: http://jsbin.com/ceyemaf/edit?js,output  

### Programötletek

Megjegyzés: ezek nem annyira különálló programok, inkább csak sorban elmesélem, hogy miket és hogyan tudsz használni. Az új dolgokat írhatod külön programba, vagy kiegészítheted vele az első programot.  
A zenét tekintve konkrét feladat sincs: csak megmutatom, hogyan lehet használni a hangszereket, aztán kedved szerint kombinálhatod őket.    

#### Dobgép
/// Példamegoldás: http://jsbin.com/beqalax/edit?js,output  
/// Megjegyzés mentoroknak: ha idegesítő a folyamatosan szóló zene, érdemes kikapcsolási lehetőséget biztosítani. Pl. ki lehet lőni egy-egy böngészőfül hangját a fül jobb szélén.  
// Vagy a `mouseClicked`-ben minden hangszer `kill()` függvényét hívjuk meg, és akkor kattintással el lehet némítani a programot. Ehhez az is kell, hogy az Auto-run JS ki legyen kapcsolva, különben mindig újra elindul magától.  

Először is hozzunk létre egy dobgépet a `setup` blokkban a következő módon:  
```javascript
drums = EDrums("x*o*x*o-")
```
Ha minden jól megy, a program futtatásakor elindul egy folyamatos dobalap.  
/// Néha a Chrome panaszkodik, hogy user interaction nélkül akarunk AudioContext-et indítani. Ezt a JSBin konzolja nem írja, de a Chrome konzolja igen. A megoldás az `audioContext.resume()` parancs kiadása, pl. a `mouseClicked` függvényben.   

Próbálj ki más mintázatokat is! Például `"x*ox.xo-"` vagy `"x*ox*xo-"` vagy akár `x.o*-.o.x.o***o*`.  
Jelmagyarázat:  
`x` - lábdob  
`o` - pergő  
`*` - lábcin (csukva)  
`-` - lábcin (nyitva)  
`.` - szünet  

Megjegyzés: a dobot a `drums.kill()` függvénnyel tudod leállítani később, ha szeretnéd.  
Illetve minden további hangszert is a `kill()` függvénnyel tudsz majd lelőni.  

#### Dallamok

Hozzunk létre a dob után egy szintetizátort is:  
```javascript
synth = Synth()
```
Létrehozáskor át lehet adni pár konfigurációs értéket, ezek közül az `attack` nevű szerintem érdemes nagyon rövidre (1 milliszekundum) állítani, különben nagyon plötty hangja lesz a szintinek. Tehát inkább így add ki a parancsot:  
```javascript
synth = Synth({attack: ms(1)})
```  
(Ezt a szintaxist nem tanultuk eddig, úgyhogy ha nem ismerős, ne aggódj.)  

A létrehozott szintin a lejátszandó dallamot így tudod beállítani:  
```javascript
synth.note.seq(0, 1)
```
Mi történik itt? Átadunk a szintinek egy hangokból (note) álló sorozatot (szekvencia, "sequence"). A sorozatban két dolgot kell megmondanunk a hangokról: a hangmagasságot és a hangok hosszát. Ehhez átadunk a függvénynek egy hangmagasságot (0) és egy hanghosszt (1).  

_Hangmagasság:_  
A 0 a normál zenei A, onnantól pedig egy normál moll skálán lépdel felfelé: A, H, C, D, E, F, G, és a 7 megint A, csak egy oktávval feljebb.  
(Félhangokhoz használj tört számokat: a B például 0.5 értékkel hozható létre.)  
Ne aggódj rajta sokat, ha találomra írod a hangokat, akkor is pofás dallamok tudnak kijönni.  

_Hanghossz:_  
Az `1` azt jelenti, hogy a hang egy teljes ütemen át hangzik; az `1 / 2` azt jelenti, hogy egy hang az ütem feléig tart, tehát egy ütembe két hang fér;  az `1 / 4` negyedhangokat hoz létre, amikből négy fér egy ütembe stb.  

Ha nem csak egy hangot akarunk ismételgetni, hanem valódi dallamot szeretnénk csinálni, egy listában, tehát szögletes zárójelek között kell átadni a lejátszandó hangokat:    
```javascript
synth.note.seq([0, 1, 2, 3], 1)
```
Ez egy felfelé lépdelő dallamot csinál, amiben minden hang egy ütemig tart. Jobb lenne, ha egy ütembe beleférne mind a négy hang - ehhez állítsd át a hanghosszt egy negyedre:  
```javascript
synth.note.seq([0, 1, 2, 3], 1 / 4)
```

Ha pedig azt is szeretnéd, hogy a különböző hangok különböző hosszúságúak legyenek, a hanghossz helyén is listát adj át, a program pedig összepárosítja a hangok listáját a hanghosszak listájával:  
```javascript
synth.note.seq(
    [0, 2, 4, 3, 2, 1],
    [1/4, 1/4, 1/8, 1/8, 1/8, 1/8]
)
```
Itt az első két hang negyedhang, a következő négy viszont nyolcad, úgyhogy végül pont kitöltik az egész ütemet.  
(Megjegyzés: csak az olvashatóság miatt írtam több sorba, a program szempontjából nincs jelentősége, nyomsz-e entert a listát előtt-után.)  

#### Akkordok

Ha egyszerre több hangot akarsz lejátszani, a `note` ("hang") helyére a `chord` ("akkord", vagyis "hangzat") szót kell írni, továbbá hangok listája helyett hangzatok listáját kell neki átadni. Egy hangzatot (több hang együttesét) szintén egy listával tudsz leírni. Végső soron tehát listák listáját kell átadni:  
```javascript
synth.chord.seq(
    [[0, 2, 4]], 1
)
```
Itt egyetlen akkordot ismételget a szinti, a `[0, 2, 4]` akkordot, ami egy sima a-moll hármashangzat.  
Itt egy példa több, különböző hosszúságú akkorddal:  
```javascript
synth.chord.seq(
    [[0, 2, 4], [2, 6], [1, 5]],
    [1 / 2, 1 / 4, 1 / 4]
)
```

#### További hangszerek

Így tudsz basszusgitárt létrehozni:  
```javascript
bass = FM("bass")
```

Az FM a frekvenciamodulátor rövidítése, de ez kevéssé fontos. Ami fontos, hogy ez az eszköz sokféle hangszert tud szimulálni:  
`"bass"` - basszusgitár  
`"gong"` - gong  
`"brass"` - rézfúvós  
`"clarinet"` - klarinét  
`"glockenspiel"` - harangjáték  
`"noise"` - zaj  
`"stabs"` -  fogalmam sincs, de elég vicces hangja van  

Ezek bármelyikével meg tudod csinálni a fent mutatott dolgokat. Például itt egy dallam klarinétra:  
```javascript
clarinet = FM("clarinet")
clarinet.note.seq([0, 2, 4, 6], 1 / 16)
```

#### Effektek

A hangszerekhez effekteket (hanghatásokat) is hozzá tudsz adni a következő módon:  
```javascript
drums = EDrums("x*o*x*o-")
drums.fx.add(Reverb())
``` 
A felhasználható effektek:  
`Reverb()` - visszhang  
`Distortion()` - torzítás (gitárerősítőkről lehet ismerős)  
`Chorus()` - "kórus" (gitárerősítőkről lehet ismerős)  
`Vibrato()` - vibráló hatás  
`Tremolo()` - tremoló, ami egy hasonló, de kicsit más "lebegő", vibráló hanghatás  
`Schizo()` - paraeffektus  

Ugyanahhoz a hangszerhez több effektet is hozzá tudsz adni, csak sorold fel őket vesszővel elválasztva:  
```javascript
drums = EDrums("x*o*x*o-")
drums.fx.add(Reverb(), Schizo())
```

#### További mókák

__Panorámázás__  
Bármelyik hangszerre beállíthatod, hogy melyik füledbe mekkora arányban szóljon, ez az úgynevezett panoráma. Az alapértelmezés 0 (egyenletes), a legbaloldal -1, a legjobboldal 1. Így tudod átállítani:  
```javascript
clarinet.pan = -0.5
```

Próbáld ki, hogy kicsit szétszeded a hangszereidet, párat kicsit jobbra, párat balra raksz.  
Vagy akár írd bele a programba, hogy a dobgép panorámázása mindig az egér aktuális vízszintes helyzetétől függjön: a `draw` blokkban állítsd be a dob `pan` változóját úgy, hogy a `map()` függvénnyel levetíted a `mouseX` változó értékét a 0-tól `width`-ig tartó tartományból a -1-től 1-ig tartóra.  

__Vizualizáció__  
Van a hangszerek mellett még egy eszköz: az úgynevezett követő, ami le tudja követni a hangszer aktuális hangerejét. Bármelyik hangszerre rárakhatod, leginkább talán a dobra érdemes:  
```javascript
drums = EDrums("x*o*x*o-")
follow = Follow(drums)
```
Aztán pedig a `follow.getValue()` függvénnyel tudod elkérni a követő aktuális értékét. A visszaadott szám mindig 0 és 1 között van.  
Így tudod például egy sprite méretével mindig követni a dobokat:  
```javascript
function setup() {
    createCanvas(windowWidth, windowHeight)
    drums = EDrums("x*o*x*o-")
    follow = Follow(drums)
    bob = createSprite()
    bob.position.x = width / 2
    bob.position.y = height / 2
}

function draw() {
    background("white")
    bob.scale = follow.getValue()
    allSprites.draw()
}
``` 

Kísérletezz más vizuális hatásokkal is! Változtathatod a hangszerek alapján a sprite vagy a vászon színét, a sprite helyét stb.  

/// Nem mondom, hogy példamegoldás, de én ezt dobtam össze: http://jsbin.com/mobuyaz/edit?js,output  
