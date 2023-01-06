const Restaurant = require('../data/models/Restaurant')

// Permet de lister tout les utilisateurs enregistré dans la base de données
const getRestaurants = async () => {
  const retaurants = await Restaurant.find()
  return retaurants
}

// Exports des fonctions nécessaires
module.exports = {
  getRestaurants
}
