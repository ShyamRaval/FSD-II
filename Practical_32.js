var OS = require('os');

console.log(OS.hostname())

console.log(OS.platform())

console.log(OS.tmpdir())

console.log(OS.freemem())

a1 = OS.freemem()

console.log(a1 / 1024 / 1024 / 1024)