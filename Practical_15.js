const { timeout } = require("nodemon/lib/config");

var message = function(){
    console.log("The message is shown after 3 seconds")
};
setTimeout(message, 3000);