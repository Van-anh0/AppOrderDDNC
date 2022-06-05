const express = require('express');
require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const user = require('./Data/users.js')
const app = express()
const ImportData = require('./DataImport.js')
app.use(express.json())
app.use(cors())
app.use(cookieParser())

const PORT = process.env.PORT || 3000


const MONGO_URI = process.env.DB_URL
mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, 
err =>{
  if(err) throw err;
  console.log('connected to db')
})

// API
app.use("/api/import", ImportData)

app.get("/", (req, res) =>{
  res.send("API is running")
})

app.get("/api/users", (req, res) =>{
  res.json(user);
})

app.use('/api', require('./routes/authRoutes'))

app.listen(PORT, () =>{
  console.log("server is running in", PORT)
})
