const event = require('events');

var ee = new event.EventEmitter()

var connectHandler = function connect() {
    console.log("Connection Succesfull")
    ee.emit("data recieved")
}

ee.on("connection", connectHandler)
ee.on("data-recieved", function () {
    console.log("data-recieved")
})
ee.emit("connection")
console.log("thanks")