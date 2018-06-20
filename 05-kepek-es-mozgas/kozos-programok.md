# Közös programok: automata mozgás + sprite-ok találkozása

__Még dózerebb__
Vegyétek a dózer programot a kettes csoportból, és írjátok át úgy, hogy a dózer ne a pozíciójának az állandó változtatásával mozogjon, hanem automatikus sebességgel. Ha ez megvan, írjátok bele azt is, hogy ne magától indoljon el a program elején, hanem csak kattintásra.  
(Ha a dózert még nem írtátok meg, használhatjátok ezt: http://jsbin.com/piducac/edit?js,output)  
/// Illetve: [.dozer.js](.dozer.js)  

__Még teknősebb__  
Vegyétek a teknős programot az egyes csoportból. Adjatok hozzá négy sprite-ot: két keskeny, magasat és két lapos, széleset, és helyezzétek el őket úgy, hogy falat formáljanak a vászon szélein. (Ha nem akartok a falak begépelésével túl sok időt veszíteni, kimásolhatjátok őket [innen](https://gist.github.com/endreymarcell/8a4721de5ae93ba81742896aa286001f).) Írjátok bele azt is, hogy a teknős ne tudjon átmenni a falon, hanem "ütközzön" velük, így nem fog tudni többet lemenni a vászonról.  
(Ha a teknőst még nem írtátok meg, használhatjátok ezt: http://jsbin.com/necekad/edit?js,output)  
/// Illetve: [.teknos.js](.teknos.js)  
/// Gist tartalma: [.falak.js](.falak.js)  

__Lökő__  
Hozzatok létre két sprite-ot. Az egyik indoljon az `(x: 0, y: 100)` pontból, a másik pedig az`(x: width / 2, y: height - 100)` pontból. A felső kapjon a program indulásakor fix, egy egységnyi sebességet jobbra (`EAST`), a másik pedig kattintásra kapjon három egységnyi sebességet felfelé (`NORTH`). A feladat, hogy az alsó sprite megfelelő indításával eltaláld a felsőt. Írjátok bele azt is, hogy az alsó sprite találkozáskor eltolja a felsőt.  
(Kereshettek hozzájuk képet is: pl. az elsónak egy angry bird madarat, a felsőnek pedig angry birdös malacot; vagy az alsónak egy kutyát, a felsőnek egy labdát; vagy amit szeretnétek.)  

__Cookie monster__  
Hozzatok létre két sprite-ot: az egyik lesz a süti, a másik a cookie monster. A süti induljon az `(x: 100, y: height / 2)` pontból; a cookie monster legyen az `(x: width - 100, y: height / 2)` pontban. Kattintásra a süti kapjon 2 egységnyi sebességet jobbra (`EAST`). Írjátok meg, hogy a süti "ütközzön" a cookie monsterrel, tehát ne tudjon átmenni rajta.  
Ha ez megvan, jön a játék: a süti ne `y: height / 2` magasságból induljon, hanem teljesen véletlenszerű magasságból. Ahhoz, hogy mégis a cookie monsterhez jusson, nektek kell majd odairányítani, mégpedig úgy, hogy létrehoztok egy harmadik sprite-ot is, ami mindig követi az egeret, és ami el tudja tolni a sütit. Így indulás után az egeret követő sprite-tal feljebb vagy lejjebb tudjátok tolni a sütit, hogy a cookie monsterhez jusson.  
(Ha marad rá idő, keressetek hozzá képeket is.)  
