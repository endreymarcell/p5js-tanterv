### A map() függvény használata

A `map()` akkor jó, ha egy értéket egy tartományról át akarsz vetíteni egy másik tartományra.  
Például ha egy sprite-ot akarsz úgy forgatni, hogy ha az egér a vászon bal szélén van, akkor a sprite forgása 0 legyen, a vászon jobb szélén 360, a kettő között pedig egyenletesen forogjon végig, akkor a `map()` függvénnyel át tudod vetíteni a `mouseX` értékét az eredeti, 0-tól `width`-ig tartó tartományról a forgás 0-tól 360-ig tartó tartományára:  
```javascript
bob.rotation = map(mouseX, 0, width, 0, 360)
```

Vagy ha egy for ciklusban hozol létre 15 sprite-ot, és azt szeretnéd, hogy az első nagyítása (`scale`) 0.5 legyen, az utolsóé 3, a kettő között pedig folyamatosan, egyenletesen nőjön, akkor a `map()` függvénnyel át tudod vetíteni az `i` ciklusváltozó értékét az eredeti, 0-tól 14-ig tartó tartományból a nagyítás 0.5-től 3-ig tartó tartományára:  
```javascript
for (i = 0; i < 15; i += 1) {
    bob = createSprite()
    bob.scale = map(i, 0, 14, 0.5, 3)
    
}
```
(Miért 14? Mert 0-tól kezdjük a számolást, a 0 az első szám, az 1 a második, stb. tehát a 14 az utolsó, a tizenötödik.)  
