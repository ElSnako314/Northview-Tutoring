const express = require('express')
const app = new express()
const {CosmosClient} = require('@azure/cosmos')
const dburl = "https://northview-tutoring.documents.azure.com:443/"
const dbKey = "RKlahAUy99Uj240FsYSAvxkIoIDIWfjdFdfRalQ6rTkFVB7rH9BvbKXiKhKEnOKZoqPmY8RP6TxSVoqyGpF6yg=="
const conString = "AccountEndpoint=https://northview-tutoring.documents.azure.com:443/;AccountKey=RKlahAUy99Uj240FsYSAvxkIoIDIWfjdFdfRalQ6rTkFVB7rH9BvbKXiKhKEnOKZoqPmY8RP6TxSVoqyGpF6yg==;"
const port = process.env.port || 8080
const path = require('path')
const client = new CosmosClient(conString)
const db = client.database("nv-tutoring")
const container = db.container("test")

app.use(express.static(""))
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/build")))

app.get("/hello/:name", (req, res) => {
    const data = {
        id: Date.now().toLocaleString(),
        score: Math.random() * 100,
        name: req.params.name
    }
    container.items.create(data)
        .catch((err) => {console.error(err)})
    container.items.query("SELECT * FROM c")
        .fetchAll()
        .then(({resources: _hellos}) => {
            hellos = _hellos
            console.log(hellos)
        })
    res.send(JSON.stringify(hellos))
})

app.get('/tutor_sessions', (req, res) => {
    const query = db.prepare("SELECT * FROM tutor_sessions")
    const sessions = query.all()
    res.json({
        sessions
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
