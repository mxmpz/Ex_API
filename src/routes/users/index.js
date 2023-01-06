const { getUsers } = require('../../controllers/users.controllers')
const router = require('express').Router()

// Création de la route pour la fonction getUsers
router.route('/')
  .get(async (req, res) => {
    const users = await getUsers()
    return res.send(users)
  })

// Exports des routes
module.exports = router
