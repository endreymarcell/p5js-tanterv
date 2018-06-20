# Pusher authenticator app

Flask app a Pusher csatornák autentikációjához Heroku platformra.  

Néhány program remote kommunikációra épül ([sprite-gyűlés](../../03-p5-alapok/README.md#sprite-gyűlés) a p5 alapoknál és [távközlés](../../09-elagazo/specialis/tavkozles/tavkozles.md) az elágazó témáknál), ezek a [Pusher](http://pusher.com/) nevű ingyenes platformot, illetve a Pusher JavaScript kliensét használják. A kliensek autentikáció után tudnak felcsatlakozni egy-egy csatornára, ezt egy rövidke Python/[Flask](http://flask.pocoo.org/) backend app végzi, ami [Heroku](https://www.heroku.com/)ra van deployolva. (Valódi autentikáció igazából nem történik, az app mindenkit beenged, aki ráhív az endpointra.)  

A Pusher appom és az autentikációs appom jelenleg fut és használható (az endpoint https://marca-p5-pusher-auth.herokuapp.com/pusher/auth/), de ha a későbbiekben ez megváltozna, akkor itt a kód a reprodukáláshoz. Hozz létre egy Pusher appot, a kulcsait írd bele az `app.py` fájlba, aztán ezt az egész könyvtárat deployold Herokura, és írd át ebben a repoban a pusher kliensek app id-ját és az autentikációs endpointot.  
