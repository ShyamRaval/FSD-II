const expr = require('express');
const app = expr()
port = 5000

student = [
    { name: "abc", age: 28 },
    { name: "def", age: 40 },
    { name: "xyz", age: 10 }
]

app.get("/", (req, res) => {
    res.set("content-type", "text/html")
    res.write(JSON.stringify(student))
    res.send()
})

app.get("/sort", (req, res) => {
    res.set("content-type", "text/html")

    for (i = 0; i < student.length; i++) {
        for (j = 0; j < student.length; j++) {
            if (student[i].age > student[j].age) {
                temp = student[i]
                student[i] = student[j]
                student[j] = temp
            }
        }
    }
    for (k = 0; k < student.length; k++) {
        res.write(student[k].name + "<br>")
    }
    res.send()
})
app.listen(port)

