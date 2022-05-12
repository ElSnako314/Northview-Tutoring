const express = require('express')
const app = new express()
const db = require('better-sqlite3')('NVTutoring.db')

app.use(express.static("build"))
app.use(express.json())

app.listen(8080, () => {
    console.log("server started")
})