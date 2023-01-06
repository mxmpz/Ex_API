require('dotenv').config()

// Utilisataion de Express
const express = require('express')
const app = express()

// Le serveur local est tourne sur le port 5000
const port = 5000

// On se connect à la base de donnée
const connect = require('./data/helpers/db')
connect()

// On déclare les routes renseignés dans le dossier user
app.use('/users', require('./routes/users'))

// On paramètre Express
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// On teste l'utilisataion de Express
app.get('/', (req, res) => {
  res.send('Ok')
})

// On affiche sur quel port tourne le serveur dans la console
app.listen(port, () => {
  console.log('Server is running on port ' + port)
})
