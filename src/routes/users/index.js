const { getUsers, createUser, getUserById, deleteUserById, updateUserById } = require('../../controllers/users.controllers')
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
    try {
      const user = await getUserById(req.params.id)
      return res.send(user)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  // Création de la route pour la fonction updateUserById
  .patch(async (req, res) => {
    try {
      const user = await updateUserById(req.params.id, req.body)
      return res.send(user)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  // Création de la route pour la fonction deleteUserById
  .delete(async (req, res) => {
    try {
      await deleteUserById(req.params.id)
      return res.send(`User with ID ${req.params.id} as been deleted`)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

// Exports des routes
module.exports = router
