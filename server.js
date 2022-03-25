const express = require('express')
const app = new express()
//const db = require('better-sqlite3')('NVTutoring.db')
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, "/client/build")))
app.use(express.json())

app.get("/hello",(req, res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log("Server ON")
})

