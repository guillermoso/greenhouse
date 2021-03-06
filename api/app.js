"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/index")
const authMiddleware = require("./middlewares/auth")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(authMiddleware)

//Aniadir prefijos rutas / Cargar rutas.
app.use("/", routes)

module.exports = app
