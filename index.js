const express = require("express")
const path = require("path")
const cors = require("cors")
const db = require("./db")

const app = express()
    // add database
db.connect(app)


// addroutes
require('./routes')(app)
app.on('ready', () => {
    app.listen(3000, () => {
        console.log('server is up on port ', 3000)
    })
})

module.exports = app