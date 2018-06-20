# Infók mentoroknak

Sziasztok! Marca (Endrey Marcell) vagyok, én fogom az órákat tartani ezen a Skool kurzuson. Nagyon örülnék, ha jönnél mentorálni néhány órára! :)  
Itt megtalálsz pár fontos infót a kurzusról.  

## p5
Processing helyett p5.js-t tanítunk, ami végső soron ugyanaz, csak Java helyett JavaScriptben.  
##### Miért?
Úgy gondolom, a JavaScript sokkal barátságosabb programnyelv egy kezdő számára a Javanál. A dinamikus típusok (nem érdekel a változó típusa, csak az, hogy változó), szintaxis flexibilitása (elhagyható `var`, elhagyható pontosvesszők), illetve egyszerűbb és kifejezőbb volta lehetővé teszik, hogy a technikai részletek helyett a programozásra irányuljon a figyelem.  
Hasznos a JavaScript parancssor is, interaktívabb tanulási élményt nyújt.
Nem mellesleg a JavaScript nyelv közelebb áll hozzánk a mindennapokban, mert internetezni mindenki szokott - Java programokat nem feltétlenül használunk nap mint nap, vagy ha mégis, nem tudunk róla. Az pedig, hogy a p5.js sketchek weblapokba beágyazva futnak, azt jelenti, hogy innen egyenes út vezet a sokakat érdeklő webfejlesztés felé.  
##### Dokumentáció
p5.js dokumentáció: https://p5js.org/  
Különbségek összefoglalva: https://github.com/processing/p5.js/wiki/Processing-transition  

## p5.play
A p5.js-t ráadásul a kezdetektől fogva a p5.play nevű kiegészítővel együtt tanítjuk.
##### Miért?
A p5.play library úgynevezett sprite-okat, kb. szereplőket nyújt, akiknek alakot lehet adni (rajz vagy kép), helyet, méretet, mozgást, viselkedést definiálni - kicsit úgy, mint Scratch-ben. Ez egy sokkal intuitívabb megközelítés a megírandó programokhoz, mint amikor csak úgy rajzolunk a vászonra, és ingyen ad sok problematikus alkatrészt (a tapasztalat szerint a koordináták, a határellenőzrések stb. mindig bajosak), amikből utána sokkal jobban lehet építkezni.  
##### Dokumentáció
http://p5play.molleindustria.org/

## JSBin
A programokat a http://jsbin.com/ weboldalon írjuk.  
##### Miért?
Végtelen portábilitás: semmit sem kell a számítógépre telepíteni, bármelyik gépről lehet programozni, amin van internet és böngésző.  
Komfort: a böngésző mindenki számára ismerős környezet, szemben egy frissen letöltött kódszerkesztő programmal.  
Tárolás: a programok az internetre mentődnek, ezért megoldódik minden tárolási-hordozási probléma. Nem kell GitHubbal, Dropboxszal, pendrive-val vesződni, elég csak bejelentkezni, és minden program máris elérhető.  
Megosztás: pofonegyszerű megmutatni a programot valaki másnak - csak el kell küldeni az oldal linkjét, ahol épp programozunk.  

## Coding style
A JavaScripten belül is tartjuk magunkat néhány sajátos elvhez, ezeket [itt tudod elolvasni](p5-custom-style-guide.md). Kérlek, órákon te is ezeket az elveket kövesd, hogy egységes kódot mutassunk a lányoknak.  

## Apró betűs rész: következmények
Igen, a fent leírtak mind egy kompromisszumot jelentenek. Az, hogy egy speciálisan preparált környezetet adunk a tanulóknak ("just works" JSBin, beimportált p5.play.js, helper JavaScript függvények a weboldalamról csendben betöltve, saját ízesítésű JavaScript...), megkönnyíti a belépést a programozásba, ugyanakkor kicsit megnehezíti a továbblépést ebből a kényelmes környezetből: hiába adok egy linket a p5.js dokumentációjához, sok mindent újra kell majd tanulni.  
Ez egy tudatosan vállalt kompromisszum. A Skool foglalkozás célja, amire ezt a jegyzetet készítettem nem az, hogy programozókat neveljünk ki, hanem hogy adjunk egy pozitív élményt a programozással kapcsolatban. Ehhez a célhoz jól illeszkedik, hogy a belépési akadályt tesszünk minél könnyebben megugorhatóvá, és későbbre hagyjuk az esetleges rágósabb részeket. És úgy gondolom, hogy akit igazán megfog a programozás, és lelkesen áll hozzá a további tanuláshoz, annak nem fog problémát jelenteni a preparált környezetből való kilépés, továbblépés.  

## Foglalkozások tervezett menete
Az első néhány órán még nem nyitjuk meg a kódszerkesztőt, csak a JavaScript konzolt, és utasításról utasításra haladva ismerkedünk az alapfogalmakkal. A későbbiekben már teljes p5.js programokat írunk (setup-draw-stb), óránként egy-két új témkakörrel ismerkedünk meg. Ezeket előbb elmagyarázom-bemutatom, utána önálló munka megadott feladatok alapján, mindig igény szerint a mentorok segítségével. Itt figyelni kell arra, hogy a különböző sebességgel haladó lányokból mindenkinek jusson elegendő számú és nehézségű, érdekes feladat. Az utolsó óra egy nagyobbfajta program (játék vagy animáció) megírásával telik.  

Az alapelvek és az új témakörök megértését sok előre megírt bemutató, oktató célú program segíti.  

A foglalkozások anyagai a mentorok számára megjegyzésekkel, esetleges példamegoldásokkal ebben a repóban lesznek elérhetőek. Az órák tervezett beosztása már most fel van töltve (de még finomodhat); az órák tartalma időben érkezni fog.  
Ugyanennek a repónak a kommentek nélküli, nyilvános változata elérhető az [endreymarcell.hu/p5](http://endreymarcell.hu/p5) címen.  
A foglalkozások Facebook-csoportja: https://www.facebook.com/groups/593638677636363/  

## Amúgy rólam
Amúgy a Preziben vagyok full-stack fejlesztő, és ez az ötödik félév, hogy programozás kurzust tanítok Processing/p5.js környezetben (három félév Metropolitan Egyetem, egy félév MOME). Az itt leírt tantervet az előző félévek összes jó és rossz tapasztalata alapján alakítottam ki, iteráltam rajta; a döntések nem hasra ütve születtek, ezeket és ezeknek az ellenkezőjét is kipróbáltam, illetve a mentortársaimmal átbeszéltem egy-egy félévben. Mit gondolsz róla? Beszéljük meg - megtalálsz [Facebookon](https://www.facebook.com/endrey.marcell) vagy az endrey.marcell@gmail.com címen.  
