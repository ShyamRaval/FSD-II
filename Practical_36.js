const u = require('url')

var addr = "http://localhost:8080/default.html?year=2017&month=fabruary"

var q1 = u.parse(addr, true)
console.log(q1)
console.log(q1.host)
console.log(q1.pathname)
console.log(q1.query)