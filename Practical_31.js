var ps = require('fs');
var arr = [50, 33, 20, 1, 0, -9, -44];


arr.forEach(element => {
    ps.appendFileSync("task.txt", element.toString() + " ");
});
