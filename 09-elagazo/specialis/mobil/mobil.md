# Mobiltelefon

A p5-ös programok mobilon is működnek, és mivel az interneten tároljuk őket, nem kell "áttölteni" a mobilra, csak megnyitni a megfelelő URL-t. Tehát írd meg a programot a számítógépen, aztán írd be az url-t mobilon (az `edit` és az utána következő részek már nem kellenek, csak annyi, hogy "jsbin.com/valami").  
Megjegyzés: néha kicsit vacakolni kell, hogy frissüljön a program a telón - van, hogy gépen már rég átírtad, de a teló megjegyezte a régit, és kicsit erőltetni kell, hogy utolérje magát.  
Mobilon a `mouseClicked` blokk lefut, ha megérinted a kijelzőt, és a `mouseX` és `mouseY` prímán megmondják az ujjad helyét a kijelzőn, tehát szinte nem kell átírni a programokat, hogy ugyanúgy működjenek gépen és telón. Viszont a telefon ad pár extra változót és blokkot, ezt az egyes feladatoknál kifejtem.  

### Programötletek

#### Talpon maradós
/// Példamegoldás: http://jsbin.com/yivotif ill. [.peldamegoldas/talpon-marad.js](.peldamegoldas/talpon-marad.js) (mobilról nézd)  
A telefon giroszkópja mindig meg tudja mondani, hogy épp merre van fordítva a telefon. Ezt a p5 három változóban adja oda neked:  
`rotationX` - mennyire előre vagy hátra, tehát a cipőd felé, vagy a fejed búbja felé a telefont  
`rotationY` - mennyire forgatod jobbra-balra, tehát mutatod meg a tőled balra vagy jobbra lévőnek  
`rotationZ` - mennyire forgatod el egy helyben jobbra vagy balra, tehát pl. teszed át fekvőbe, míg a kijelző végig feléd néz  
A harmadikat prímán fel tudjuk használni arra, hogy egy mindig talpon maradó programot írjunk. Keress egy képet valamiről, aminek talpon kell maradnia - én egy mosolygo emojit használtam - és hozz létre egy sprite-ot a vászon közepén, aki megkapja ezt a képat alakul. Aztán a `draw` blokkban írd meg, hogy a sprite fordulata mindig pont a `rotationZ` legyen. (Illetve képtől függően lehet, hogy a `rotationZ`-hez hozzá kell adnod vagy el kell venned 90 fokot, hogy talpon maradjon, ne az oldalán feküdjön.)  
Nyisd meg a jsbin-t telefonon, és nézd meg, talpon van-e a figurád.   

#### Bealvós
A telefonos programokban használhatsz a `mouseClicked` és a `keyPressed` mellett egy olyan blokkot is, hogy `deviceMoved`, tehát "megmozdult a készülék".  
Keress három képet Pusheen-ről: egy ébert, egy álmosat, és egy alvót. Aztán írj egy programot, amiben Pusheen elalszik, ha nem mozgatod a telefont egy ideig.  
A program indulásakor legyen ébren; pár másodperc után feküdjön le; még pár másodperc után aludjon el; a telefon mozgatására pedig ébredjen fel. Ezt a fokozatosságot úgy tudod elérni, hogy a `setup` blokkban csinálsz magadnak egy változót, amit elindítasz nulláról, és a `draw` blokkban mindig növeled. Ez méri, mennyi idő telt el.  
A `draw` blokkba kell egy if, ami ezt a változót vizsgálja. Ha a változó már elég nagy (pl. nagyobb száznál), akkor jöhet a második (álmos) kép; ha nagyobb mondjuk kétszáznál is, akkor jöhet az elalvós; különben legyen az éber. És persze a `deviceMoved` blokkban le kell nullázni a számlálót.  

#### Trónok harca
Ehhez a programhoz ezt a sablont használd: http://jsbin.com/ruvarih/edit?js,output  
/// [../hangos/.peldamegoldas/hangos-sablon.html](../hangos/.peldamegoldas/hangos-sablon.html)  

p5-ben nem csak képeket, de hangokat is be lehet tölteni és le lehet játszani. A módszer nagyon hasonló a képekhez: a `preload` blokkban kell a `preloadSound()` függvény használatával beletölteni a hangot egy változóba. Az így betöltött hangokat a `playSound()` függvénnyel tudod később lejátszani, aminek át kell adni a hangot tároló változót.  
Például:  
```javascript
function preload() {
    cookieSound = preloadSound("http://endreymarcell.hu/p5v2/sounds/cookiemonster.m4a")
}

// ...

    function mouseClicked() {
        playSound(cookieSound)
    }
```

Írj egy programot, ami kolompol, ha megrázod a telefont, és azt mondja, hogy "shame!" (szégyen), ha megérinted a képernyőt. A rázáshoz használd a `deviceShaken` blokkot; az érintéshez jó lesz a `mouseClicked`.  
Ezeket a hangokat használhatod:  
Kolomp: http://endreymarcell.hu/p5v2/sounds/cowbell.wav  
Shame: http://endreymarcell.hu/p5v2/sounds/shame.m4a  
  
/// __Ide még kellene 1-2 program, de mivel végül senki sem választotta ezt a témát, a jegyzet félkész maradt.__  
