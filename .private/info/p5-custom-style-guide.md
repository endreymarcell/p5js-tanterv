# Saját szokások p5.js kód írásakor

## Általános JavaScript stílus
* Egy soros blokkokat is tegyünk kapcsos zárójelek közé (konzisztencia).
* A nyitó kapcsos zárójel az előző sor végén van, nem külön sorban (ízlés).
* Összehasonlításhoz használjunk a `==` formát, ne a `===` formát (megengedhető egyszerűsítés).
* Használjunk mindig `"`-t (és nem `'`-t) (megengedhető egyszerűsítés).

## Saját JavaScript-módosítások
* Nem kell `var` a változók elé, elég a Pythonra hajazó `foo = 10` forma (megengedhető egyszerűsítés). 
* Ne használjuk a `++` és `--` operátorokat, helyette `+= 1` és `-= 1` használatos (szükségtelen extra szintaxis).
* Ne használjunk pontosvesszőket, az ASI (Automatic Semicolon Insertion) megoldja (megengedhető egyszerűsítés). Kivétel: for-ciklusok.
* A fenti szabályok alapján tehát a for-ciklus ajánlott formája: `for (i = 0; i < 10; i += 1)`.
* Bár operátoroknál nem szükséges, rakjuk ki a zárójeleket `typeof` és `delete` használatakor is (szükségtelen extra szintaxus).

## p5.js és p5.play stílus
* Függvényeken kívül ne írjunk kódot. Változódefiníciók kerüljenek a setup-ba, `var` nélkül úgyis globálisak (megengedhető egyszerűsítés).
* A `drawSprites()` forma helyett használjuk az `allSprites.draw()` formát, hogy mire a csoportokhoz érünk, az `allSprites` már ismerős legyen.
* A `random()` függvénynél mindig írjuk ki az alsó határt, akkor is, ha nulla, mert így nem kell foglalkozni az argumentumok változó számával (szükségtelen extra szintaxis).  

## Saját segítő függvények p5-höz and p5.play-hez
Ld. http://endreymarcell.hu/p5v4/marca-helpers.js
* Az `ellipse(x, y, w, h)` helyett elég a `circle(x, y, d)`.
* `loadImage()` és `loadSound()` helyett `preloadSound()` és `preloadImage()` (ezeken meg van oldva a CORS).
* Forgásnál használjuk a `NORTH`, `EAST`, `SOUTH`, `WEST` változókat, hogy ne kelljen a szögeken gondolkodni.
* Csoport létrehozásához `group = createGroup()` az eredeti `group = new Group()` helyett, hogy konzisztens legyen a `createCanvas()` és `createSprite()` parancsokkal.

## Példaprogram az összes fenti elv figyelembevételével
http://jsbin.com/qobecuh/edit?js,output  