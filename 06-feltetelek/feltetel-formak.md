## Feltételek lehetséges formái

Sima: "Ha «feltétel» akkor színezd a hátteret fehérre."  
```JavaScript
if («condition») {
    background("white")
}
```

Kétágú: "Ha «feltétel» akkor színezd a hátteret fehérre, különben színezd a hátteret feketére."  
```JavaScript
if («condition») {
    background("white")
} else {
    background("black")
}
```

Sokágú:  
"Ha «első feltétel» akkor színezd a hátteret fehérre,  
különben ha «második feltétel»" akkor színezd a hátteret kékre,  
különben ha «harmadik feltétel»" akkor színezd a hátteret pirosra,  
különben színezd a hátteret feketére."
```JavaScript
if («condition1») {
    background("white")
} else if («condition2») {
   background("blue")
} else if («condition3») {
   background("red")
} else {
    background("black")
}
```
