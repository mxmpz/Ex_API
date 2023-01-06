require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

const connect = require('./data/helpers/db')
connect()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Ok')
})

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
