const express = require('express')
const app = new express()
const db = require('better-sqlite3')(NVTutoring.db)

app.use(express.static(""))
app.use(express.json())

app.get('/sesions', (req, res) => {
    const query = db.prepare("SELECT * FROM tutor_sessions")
    const sessions = query.all()
    res.json({
        sessions
    })
})

app.listen(port, () => {
    console.log("Server ON")
})

