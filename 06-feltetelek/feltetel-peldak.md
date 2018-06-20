## Lehetséges "feltétel" kifejezések

#### 1. Egy változó értéke "igaz"

Ha van egy változó, ami "igaz" vagy "hamis" értéket tárol, mint például a `mouseIsPressed` változó, akkor elég a változó nevét beírni a feltétel helyére:  
```JavaScript
if (mouseIsPressed) {
    background("white")
}
```

(Ha tagadni szeretnéd, tehát az ellenkezőjére szeretnél tesztelni, írj egy egy felkiáltójelet: `if (!mouseIsPressed) { ... }`.)  

#### 2. Egy függvény visszatérési értéke "igaz"
Ha van egy függvény, ami "igaz" vagy "hamis" értéket ad vissza, mint például az `overlap()` ("átfed" vagy "rálóg"), akkor elég meghívni a függvényt a feltétel helyén:  
```JavaScript
cat = createSprite()
dog = createSprite()

if (cat.overlap(dog)) {
    alert("Juj!")
}
```

(Ha tagadni szeretnéd, tehát az ellenkezőjére szeretnél tesztelni, írj egy egy felkiáltójelet: `if (!cat.overlap(dog)) { ... }`.)

#### 3. Két dolog megegyezik (szám, szöveg, akármi)

Ha két dolgot szeretnél összehasonlítani, azt dupla egyenlőségjellel (`==`) tudod megtenni. (Ne felejtsd el, hogy a szimpla egyenlőségjel másra való - ha dupla helyett szimpla egyenlőségjelet írsz a feltétel helyére, nem fog működni a programod!)  

Példa változóval:  
```JavaScript
if (bob.position.x == 300) {        // dupla egyenlőségjel: két érték összehasonlítása
    bob.shapeColor = "red"          // szimpla egyenlőségjel: értéket adunk egy változónak
}
```

Példa függvénnyel:  
```JavaScript
if (dayName() == "Monday") {
    print("Nem szeretem a hétfőt.")
}
```

Összetett példa: ha "hatost dobunk", nyertünk.  
Véletlenszám 1 és 6 között: `random(1, 6)` - de ez sajnos tört szám.  
Egészre kerekített véletlenszám 1 és hat között: `round(random(1, 6))`.  
Ezt kell tehát összehasonlítanunk a 6-os számmal.  
```JavaScript
if (round(random(1, 6)) == 6) {
    alert("Nyertél!")
}
```

(Ha tagadni szeretnéd, tehát az egyenlőtlenségre szeretnél tesztelni, használd a `==` helyett a `!=` jelet.)    

#### 4. Egy szám kisebb/nagyobb egy másiknál

Számok összehasonlítására a kisebb/nagyobb jelek használhatók:  
```JavaScript
if (bob.position.x > width / 2) {
    background("red")
}
```

#### +1: feltételek összekapcsolása

Több feltételt ÉS illetve VAGY kapcsolatba tehetsz a `&&` illetve a `||` jelek használatával.  
Példa ÉS kapcsolatra:  
```JavaScript
if (bob.position.x > width / 2 && bob.position.y > height / 2) {
    alert("Bob a vászon jobb alsó sarkában van")
}
```

Példa VAGY kapcsolatra:  
```JavaScript
if (bob.shapeColor == "red" || bob.shapeColor == "blue") {
    alert("Bob piros vagy kék")
}
```
