var ps = require('fs');

ps.writeFileSync("test.txt","HAHAYESS");
console.log(ps.readFileSync("test.txt").toString());
ps.appendFileSync("test.txt","\nHAHAYESS2");
console.log(ps.readFileSync("test.txt").toString());
ps.rmSync("test.txt")