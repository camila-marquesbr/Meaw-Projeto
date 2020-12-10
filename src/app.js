const express = require('express')
const bodyParser = require('body-parser') 
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')



const db = require('./configs/database')

 const index = require("./routes/index")
 const meaw = require("./routes/meawRoute")

db.connect()
app.use(cors()) 
app.use(express.json())
app.use('/', index)


module.exports = app
