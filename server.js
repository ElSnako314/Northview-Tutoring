const express = require('express')
const app = new express()
//const db = require('better-sqlite3')('NVTutoring.db')
const port = process.env.port || 8080
const path = require('path')

app.use(express.static("build"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/build")))

app.get('/tutor_sessions', (req, res) => {
    const query = db.prepare("SELECT * FROM tutor_sessions")
    const tutor_sessions = query.all()
    res.json({
        tutor_sessions
    })
})

app.get('/users', (req, res) => {
    const query = db.prepare("SELECT * FROM users")
    const users = query.all()
    res.json({
        users
    })
})

app.listen(port, () => {
    console.log("Server ON")
})
