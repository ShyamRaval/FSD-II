var event = require('events');

var ee = new event.EventEmitter()

var listener1 = function listener1() {
    console.log("listener1 executed")
}
var listener2 = function listener2() {
    console.log('listener2 executed')
}
ee.on("conn", listener1)
ee.on("conn", listener2)

var count = ee.listenerCount("conn")

console.log(count + " for conn event")
ee.emit("conn")
ee.removeListener("conn", listener1)
var count = ee.listenerCount('conn')
console.log(count + " for conn event")
ee.emit('conn')


