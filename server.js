const express = require('express')
const app = new express()
const db = require('better-sqlite3')(NVTutoring.db)

app.use(express.static(""))
app.use(express.json())



app.listen(port, () => {
    console.log("Server ON")
})

