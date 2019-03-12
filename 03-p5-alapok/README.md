# A p5.js és a p5.play alapjai

A mai órán megtanuljuk, hogy lehet p5-ös szereplőket létrehozni és a kevünk szerint beállítani - egyelőre még mozgás nélkül.  

/// Fontos: ezen a ponton még direkt nem említem a sprite-ok `setSpeed()`, `addSpeed()` függvényeit, `rotationSpeed` változóját. Ugyanis ha egy sprite "automagically" elkezd forogni meg mozogni, az kihúzza a talajt a következő óra magyarázatai alól, ti. nem világos, hogy akkor miért van szükség draw-ra   

A p5.js alapvető elgondolása az, hogy a képernyő egy nagy vászon, amire rajzolni lehet.  
A p5.play kiegészítő segítségével _szereplőket_, úgynevezett _sprite-okat_ tudunk létrehozni, amiknek a megrajzolása már automatikusan történik.  

## Saját sprite létrehozása

Ebben a binben dolgozz: http://jsbin.com/vizodax/edit?console,output  
/// Illetve: [.sprite-coords-basics/index.html](.sprite-coords-basics/index.html)  
/// Ez egy alap bin, amiben van setup és draw, illetve pár helper a kordinátákhoz.  

/// Egyelőre mindent parancssoron csinálunk.  

Új sprite létrehozása: `bob = createSprite()`  
(Nem muszáj bobnak nevezni, én megszokásból csinálom, így nem kell rajta gondolkodni.)  

bob egy objektum, akinek van egy `rotation` nevű változója.
Mennyi ennek az értéke most? Mi történik, ha megváltoztatod?  
Most már azt is látjuk,  hogy bob a bal felső sarokban forog. Mozgatni kéne.  

/// Beszélgetés, ötletelés: azt akarom, hogy a sprite ide menjen a vásznon (rámutatok egy pontra), de hiába mutatok ide, azt a számítógép nem érti. Valahogy el kell neki magyaráznom, hogy ide menjen, mert látni nem látja, hova mutatok. Hogyan?  
/// Három lehetséges rávezető sztori:  
/// 1. James Bond egy bevetésen bejut egy hatalmas, négyzetes csempékkel kirakott padlójú terembe. Egy bombát kell megkeresnie, de nem tudja, hol van. A segédje, aki rádiókapcsolatban áll vele, látja a terem radarképét, tehát látja a bombát is, és a csempék mintázatát is, de Bondot nem (tehát nem tudja interaktívan irányítani). Hogyan tudja a segéd megmondani Bondnak, hol a bomba? --- Leszámolja és megmondja Bondnak, hány csempét menjen a két tengely mentén.  
/// 2. Mikor torpedót játszunk, rá akarok lőni a pályád egy pontjára, de nem mutathatok rá, hogy hova, mert nem láthatom a hajóidra. Tehát azt mondom, hogy "D4", te pedig elmondod, hogy "talált, süllyedt". Mit mondtam tulajdonképpen? --- Azt, hogy a pálya bal felső sarkától mennyivel jobbra és mennyivel lefelé akarok lőni.  
/// 3. Bátyám nagyon hatékonyan tud számokat megjegyezni, a vizuális memóriára viszont csapnivaló. Egyetemen úgy írt ötöst a vaktérképes teszten, hogy előtte otthon vonalzóval lemérte minden megjegyzendő város pontos helyét (milliméterre) a térkép bal felső sarkától jobbra és lefelé, megjegyezte a számokat, a ZH-n pedig "felmérte" ezeket a térképre.  
/// Megjegyzés: szavazás alapján a lányok az első sztorit tartották a legjobbnak a magyarázathoz, de a többi is tetszett nekik - akár mindhármat el lehet mondani.  

/// Játék: irányítsuk egymást koordinátákkal!  
/// Keressünk egy helyet, ahol felülről lehet rálátni a térre.  
/// Az egyik mentor lemegy a térbe, illetve kiteszünk három tárgyat, amit sorrendben össze kell gyűjtenie.  
/// A mentort felülről a "plusz/mínusz x/y" kifejezésekkel lehet irányítani.  
/// A lányok négyes csoportokban játszanak, minden lány egy konkrét irányért felelős.  
/// Megjegyzés: az én lányaim azt mondták utólag, hogy ez a játék felesleges volt, de fiatalabbaknak (ill. akik még nem tanultak koordgeot) lehet, hogy segít.  

bob mozgatása: nagyon precíz lélek, képpontra pontosan meg kell neki mondani, hol legyen: a bal felső saroktól mennyire jobbra és mennyire lefelé.  
`bob.position.x` és `bob.position.y`  

/// Gyakori, hogy valaki véletlenül az egész `position` vektort állítja át: `bob.position = 100` - ilyenkor sajnos a sprite visszakerül 0:0-ba, és nem reagál a további pozícionálásokra.  
/// Megoldás: `bob.position = resetPostition()`.  
/// Alternatíve: `bob.position = {}` után ha megint beállítjuk x-es és y-t helyesen, bob rendbejön. A gond az, hogy ilyenkor nem jön létre rendes `p5.Vector` példány, amitől egy ponton valami biztos el fog törni.  

Az egér helye: globális `mouseX` és `mouseY` változók.  

Van globális `width` és `height` változó. Mit adnak meg? Be tudod állítani bobot pont a vászon jobb alsó sarkába?  
Be tudod állítani bobot a vászon közepére?  

Ha segítséget szeretnél a tájékozódáshoz, kattints, és látni fogok a koordinátákat és a tengelyeket.  

bob mérete: `bob.width` és `bob.height`. Nem összekeverendő a globális `width` és `height` változókkal!  

bob színe: `bob.shapeColor`. Választható színek: Google "CSS colors". (https://www.w3schools.com/cssref/css_colors.asp)  
Pl. `bob.shapeColor = "indigo"`  

Ha ki akarod törölni bobot: `bob.remove()`  

## RGBA-színek

/// Színekkel ugyanaz a probléma, mint Bondnak a helyével: hogy tudod látatlanban pontosan leírni? Számokkal, valami előre egyeztetett rendszer szerint.  
/// TV, számítógép: RGB (minél több fény kerül egy pontra, annál világosabb lesz)  
/// Nyomtatás: CYMK (minél több tinta kerül egy pontra, annál sötétebb lesz)  
/// Képszerkesztés: HSB (könnyű fekete-fehér insta filtert tenni a képre)  
/// Demó bin alapján kell kitalálniuk a lányoknak, melyik kapcsoló mit állít. Itt nálunk nagyon bejött az, hogy hárman dolgoznak egy gépnél, mindenki egy paramétert tud csak változtatni, és közösen találgatják a működést.  
Színmodellek: http://output.jsbin.com/befobun/quiet  
/// Illetve: [.color-models/index.html](.color-models/index.html)  

/// Utána RGB színtér rendesen elmesélve, reflektoros binnel bemutatva. color függvény, color picker.  
RGB színmodell: http://output.jsbin.com/vulomek/quiet  
/// Illetve: [.rgb-spotlights/index.html](.rgb-spotlights/index.html)  

Sprite színének beállítása RGB színre:  
```
bob.shapeColor = color(189, 70, 102)
```
Az első szám a pirosságot határozza meg, a második a zöldséget, a harmadik a kékséget. Mindhárom 0 és 255 között mozog. Minél nagyobbak a számok, annál világosabb a szín, tehát `color(0, 0, 0)` a fekete és a `color(255, 255, 255)` a fehér.  
(Színek kikereséséhez keress rá Google-n arra, hogy "színválasztó".)  

Ha átlátszóságot is akarsz állítani a sprite-nak, adj meg egy negyedik számot is:  
```
bob.shapeColor = color(189, 70, 102, 50)
```
A negyedik szám a szín "láthatóságát" szabályozó, úgynevezett _alpha_ beállítás. Ez is 0 és 255 között mozog, ahol a 0 a teljesen átlátszó (tehát láthatatlan) és a 255 a teljesen látható (ami amúgy is az alapértelmezés).  

## Sprite-gyűlés
/// Pusher app és autentikáció szükséges! [Részletek itt](../.private/pusher-auth/README.md).  
/// Először indítsd el a szervert: http://jsbin.com/yokahog/edit?console,output  
/// Illetve: [.pusher-sprite-basics/pusher-server.html](.pusher-sprite-basics/pusher-server.html)  
/// Ezt vetítsük ki, így mindenkinek megjelennek a sprite-jai egy térben.  
Próbáld ki a sprite-os parancsokat itt: http://jsbin.com/weduva/edit?console,output  
/// Illetve: [.pusher-sprite-basics/pusher-client.html](.pusher-sprite-basics/pusher-client.html)  
Közben figyeld, mi történik a kivetítőn.  
/// Ez meg egy kliens, ami másodpercenként jelent az aktuális sprite-okról a szerver felé.  
/// Arra figyelj, hogy ha a kliens előbb indul el, mint a szerver, akkor hibaüzeneteket dobál a konzolra mindaddig, amíg a szerver online nem lesz.  

/// Először csak hagyjuk, hogy kísérletezzenek, próbálják egymástól megkülönböztetni a sprite-jaikat.  
/// Utána azt játsszuk, hogy kémek vagyunk: az egyik mentor is bedob egy sprite-ot,  
/// a lányoknak pedig meg kell próbálni őt utánozni (helyben, színben, formában),  
/// hogy "elbújjanak" a kémelhárítás elől.  

## GitHub regisztráció

Jövő órától nem parancssorba írjuk a programokat, hanem kódszerkesztőben, és el is mentjük őket. Ehhez regisztrálni kell JSBinre, ami úgy történik, hogy az ember a [github.com](http://github.com) oldalra regisztrál, és utána JSBinen bejelentkezik a GitHub regisztrációjával.  
Részletes instrukciókat [itt találsz](jsbin/jsbin-instructions.md).  

/// Ötlet házi feladatra: hozz létre sprite-ot és mozgasd a helyére úgy, hogy passzoljon oda  
/// 1. Pozíció, méret, forgatás:  
/// http://jsbin.com/vuxujec/edit?console,output illetve [.sprite-positioning-practice-1/index.html](.sprite-positioning-practice-1/index.html)  
/// 2. Pozíció, méret, RGBA szín (insired by http://i-love-hue.com/):  
/// http://jsbin.com/suvatuy/edit?console,output illetve [.sprite-positioning-practice-2/index.html](.sprite-positioning-practice-2/index.html)  
