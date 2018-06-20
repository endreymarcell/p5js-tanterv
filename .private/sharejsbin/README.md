## ShareJSBin app

A JSBin sajnos tiltólistán van a Facebooknál, ezért jsbin.com linkeket (vagy olyan URL-feloldókat, amik jsbin.com linkekre mutatnak) nem, vagy csak captcha kitöltése után lehet Facebookra/Messengerre beilleszteni. Ez komoly akadályt jelent a megoszthatóság szempontjából. Ennek az áthidalására megvettem a [sharejsbin.com](http://sharejsbin.com/) domaint, és megírtam ezt a minimálos weboldalt, ami veszi az URL-t, a "sharejsbin" részt sima "jsbin"-re javítja, és pár másodperc múlva átirányít oda. Így könnyen meg lehet osztani JSBin linkeket Facebookon: vedd az eredeti URL-t, írd oda a "jsbin" elé a "share" szót, és már mehet is.  

Az appot [Netlify](https://www.netlify.com/)-on hosztolom. A forráskódot dokumentációs célból mentettem le ide, arra az esetre, ha az eredeti app vagy domain elérhetetlenné válna.  
