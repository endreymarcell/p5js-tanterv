# Használati utasítás a jegyzethez

## Alapvetés

Ez a jegyzet a 2018. tavaszi Prezi-Skool foglalkozásokhoz készült. A tíz alkalomra lebontott anyagot heti egyszer 120 percben tanította 15 felsős gimnazista lánynak egy instruktor és átlagban körülbelül öt mentor.  
A foglalkozásokon a Processing JavaScript portját, p5.js-t tanítottunk az ehhez készült p5.play.js kiegészítővel. A programokat a [jsbin.com](http://jsbin.com/) oldalon írtuk. A választások miértjéről lásd a [mentoroknak írt tájékoztatót](mentors-notes.md).  
A jegyzetet abban a reményben készítettem, hogy később más is hasznát látja, ezért [Creative Commons BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) licensszel láttam el. Ez körülbelül azt jelenti, hogy szabadon felhasználhatod nem üzleti célokra, illetve módosíthatod is, csupán meg kell jelölnöd az eredeti forrást.  

## Használat

_(Előfeltételek: bash, git, github.)_  
Az anyagok újrafelhasználásához forkold le az [endreymarcell/p5js-tanterv](https://github.com/endreymarcell/p5js-tanterv) repót - ez a jegyzet mentoroknak szánt változata, megjegyzésekkel és példamegoldásokkal ellátva. A gépeden hozz létre egy könyvtárat az anyagnak, és azon belül még kettőt `private` és `public` néven. A repót a `private` könyvtárba klónozd le, és mindig itt végezd rajta a módosításokat is. A változtatásaid után futtasd le a gyökérkönyvtárban található [pub](../../pub) shell szkriptet, ez át fogja másolni a repó teljes tartalmát a szomszédos `public` könyvtárba, de úgy, hogy kigyomlálja belőle a tripla perjellel kezdődő sorokat (tehát a mentor-kommenteket) és a ponttal kezdődő nevű fájlokat és könyvtárakat. Így megkapod a repó tanulóknak szánt, publikus verzióját - ezt pushold fel egy új, az előzőtől különböző github repóba. A foglalkozáson résztvevőknek ezt a linket add meg, az első repót pedig tedd priváttá githubon, és hívd meg bele a mentoraidat együttműködőnek.  

A jegyzetben sok jsbin-link szerepel (példamegoldások stb.), amik általam létrehozott binekre mutatnak. Ezek jelenleg elérhetőek, de ezt nem tudom garantálni, hogy így is fog maradni, ezért inkább mindegyik bin tartalmát bemásoltam ide a repóba. Ugyanez a helyzet egyéb külső anyagokkal, js libekkel: ezek egyelőre elérhetőek az [endreymarcell.hu/p5v4](http://endreymarcell.hu/p5v4) címen, de a biztonság kedvéért ide is lementettem őket.  

A jegyzeteket [GitHub Flavored Markdown](https://github.github.com/gfm/) dialektusban írtam.  

## Megjegyzések

A JSBin egy csomó dolgot nagyon könnyűvé és egyszerűvé tesz, cserébe viszont van pár nehézsége is, és ezekbe persze nem tudunk belenyúlni. (Illetve de, le kéne forkolni a repót és küldeni bele a pull requesteket, vagy csak átírni és hosztolni belőle egy saját verziót - de erre nem vállalkoztam.)  
A GitHub regisztráció amúgy jó befektetés, de az, hogy csak GitHubbal lehet JSBinre bejelentkezni, az kicsit kellemetlen (talán érdemes fix gépnél dolgozatni a lányokat a foglalkozások alatt?). Régebben prímán ment az automatikus mentés, de ez azóta nincs, kézzel kell menteni, és ez elég nehézkes. Néha bugos az egész rendszer, ok nélkül hibát dob, amit talán megjavít az újratöltés, talán csak az új bin indítása, de néha még az sem, ilyenkor az általam adott sablon binből kell újat klónozni, és abba átmásolni a kódot. A binek elnevezése is nehézkes, a verziózás inkább akadályoz, mint segít stb.  

A JSBint amúgy gyakorlatilag [egy úriember](https://github.com/remy) fejleszti, szóval csak annyit tud fejlődni, amennyire ő ráér. Amúgy a [readme szerint](https://github.com/jsbin/jsbin/commit/47c89c99bd4c828fedb02bee1cd5dce642339e92) a mostani verziót már nem is foltozgatja, hanem egy teljesen újat ír - legalábbis ez a legutolsó infó 2018 januárjából.  

Minden nehézsége és gyerekbetegsége ellenére én úgy ítéltem meg, nagyon megéri a JSBint használni, mert az előnyei bőven ellensúlyozzák a hátrányait. Kipróbáltam több hasonló online kódoló környezetet amúgy, de messze ez illik a legjobban ehhez az anyaghoz. Természetesen választhatsz bármilyen másik környezetet (Processing szerkesztő p5-re állítva, p5 szerkesztő, sima kódszerkesztő és böngésző stb.), de akkor a jegyzetet is ennek megfelelően módosítsd.   


__Jó munkát!__  
Marca
