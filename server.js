const express = require('express')
const app = new express()
const {CosmosClient} = require('@azure/cosmos')
const dbUrl = "https://sylvanianorthviewtutoring-db.documents.azure.com:443/"
const dbKey = "QegBGgl75R7KvoVMhzeeWcyQyxReJUQcqmVHkGmODsacrULuNy5opznUeDzUvq35VCPnlWdjvLBpycER3gP8iw=="
//const db = require('better-sqlite3')('NVTutoring.db')
const conString = "AccountEndpoint=https://sylvanianorthviewtutoring-db.documents.azure.com:443/;AccountKey=QegBGgl75R7KvoVMhzeeWcyQyxReJUQcqmVHkGmODsacrULuNy5opznUeDzUvq35VCPnlWdjvLBpycER3gP8iw==;"
const port = process.env.PORT || 8080
const path = require('path')
const client = new CosmosClient(conString)
const db = client.database("sylvanianorthviewtutoring-db")
const container = db.container("test")
const itemCont = 

app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/build")))


app.get("/hello/:name",async (req, res) => {
    const data = {
        id: Date.now().toLocaleString(),
        score: Math.random() * 100,
        name: req.params.name
    }
    container.items.create(data)
        .catch((err) => {console.error(err)})

    const {resources: hellos} = await container.items.query("SELECT * FROM c")
        .fetchAll()
    res.send(JSON.stringify(hellos))
})

app.listen(port, () => {
    console.log("Server ON")
})

