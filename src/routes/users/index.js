const { getUsers, createUser, getUserByID } = require('../../controllers/users.controllers')
const router = require('express').Router()

// Route ne nécessitant aucune info dans l'URL
router.route('/')

  // Création de la route pour la fonction getUsers
  .get(async (req, res) => {
    const users = await getUsers()
    return res.send(users)
  })

  // Création de la route pour la fonction createUser
  .post(async (req, res) => {
    try {
      const userCreated = await createUser(req.body)
      return res.send(userCreated)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

router.route('/:id')
  // Création de la route pour la fonction getUsersByID
  .get(async (req, res) => {
    const user = await getUserByID(req.params.id)
    return res.send(user)
  })

// Exports des routes
module.exports = router
