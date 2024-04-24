const express = require("express");
const cors = require("cors");
const app = express()
const env = require("dotenv").config();
const port = process.env.PORT || 5000


// middleware

app.use(cors())
app.use(express.json())


app.get("/", (req, res )=>{
    res.send("manage user server is running...")
})


app.listen(port, (req, res)=>{
    console.log(`manage server is running on port: ${port}`)
})