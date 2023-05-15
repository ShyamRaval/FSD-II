var ps = require('fs');

ps.readFile("hello.txt", function(e,data){
    if(e){
        return console.error(e)}
    console.log(data.toString())
});
console.log("programm ended");