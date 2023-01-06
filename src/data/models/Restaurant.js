const mongoose = require('mongoose')
const { Schema } = mongoose

// Import du shéma image
const imageSchema = require('./Image')

// Création du schéma pour l'adresse d'un restaurant
const adressSchema = new Schema({
  street: {
    type: String
  },
  number: {
    type: Number
  },
  postcode: {
    type: Number
  },
  city: {
    type: String
  },
  country: {
    type: String
  }
}, { timestamps: true })

// Création du schéma d'un restaurant
const restaurantSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },

  // Utilistaion du schéma adresse
  adress: {
    type: adressSchema,
    default: {}
  },

  // Utilistaion du schéma image
  picture: {
    type: imageSchema,
    default: {}
  },

  // Un restaurant propose plusieurs plats, donc on crée un tableau listant les différents plats
  // Un Restaurant = Plusieurs plats / Restaurants et plats on une relation OneToMany
  plats: [{
    type: Schema.Types.ObjectId,
    ref: 'Plat'
  }]
}, { timestamps: true })

// Export du model restaurant
module.exports = mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantSchema)
