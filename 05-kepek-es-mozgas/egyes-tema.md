# Egyes számú téma az ötödik órához: automata mozgás

## Sebesség beállítása

Előző órán megtanultuk, hogy a sprite-okat hogyan kell mozgatni: az újra meg újra meghívódó `draw` blokkban mindig egy kicsit hozzá kell adni a jelenlegi pozíciójukhoz.  
Valójában a sprite-ok elég okosak ahhoz, hogy a legegyszerűbb fajta mozgásokat automatikusan is megcsinálják: meg lehet nekik adni egy fix sebességet, és onnantól maguktól mozognak, amíg mást nem mondunk.  

A mozgásról két dolgot kell megadnunk: a sebességét és az irányát. A sebesség egy szám, ami megadja, a sprite mennyit fog mozdulni minden pillanatban. Az irány helyére a négy égtájat lehet csupa nagybetűvel beírni: NORTH (észak, felfelé), SOUTH (dél, lefelé), EAST (kelet, jobbra), WEST (nyugat, balra).  

/// Ha valaki ennél pontosabb irányt szeretne, mutassuk meg neki, hogy az irány valójában egy szám 0 és 360 között, ahol a 0 keletre mutat, és órairányban forog.  

Tehát így lehet egy sprite-ot jobbra elindítani:  
```JavaScript
bob = createSprite()
bob.setSpeed(1, EAST)
``` 

Ez olyan, mintha meglöknék a sprite-ot, és utána már magától haladna. Ez azt jelenti, hogy elég ezt a parancsot egyetlenegyszer kiadni, tehát a `setup` blokkban.  

## Összehasonlítás lecsúszó sprite-tal

Példaprogram a __régi__ módszerrel:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = width / 2
}

function draw() {
    background("white")
    
    bob.position.y += 1         // <-- y növelése a draw blokkban (újra meg újra)
    
    allSprites.draw()
}
```

Példaprogram az __új__ módszerrel:
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
    bob.position.x = width / 2
    
    bob.setSpeed(1, SOUTH)      // <-- sebesség beállítása a setup blokkban (egyszer)
}

function draw() {
    background("white")
    allSprites.draw()
}
```

## Gyakorló programok

__Verseny__  
Csinálj két sprite-ot a képernyő bal szélélre, egymás alá. Mindkettőt indítsd el ("lökd meg") jobbra, de a felsőt kettes sebességgel, az alsót egyessel. Megírhatod azt is, hogy kattintásra ugorjon vissza mindkettő a vászon bal szélére.  
(Ha van időd, tölts be hozzájuk képeket is: pl. nyulat a felsőnek és teknőst az elsónak; vagy autót a felsőnek és biciklit az alsónak; vagy iphone-t a felsőnek és androidot az alsónak (esetleg fordítva?)).  

__Teknős__  
Hozz létre egy sprite-ot a vászon közepén, és adj neki egy egységnyi sebességet véletlenszerű irányba: az irány helyén égtáj helyett egy 0 és 360 közötti véletlenszámot adj meg (`random()`). Írd meg, hogy egérkattintásra is mindig véletlen irányba induljon el.  
(Ha marad időd, keress egy felülnézeti képet egy teknősről, méghozzá olyat, ami jobbra néz (pl. "turtle top png"). Ezt a képet add meg a sprite-nak. Sajnos ez magától még mindig jobbra fog nézni, nem pedig arra, amerre a sprite épp mozog. Úgy tudod egymáshoz igazítani a forgást és a mozgást, hogy a kattintáskor a sprite forgását (`rotation`) állítod be véletlenszerűre, és mikor sebességet adsz neki, akkor iránynak pont a saját fordulatát adod meg.)    

__Karácsony__  
Hozz létre három sprite-ot. Az egyik legyen a vászon bal szélén (függőlegesen középen), a másik a vászon közepén, a harmadik a vászon jobb szélén (függőlegesen középen).  
A játék lényege, hogy a bal oldali sprite egy ajándék, amit feladtunk postán; a középső sprite egy karácsonyfa; a jobb oldali egy karácsonyi üdvözlőlap. Az ajándéknak és az üdvözlőlapnak ugyanakkor kell odaérnie a fához.  
A bal oldali sprite-nak adj véletlen méretű sebességet jobbra (mondjuk 0 és 3 között). Aztán írd meg, hogy a jobb oldali sprite is elinduljon a karácsonyfa felé (balra), méghozzá fix, 2-es sebességgel, de csak akkor, ha lenyomsz egy billentyűt. Utána próbáld ki a játákot.  
(Ha marad időd, képeket is kereshetsz hozzájuk.)  
