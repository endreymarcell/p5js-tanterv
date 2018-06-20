# Kettes számú téma az ötödik órához: sprite-ok találkozása

A múltkori foglalkozáson láttuk, hogy ha két sprite-ot hozunk létre, és egymás tetejére pozícionáljuk őket, akkor simán egymásba lógnak. (És a később létrehozott sprite lesz "feljebb", az fogja fedni a másikat.)  
Ennél szerencsére okosabban is tudnak viselkedni: meg lehet nekik mondani, hogy _kikerüljék_ vagy _eltolják_ egymást.  
Tegyük fel, hogy van három sprite-unk: `man` (ember), `wall` (fal) és `box` (doboz). Azt szeretnénk, hogy az ember-sprite kikerülné a falat, de el tudná tolni a dobozt.  

Az elsőhöz a parancs: `collide()`, ami angolul _ütközést_ jelent. Így kell használni:  
```JavaScript
man.collide(wall)
```
Tehát az ember "ütközzön" a fallal. Ha kiadod ezt a parancsot, az ember-sprite többet nem fog tudni rálógni a fal-sprite-ra.  

A másodikhoz a parancs: `displace()`, vagyis _áthelyez_. Használat:  
```JavaScript
man.displace(box)
```
Vagyis az ember "áthelyezi" a dobozt.  

Fontos: ezeket a parancsokat nem elég egyszer kiadni, hanem újra meg újra kell, tehát a `draw` blokkba kell őket helyezni.  

Ebben a példaprogramban az ember-sprite az egeret követi, a fal és a doboz pedig véletlenszerű helyen üldögélnek:    
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    man = createSprite()
    wall = createSprite()
    box = createSprite()
    
    wall.position.x = random(0, width)
    wall.position.y = random(0, height)
    
    box.position.x = random(0, width)
    box.position.y = random(0, height)
}

function draw() {
    background("white")
    
    man.position.x = mouseX
    man.position.y = mouseY
    
    man.collide(wall)
    man.displace(box)
    
    allSprites.draw()
}
```

Itt ki is tudod próbálni: http://jsbin.com/subokut/edit?js,output  
/// Illetve: [.kettes-tema-demo.js](.kettes-tema-demo.js)  

## Gyakorló programok

__Dózer__  
Hozz létre egy sprite-ot a vászon bal szélén (függőlegesen középen), egyet pedig a vászon legközepén. A bal oldali sprite lesz a dózer ("bulldozer"), a középső a téli álmot alvó medve ("sleeping bear"). A medve sajnos pont az építkezési terület közepén alszik, el kell őt szállítani - ez lesz a dózer feladata. Írd meg, hogy a dózer-sprite újra meg újra jobbra mozduljon egy kicsit. Ha ez megvan, akkor a dózer-sprite sajnos csak áthajt a medvén, és nem mozdítja meg azt - az eltoláshoz a `draw` blokkba bele kell írnod, hogy a dózer-sprite "áthelyezze", eltolja a medvét.    
(Ha van kedved, keress hozzájuk képeket is.)    

__Jóétvágy__  
Hozz létre egy sprite-ot a vászon tetején, vízszintesen véletlenszerű helyen, és egy másik a vászon legközepén. A felső sprite lesz a hamburger, az alsó a tányér ("plate"). Aztán újra meg újra fesd fehérre a vásznat, és mozdíts a hamburger-sprite-ot lefelé egy kicsit. Azt is írd meg, hogy a tányér-sprite vízszintes helyzete mindig az egér vízszintes helyzetéhez igazodjon. A játék az, hogy a tányérral "el kell kapni" a leeső hamburgert. Ezt úgy tudod megtenni, hogy a `draw` blokkban a hamburgert "ütközteted" a tányérral.  
(Ha van kedved, keress hozzájuk képeket is.)  

__Vámpír__  
Hozz létre egy sprite-ot, és keress neki egy vámpír-képet ("vampire", esestleg "dracula"). Hozz létre még egy sprite-ot, aminek egy fokhagyma a képe ("garlic"). A vámpír-sprite a vászon közepén jöjjön létre, a fokhagyma pedig újra meg újra (tehát a `draw` blokkban) vegye fel az egér aktuális helyét. Írd bele azt is, hogy a fokhagyma-sprite-tal el lehessen tolni a vámpír-sprite-ot.   
