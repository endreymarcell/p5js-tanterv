## Feltételek kipróbálása a parancssorban

Próbáld ki itt: http://jsbin.com/huxamah/edit?console,output  

__Példák:__
Két dolog megegyezik:  
```
>   1 + 1 == 2
true
>   bob.rotation == 0
true
>   bob.position.x == mouseX
false
>   dayName() == "Thursday"
true
```

Két szám közül az egyik kisebb/nagyobb a másiknál:  
```
>   10 < 20
true
>   10 < 5
false
>   dog.position.y > cat.position.y
true
>   mouseX > width / 2
false
```

Egy változó értéke "igaz":  
```
>   mouseIsPressed
false
>   cat.mouseIsOver
true
```

Egy függvény értéke "igaz":  
```
>   cat.overlap(dog)
false
```
