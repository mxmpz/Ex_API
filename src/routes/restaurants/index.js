const { getRestaurants } = require('../../controllers/restaurants.controllers')
const router = require('express').Router()

// Route ne nécessitant aucune info dans l'URL
router.route('/')

  // Création de la route pour la fonction getRestaurants
  .get(async (req, res) => {
    const users = await getRestaurants()
    return res.send(users)
  })

// Exports des routes
module.exports = router
