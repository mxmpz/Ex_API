const mongoose = require('mongoose')
const { Schema } = mongoose

// Import du shéma image
const imageSchema = require('./Image')

// Création du schéma pour l'adresse d'un restaurant
const adresseSchema = new Schema({
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
  nom: {
    type: String
  },
  description: {
    type: String
  },

  // Utilistaion du schéma adresse
  adresse: {
    type: adresseSchema,
    default: {}
  },

  // Utilistaion du schéma image
  photo: {
    type: imageSchema,
    default: {}
  },
  prix: {
    type: String
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
