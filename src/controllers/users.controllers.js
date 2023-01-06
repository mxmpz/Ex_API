const User = require('../data/models/User')

// Permet de lister tout les utilisateurs enregistré dans la base de données
const getUsers = async () => {
  const users = await User.find().select('-password')
  return users
}

// Exports des fonctions nécessaires
module.exports = {
  getUsers
}
