const User = require('../data/models/User')

// Permet de lister tout les utilisateurs enregistré dans la base de données
const getUsers = async () => {
  const users = await User.find().select('-password')
  return users
}

const createUser = async (user) => {
  console.log(user)
  // On vérifie si l'utilisateur à un email et un mot de passe
  if (!user.email || !user.password) {
    // Si l'une des deux infos est manquante on relève une erreur
    throw new Error('Missing data')
  }

  // Création un utilisateur en respectant le schéma
  const _user = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    role: user.role
  })

  // Sauvegarde et enregistre l'utilisateur
  const savedUser = await _user.save()

  // Transformation du résultat en objet
  const savedUserObject = savedUser.toObject()

  // On supprime le mot de passe
  delete savedUserObject.password

  return savedUserObject
}

// Exports des fonctions nécessaires
module.exports = {
  getUsers,
  createUser
}
