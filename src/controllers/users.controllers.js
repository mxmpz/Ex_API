const User = require('../data/models/User')

// Permet de lister tout les utilisateurs enregistré dans la base de données
const getUsers = async () => {
  const users = await User.find().select('-password')
  return users
}

const createUser = async (user) => {
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

// Permet de lister tout un utilisateur grâce à son id
const getUserById = async (id) => {
  if (!id) {
    throw new Error('Missing ID')
  }
  const user = await User.findById(id).select('-password')
  const userObject = user.toObject()
  return userObject
}

// Permet de mettre à jour un utilisateur grâce à son id
const updateUserById = async (id, user) => {
  // Verification présence ID
  if (!id) {
    throw new Error('Missing ID')
  }
  // Verification présence user
  if (!user) {
    throw new Error('Missing user')
  }
  const userUp = await User.findByIdAndUpdate(id, user, { new: true }).select('-password')
  const userObject = userUp.toObject()
  return userObject
}

// Permet de supprimer un utilisateur grâce à son id
const deleteUserById = async (id) => {
  if (!id) {
    throw new Error('Missing ID')
  }
  await User.findByIdAndDelete(id)
}

// Exports des fonctions nécessaires
module.exports = {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById
}
