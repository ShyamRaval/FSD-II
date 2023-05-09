var ps = require('fs');
ps.writeFileSync('hello.txt','done 6');

var data = ps.readFileSync("hello.txt");
console.log(data.toString());
console.log(data);