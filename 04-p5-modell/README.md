# A p5 modell  

Ma megtanulunk mozgó, sőt interaktív programokat írni.  

/// Mátrix-játék: ld. [.matrix-programok.md](.matrix-programok.md)  

A p5 programok utasításai három blokkra vannak osztva: felkészülés - folyamat - reakció. A blokkok hivatalos neve: `setup`, `draw`, illetve a megadott történés neve: `mouseClicked`, `keyPressed` stb.  

Írjunk vízcsepp-programot: egy kicsi, kék sprite elindul a vászon tetejéről, és lecsúszik - kattintásra pedig ugorjon vissza a vászon tetejére.  
Teljesen üres sablon: http://jsbin.com/zuqaquc/edit?js,output  
/// Illetve: [.ures-sablon.js](.ures-sablon.js)  
Sablon, amiben a gyakori elemek benne vannak: http://jsbin.com/xolewux/edit?js,output  
/// Illetve: [.elokeszitett-sablon.js](.elokeszitett-sablon.js)  

/// Közösen megírjuk a programot. Először kitaláljuk, milyen lépésekre lesz szükségünk: sprite léterhozása, pozícionálása, aztán lefelé löködése és visszaugratása.  

/// JSBinbe íráskor kiderül, hogy kell `createCanvas()`, `allSprites.draw()` és végül `background()`. Ezeket megbeszéljük.  

Példamegoldás:  
```JavaScript
function setup() {                              // ELŐSZÖR...
    createCanvas(windowWidth, windowHeight)     // vászon létrehozása (minden programba kell)
    bob = createSprite()                        // bob létrehozása
    bob.position.x = width / 2                  // bob kerüljön vízszintesen középre
}

function draw() {                               // AZTÁN ÚJRA MEG ÚJRA...
    background("white")                         // töröljük a vásznat
    bob.position.x += 1                         // lefelé mozdítjuk bobot
    allSprites.draw()                           // kirajzoljuk bobot (minden programba kell)
}

function mouseClicked() {                       // EGÉRKATTINTÁSRA...
    bob.position.y = 0                          // bob ugorjon a vászon tetejére
}
```

/// Kiegészítjük azzal, hogy kicsi legyen és kék.  
/// Aztán azzal, hogy a képernyő tetején véletlen helyre ugorjon vissza.  

/// Elmondani: a lentiekkel nem az a cél, hogy minél tovább eljussunk, hanem hogy mindenki találjon olyat, ami tetszik neki.  
/// Különböző tempókban fognak haladni, de lehet egymásnak segíteni.

__Figyelem:__  
Először mindig a "description" (leírás) mezőt állítsd át a HTML fülön, hogy utólag a neve alapján meg tudd találni a programodat, és ne felejts el menteni!  

Ötletek további mozgó programokra:  
__Fény az alagút végén__  
A vászon közepén létrejön egy 1*1-as méretű sprite, és elkezd nőni, de billentyűnyomásra visszaugrik az eredeti méretére. A vászon legyen fekete, a sprite fehér.  
Példamegoldás: http://jsbin.com/tefuken/edit?js,output  
(Ha szeretnél még feladatot: tegyél be még egy sprite-ot a programba, ami szürke színű, és mindig 20 képpontal szélesebb és magasabb, mint a fehér.)    

__Kattraforgó__  
Zöld vászon közepén egy sárga sprite folyamatosan forog. Ha kattintasz a vásznon, a sprite pont oda ugrik, ahol épp az egér van, és forog tovább.  
Példamegoldás: http://jsbin.com/duwenid/edit?js,output  
(Ha ki szeretnéd egészíteni: tegyél bele még egy sprite-ot a programba, ami helyben mindig követi az előzőt, de kicsit kisebb, fekete, és az ellenkező irányba forog.)  

__Szobafestő__  
Létrejön egy sprite, ami aztán minden pillanatban oda megy, ahol épp az egér van. Azt is szeretnénk, ha a sprite nyoma nem tűnne el, mikor elmozdul, hanem csíkot húzna maga után - hogy tudod ezt megoldani?  
Ha szeretnéd, beleírhatod, hogy kattintásra viszont letörlődjön az egész vászon.  

(__Szobafestő a fürdőszobában__  
_Ez az előző program kiegészítése._  
Legyen a programban még egy sprite, ami tükörben mozog az első száma sprite-tal: függőlegesen ugyanott van, de vízszintesen tükrözve van a vászon másik oldalára. A második sprite helyét újra meg újra ki tudod számolni az első sprite helyéből - gondolkodj rajta, hogyan, vagy beszéld meg a mentoroddal.)  

__Fejben dől el__  
Hozz létre egy sprite-ot a vászon közepén, aztán minden pillanatban állítsd be a sprite forgását aszerint, hogy mi az egér aktuális x helye. Tehát egyszerűen állítsd be a fordulatot mindig az x aktuális értékére. Ha ez megvan, a sprite méretét pedig (szélesség és magasság is) az egér y-jára állítsd.    
(Ha még interaktívabb programot szeretnél, írd át a programot úgy, hogy a háttér ne fehér legyen, hanem az is az egér helyzetéből következzen, például az piros színkomponens lehet az egér x helyzete, a kék pedig az y.)  

__Graffiti__  
Egy üres, fehér vásznon létrejön egy sprite, aki aztán minden pillanatban véletlen helyre ugrik. Úgy írd meg a programot, hogy az ugrások között ne törlődjön le a vászon, de kattintásra igen.  
(Ha szeretnéd, beleírhatod, hogy minden ugráskor véletlen legyen a sprite 1. forgása, 2. színe, 3. mérete is.)  

__Csillagos__  
Egy üres, fekete vásznon létrejön egy sárga sprite véletlen helyen. A sprite legyen 100 képpont széles, de csak 1 képpont magas. Utána minden pillanatban állítsd véletlenre a sprite forgását, és ne töröld le a vásznat. Ha kattintasz, a sprite ugorjon az egér helyére.  
(Ezt még kiegészítheted azzal, hogy a sprite szélessége véletlenszerűen változik kb. 50-150 között, a magassága 1-3 között.)  

__Hanghullám__  
A sprite-od legyen 3 képpont széles, 1 képpont magas. Induljon a vászon bal széléről, függőlegesen középről. Minden pillanatban állítsd a magasságát (tehát a függőleges méretét, nem pedig a pozícióját) véletlenre 0 és `height` között, és told vízszintesen jobbra három képponttal. A vásznat ne töröld le menet közben.  
(Ezt kiegészítheted azzal, hogy kattintásra letörlöd a vásznat, és visszahozod a sprite-ot a vászon bal szélére.  
Vagy, ha az jobban tetszik: kattintásra se töröld le a vásznat, viszont adj a sprite-nak új, véletlen színt.)  

Ha szeretnél még feladatot:  
__Sötétítő__  
Indíts egy fehér háttérrel, ami folyamatosan, szépen lassan besötétedik. Ezt úgy tudod megcsinálni, hogy majdnem teljesen átlátszó fekete színnel fested le a vásznat újra meg újra. Kattintásra váltson a vászon megint fehérre (hogy aztán újra elsötétülhessen).  
