var ps = require('fs');

ps.writeFile("a2.txt",'Today is hot day', ()=>{
    console.log("completed");
}  );
ps.readFile("a2.txt",'utf-8',(e,data)=>{
    console.log(data)
});