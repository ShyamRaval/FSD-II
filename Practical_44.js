const event = require('events');

var ee = new event.EventEmitter()

var handler = function () {
    console.log("Hello World")
}
ee.on("scream", handler)
ee.emit("scream")