// Használat:
// 1. Inicializáld a `connectToChannel(<channel_name>)` paranccsal
// (ahol a <channel_name> bármilyen betű-szám-kombináció lehet,
// de egyeznie kell mindenkinél, aki kommunikálni akar).
// 2. Küldj üzenetet a `sendMessage()` paranccsal
// (első paraméterként átadhatsz bármilyen adatot).
// 3. Add meg az üzenetkezelő logikát a `messageReceived()` függvényben,
// ami meg fogja kapni az átküldött adatokat,
// vagy azok hiányában egy üres objektumot.

Pusher.logToConsole = true
clientId = Date.now() + '-' + Math.round(Math.random() * 10000)

function connectToChannel(name) {
    channelName = "private-" + name
    pusher = new Pusher('27e612f403f7fb32f8ec', {
        cluster: 'eu',
        encrypted: true,
        authEndpoint: 'https://marca-p5-pusher-auth.herokuapp.com/pusher/auth/'
    })
    channel = pusher.subscribe(channelName)
    channel.bind('client-message', function(data) {
        if (data.clientId != clientId) {
            messageReceived(data.data)
        }
    })
}

function sendMessage(data) {
    if (!isOnline()) {
        console.warn("Nem tudok üzenetet küldeni offline módban!")
        return
    }
    if (!data) {
        data = {}
    }
    channel.trigger('client-message', {
        clientId: clientId,
        data: data
    })
}

function isOnline() {
    return !!(
        window.pusher &&
        pusher.channels &&
        pusher.channels.channels &&
        pusher.channels.channels[channelName] &&
        pusher.channels.channels[channelName].subscribed
    )
}
