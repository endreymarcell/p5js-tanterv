# Képek

Sablon: http://jsbin.com/riwusi/edit?js,output  
/// Illetve: [p5-sablon.js](../etc/p5-sablon.js)  
/// Fontos: ha más domainről származó képeket próbálsz JavaScriptben betölteni, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) problémákba fogsz ütközni. Ezért az eredeti `loadImage()` helyett írtam egy `preloadImage()` függvényt, ami átproxyzza az URL-eket egy [CORS-engedélyező appon](https://cors-anywhere.herokuapp.com/). Ez egyrészt prímán működik az esetek nagy részében, másrészt viszont néha meg bedöglik, legfőképp pedig: ha a tulajdonosa úgy dönt, hogy megszünteti ezt az appot, akkor onnantól vége a bulinak. Legjobb lenne egy saját Heroku appot fellőni ugyanerre a célra.  

## Képek beszúrása sprite-okra

### Hogyan?

#### Keresd meg a tökéletes képet

Először keresni kell egy képet. Én angolul szoktam keresni, mert úgy általában több a találat, de kereshetsz magyarul is. A keresőszó mögé írd oda, hogy "png" és kerüld a túl nagy képeket (kb. 500*500-nál nagyobbat nem érdemes választani).
Azok a jó képek, amiknek átlászó a háttere. Ezt onnan tudod, hogy fehér-szürke kockákat mutat a kép hátterében a google.    
A találatra jobb gombbal kattints, majd "Kép megnyitása új fülön". Ha tényleg megnyílik csak a kép, és a webcímnek tényleg .png a vége, akkor másold ki a webcímet.  

/// Vélekedés: az információs korszakban nem az információ megszerzése a nehéz, hanem a filterezés.    
/// Képhez lépések: 1. png, 2. méret, 3. átlátszó, 4. tényleg png.  

#### Töltsd be

A `setup` blokk előtt lehet még egy: a `preload`. Olyan, mint a betöltés a játékok elején.  
Ebben a blokkban lehet képeket betölteni:  
```JavaScript
function preload() {
    dogImage = preloadImage("http://www.petassure.com/images/pembroke-welsh-corgi.png")
}
```

#### Használd

Utána pedig hozzá kell adni a sprite-hoz:  
```JavaScript
dog = createSprite()
dog.addImage(dogImage)
```

Ha túl nagy a kép, kicsinyítsd le a sprite-ot: állítsd a sprite `scale` változóját, ami a sprite nagyításáért felelős.  
```JavaScript
dog.scale = 0.5
```
A `scale` alapból minden sprite-nál 1: ez azt jelenti, hogy a sprite pont akkorában jelenik meg, amekkora a mérete (`width` és `height`).  
Ha 2-re állítod, kétszer akkora lesz; ha 0.5-re, akkor feleakkora stb.  

### Képes programok

__Muffin__  
Keress egy képet egy muffinról, és hozz létre egy sprite-ot, ami megkapja ezt a képet kinézetnek. A `draw` blokkban színezd a hátteret világoskékre, és írd meg, hogy a sprite mindig kövesse az egeret, tehát a muffin mindig az egér helyén legyen (`position.x` és `position.y`, `mouseX` és `mouseY`).  
(Ha emlékszel még a Kool Kávézóból a parancsra, ami eltüntette az egeret, azt a parancsot is add ki, hogy tényleg csak a muffin legyen az egér helyen.)

__Szellemes__  
Keress egy képet egy szellemről ("ghost"), és hozz létre egy sprite-ot, ami megkapja ezt a képet kinézetnek. A `draw` blokkban színezd a hátteret feketére, és állítsd be, hogy a szellem-sprite mindig kövesse az egeret. Ha ez megvan, jön a jó rész: írd át úgy a programot, hogy a háttér ne teljesen feketére festődjön, hanem félig átlátszó feketére. (Tehát a `background("black")` parancs helyett a `"black"` helyén a `color()` függvényt használd, és állíts be neki RGBA színkóddal egy félig átlátszó feketét - a mentorod segít, ha elakadsz.)  

__Happy__  
Keress egy képet egy mosolygó smiley-ról, és hozz létre egy sprite-ot, ami ezt a képet kapja kinézetnek. Indíts egy fehér háttérrel, és minden pillanatban tedd a sprite-ot egy véletlenszerű helyre a vásznon (`position.x` és `position.y`, `width` és `height`, `random()`). Állítsd a forgását is véletlenszerűre (`rotation`), sőt a nagyítását is (`scale`).  
(Ha úgy tartja kedved, keress a mosolygó smiley helyett valamilyen másmilyen emojit, és azt használd.)  

__Cápa__  
Keress egy képet, amin egy cápa ("shark") pont feléd néz. Hozz létre egy sprite-ot a vászon közepén, add hozzá a cápa-képet kinézetnek, és állítsd a nagyítását (`scale`) nullára. Aztán újra meg újra színezd a vásznat kékre, és növeld meg a sprite nagyítását egy nagyon kicsivel (0.1, vagy még kevesebb).  
(Azt is beleírhatod, hogy billentyűnyomásra ugorjon vissza a nagyítás nullára.)  

__Pecsételő__  
Keress egy képet egy bármilyen pecsétről ("stamp"). Csinálj egy sprite-ot, ami megkapja ezt a képet kinézetnek. Indíts egy fehér háttérrel, és írd meg, hogy a sprite minden kattintásra ugorjon az egér helyére, és forogjon be véletlenszerű irányba (`rotation`, `random()`). A vásznat ne fesd fehérre újra meg újra, mert akkor eltűnnének a pecsételések.  
(Létezik ennek egy még okosabb verziója, amikor a sprite mindig követi az egeret, kattintáskor pedig pecsétel a vászonra. Ehhez itt a leírás: [pillanatfelvétel](pillanatfelvetel/pillanatfelvetel.md).)  

__LSD__  
Keress egy képet egy banánról. Csinálj egy sprite-ot, ami a vászon közepén van, megkapja a banán-képet kinézetnek, és folyamatosan forog (`rotation`). Írd bele a programba, hogy a háttér minden pillanatban teljesen véletlen színűre színeződjön (`background()`, `color()`, `random()`).    

__Mario__  
Keress egy képet Mario-ról, meg egy képet egy gombáról, amit el kéne kapnia ("Mario mushroom"). Mario helyének jó lesz a bal felső sarok, ahol magától létrejön, a gombát viszont tedd véletlenszerű helyre a vásznon (`position.x` és `position.y`, `width` és `height`, `random()`).  
Írd meg, hogy Mario minden kattintásra kicsit jobbra menjen, és minden billentyűnyomásra kicsit lefelé. A játék lényege, hogy Mariot a gombához irányítsd.  


## Külön témák

/// Itt a lányokat két csoportba bontjuk. Praktikus, ha a két csoport két külön asztalnál ül.  
/// A témákat önállóan dolgozzák fel - elmondom, hogy a programozónak tudnia kell dokumentáció alapján új dolgokat megtanulnia.  
/// 20-25 percig dolgoznak a külön témákon, elég, ha egyetlen programot megírnak a példafeladatokból.  

/// Automata mozgás setSpeed()-del  
[Egyes számú téma](egyes-tema.md)  

/// Sprite-ok találkozása: collide() és displace()  
[Kettes számú téma](kettes-tema.md)  

## Közös programok

/// Ezután párokba ültetjük őket úgy, hogy a párosok tagjai különböző témáktól érkezzenek.  
/// 20-25 percig párban dolgoznak a közös programokon, amihez mindkét témából megszerzett tudást fel kell használni.  
/// Írhatják a programokat klasszikus pair programming stílusban (csak egy ember gépel), bár nálunk inkább párhuzamosan gépelték ugyanazt.  

[Közös programok](kozos-programok.md)  
