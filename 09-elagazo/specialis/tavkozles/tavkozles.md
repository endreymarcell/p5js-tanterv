## Távközlés
/// Pusher app és autentikáció szükséges! [Részletek itt](../../../.private/pusher-auth/README.md).

Minden programhoz ezt a bint vegyétek alapul: http://jsbin.com/cugafiv/edit?js,output  

### Használat

A `setup` blokkban csatlakozzatok fel egy csatornára a `connectToChannel()` paranccsal, aminek át kell adni egy szöveget - ez lesz a csatorna neve. (Ez bármilyen betű-szám-kombináció lehet, de meg kell egyeznie kettőtök között.)  
Ha minden jól megy, ez elég ahhoz, hogy a program futtatáskor pár másodperc alatt felcsatlakozzon a megadott csatornára. (A konzolon követhetitek a folyamatot, ha szeretnétek.)  
Üzenetet küldeni a `sendMessage()` paranccsal tudtok. Ha átadsz bármit ennek a függvénynek, azt a túloldal meg fogja kapni.  
A beérkező üzenetet kezelése a `messageReceived()` blokkban történik. Ha a küldő fél átadott bármilyen adatot, azt itt most a `data` változóban megkapod. (Tehát például egy `sendMessage(10)` parancs után a túloldalon ebben a blokkban a `data` változó értéke 10 lesz.)  
Arra figyeljetek, hogy a küldhető üzenetek száma limitált! Úgyhogy ne hívjátok meg túl gyakran a `sendMessage()` függvényt. Ez praktikusan azt jelenti, hogy _ne_ a `draw` blokkból küldjetek üzenetet, mert az nagyon gyorsan újra meg újra lefut, hanem a `mouseClicked` vagy a `keyPressed` blokkból.  
/// Megjegyzés mentoroknak: az ingyenes Pusher regisztrációhoz napi 200.000 üzenet jár. Ez soknak tűnik, de ha a másodpercenként akár 60-szor lefutó draw-ba kerül egy sendMessage, hamar el lehet tapsolni. Figyeljünk rá, hogy ez ne történjen meg, illetve érdemes lehet foglalkozás közben szemmel tartani a Pusher dashboardját, ahol mutatja, hány üzenetnél tartunk.   
 
### Programötletek

Pár ötlet, hogy mit lehet leprogramozni - de csinálhattok saját ötletet is.  

#### Sima chat  
Mindkét oldalon ugyanazt kell megírni: ha üzenet érkezik, azt ki kell írni a konzolra a `print()` függvény segítségével. Aztán az Output fület be lehet zárni, a Console fület meg kell nyitni, és a `sendMessage()` használatával már mehet is a csetelés.  
Hogy az üzeneteiket ne keveredjenek el a kommunkációs szervizüzenetek között, állítsátok a `setup` blokkban a `Pusher.logToConsole` változó értékét hamisra (`false`).  

#### Vakon rajzoló
Az egyik fél vakon rajzol a másik utasításai alapján.  
_Fogadó oldal:_  
Másold be ezt a preload függvényt úgy, hogy a küldő ne lássa: https://gist.github.com/endreymarcell/a7f6c7fc4687302261848ffc76ec7ef8  
Ez a program minden futásakor véletlenszerűen betölt egy képet.  
A `setup` blokkban csatlakozz fel egy csatornára, aztán rajzold ki a képet a vászonra a `image(img, 0, 0, width, height)` paranccsal.  
Válassz rajzolószínnek valami feltűnő színt (`stroke()`) és állítsd viszonylag nagyra az ecsetvastagságot (`strokeWeight()`).  
Végül pedig írd meg, hogy ha a érkezik egy üzenet, akkor rajzolsz egy pontot (`point()`) a `data.x`, `data.y` koordinátákra.  
_Küldő oldal:_  
A `setup` blokkban te is csatlakozz fel ugyanarra a csatornára, és te is válassz vastag és feltűnő színű ecsetet.  
Aztán a `mouseClicked` blokkban rakj egy pontot az egér aktuális helyére, és küldd is el az egér aktuális helyét egy üzenetben. Így rakd össze az üzenetet, amit átküldesz: `{x: mouseX, y: mouseY}`.  

Játék: mindkét fél elindítja a programot, méghozzá úgy, hogy nem látják egymás képernyőjét, de beszélni tudnak egymáshoz. Az egyik fél kap egy képet, a másik félnek pedig ezt kell pöttyök rajzolásával minél pontosabban reprodukálnia az első fél szóbeli utasításai alapján. Akinél a kép van, az látni fogja, hova kerülnek a pöttyök, és ez alapján tud utasításokat adni. A másik fél nem látja a képet, csak a pöttyöket, és a rajzolás végén ki kell találnia, mi volt a megrajzolandó kép.  

/// Példamegoldás:  
/// küldő: http://jsbin.com/hezayux/edit?js,output  
/// fogadó: http://jsbin.com/miqumac/edit?js,output  

#### Távirányítás  
A küldő oldal írja meg, hogy ha a felhasználó lenyom egy billentyűt, a `keyCode` változó tartalma átküldődik üzenetként.  
A fogadó oldal csináljon egy sprite-ot, aminek robot-képe van, a vászon közepén áll, és írja meg, hogy ha üzenet érkezik, akkor - a négy nyílnak megfelelően - a robot el tud mozdulni fel, le, jobbra vagy balra.  

#### Pong
Az előző program felokosítva: jó kis klasszikus pong. Tudjátok, [ez a cucc](https://media.giphy.com/media/tJc0Sq1jilB8A/giphy.gif).  
_Küldő oldal:_ ugyanaz, mint a fenti.  
_Fogadó oldal:_ Kell egy-egy ütő-sprite a vászon két szélére; egy-egy nagyon lapos, nagyon széles fal-sprite a vászon aljára és tetejére; és egy kicsi labda-sprite középre. A labda kivételével mindegyik mozdíthatatlan kell hogy legyen (`immovable` változót igazra kell állítani), a labda pedig kapjon egy kezdősebességet, aminek az iránya véletlen  -30 és 30 között.  
A `draw` blokkba írd bele, hogy a labda-sprite lepattanjon mindenki másról.  
A `keyPressed` blokkba írd bele, hogy a felfelé billenyűre a bal ütő-sprite menjen kicsit felfelé, a lefelé billentyűre pedig kicsit lefelé.  
A `messageReceived` blokkba írd bele, hogy ha az átküldött üzenet a felfelé-billentyű kódja, akkor a jobb oldali ütő-sprite menjen kicsit felfele, a lefelé-billentyű kódjára pedig kicsit lefele.  

Ha nagyon profin akarjátok megcsinálni, akkor a pontokat is számolhatjátok. Ehhez kell két változó a két játékosnak, amik nulláról indulnak, és a `text()` függvénnyel mindig kiírjátok őket a vászon két szélére. Kell továbbá, hogy a `draw` blokkban mindig megvizsgáld, hogy a labda-sprite kiment-e a vászonról valamelyik oldalon, és ha igen, akkor megnöveled a megfelelő változó értékét, és visszarakod a labdát középre.  

/// Példamegoldás:  
/// küldő: http://jsbin.com/yeqexim/edit?js,output  
/// fogadó: http://jsbin.com/lokiweh/edit?js,output

#### Tank
Két tank egymás ellen.  
_Fogadó oldal:_  
Keressetek egy képet egy felülnézeti tankról kicsiben. Csináljatok egy sprite-ot, aki megkapja a képet, és véletlen helyen jön létre a vásznon. Adjatok neki 0.98-as súrlódást (`friction`).  
Írjátok meg a `keyPressed` blokkban, hogy a jobbra/balra billentyűkre a elforduljon 20 fokot a tank a megfelelő irányba, az előre billentyűre pedig állítsatok be neki egy 2-es sebességet abba az irányba, amerre épp fordul (`rotation`). Ha a képen, amit találtatok, nem pont jobbra néz a tank, akkor lehet, hogy itt a sebesség iránya nem pont a sprite aktuális fordulata lesz, hanem 90, 180 vagy 270 fokkal több annál.  
Aztán még egy sprite-ot csináljatok meg ugyanígy, de másik néven, és a billentyűkre reagáló logikát ismételjétek meg a `messageReceived` blokkban, csak itt most `keyCode` helyett a `data` változót kell vizsgálni.   
Ja, és tegyétek bele a `setup` blokkba a csatornához való csatlakozást.  
_Küldő oldal:_  
Írjátok meg, hogy a program felcsatlakozik ugyanarra a csatornára, és ha lenyomtok egy billentyűt, annak a kódját átküldi üzenetként.  

Ha minden jól ment, most már mindkét tank tud forogni és haladni.  
A fogadó oldalon még hozzáírhatjátok, hogy a megfelelő billentyű megnyomásakor létrejöjjön egy lövedék-sprite, ami sebességet kap a tank aktuális irányába, illetve ha átfed a másik tankkal, akkor az a tank eltűnik. Ezt nem írom le igazán részletesen, kísérletezzetek, beszéljétek meg, segít a mentorotok is szívesen.  
/// Példamegoldás:  
/// küldő: http://jsbin.com/tenusuz/edit?js,output  
/// fogadó: http://jsbin.com/moyuver/edit?js,output  
