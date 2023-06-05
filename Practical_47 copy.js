class person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }
    elder(p) {
        if (this.age > p.age) {
            return this
        } else {
            return p
        }
    }
}

var p1 = new person('Dinesh', 23)
var p2 = new person('Maitry', 34)
var p3 = p1.elder(p2)

const jsonstr = JSON.stringify(p3)
console.log(p2)
var ps = require("fs")
ps.writeFileSync("d2.txt", jsonstr)