const expr = require('express');
const app = expr()
const port = 6007

student = {
    name: "LJU",
    age: 28
}

app.get("/", (req, res) => {
    res.set("content-type", "text/html")
    res.write(JSON.stringify(student.age))
    res.send()
})


app.listen(port);