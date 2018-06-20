//////////////////////////////////////////////
// loading images and sounds

corsProxy = "https://cors-anywhere.herokuapp.com/"

function preloadSound(url) {
    return loadSound(corsProxy + url)
}

function preloadImage(url) {
    return loadImage(corsProxy + url)
}

//////////////////////////////////////////////
// easier syntax for some p5 functionality

NORTH = 270
EAST = 0
SOUTH = 90
WEST = 180

function circle(x, y, d) {
    ellipse(x, y, d, d)
}

function square(x, y, a) {
    rect(x, y, a, a)
}

function createGroup() {
    return new Group()
}

function playSound(sound) {
    if (!sound.isPlaying()) {
        sound.play()
    }
}

function stopSound(sound) {
    sound.stop()
}

function pick(arr) {
    // use `random()` with numbers and `pick()` for arrays to avoid the topic of overloading
    return random(arr)
}

//////////////////////////////////////////////
// general helper functions

function uppercase(str) {
    return str.toUpperCase()
}

function lowercase(str) {
    return str.toLowerCase()
}

function roundTo(num, to) {
    return to * round(num / to)
}

function cutTo(num, to) {
    return num - num % to
}

function repulsionPoint(sprite, magnitude, pointX, pointY) {
    var angle = atan2(pointY - sprite.position.y, pointX - sprite.position.x)
    sprite.velocity.x -= cos(angle) * magnitude
    sprite.velocity.y -= sin(angle) * magnitude
}

function day() {
    return new Date().getDate()
}

function dayName() {
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]
    return days[new Date().getDay()]
}

//////////////////////////////////////////////
// misc

function pulse(from, to, speed) {
    if (typeof speed === "undefined") {
        speed = 1
    }
    var middle = (from + to) / 2
    var amplitude = Math.abs(from - to) / 2
    var direction = to > from ? 1 : -1
    return middle + direction * amplitude * sin(frameCount / 50 * speed)
}

function resetPosition(x, y) {
    // to be used when a sprite's position is set incorrectly, eg.
    // bob.position = 0                     // bob becomes unresponsive
    // bob.position = resetPostition()      // bob is alive again
    _x = Number(x) || 0
    _y = Number(y) || 0
    return createVector(_x, _y)
}

function shift(group) {
    // for the snake game
    // modifies the array in place moving the last item to the front
    if (group.length < 1) {
        return
    }
    last = group[group.length - 1]
    for (i = group.length - 1; i > 0; i -= 1) {
        group[i] = group[i - 1]
    }
    group[0] = last
}

print = console.log      // make sure p5's `print` is not overwritten by the browser

function createVoice() {
    return new p5.Speech()
}

function createRecorder(lang) {
    var myRec = new p5.SpeechRec(lang || 'en-US', function() { soundRecorded() })
    myRec.continuous = true
    return myRec
}
