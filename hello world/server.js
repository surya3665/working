const express = require("express")
const app = express()
require("dotenv").config()
const apiRouter = require("./route")

const PORT = process.env.PORT || 4000
app.use(express.json())

app.use("/api", apiRouter)

app.listen(PORT,() => {console.log("server connected "+PORT)})