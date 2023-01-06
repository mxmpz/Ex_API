const mongoose = require('mongoose')
const { Schema } = mongoose

// Import du shéma image
const imageSchema = require('./Image')

// Création du schéma d'un plat
const platSchema = new Schema({
  titre: {
    type: String
  },
  description: {
    type: String
  },
  adresse: {
    type: String
  },

  // Utilistaion du schéma image
  photo: {
    type: imageSchema,
    default: {}
  },
  prix: {
    type: String
  },

  // Un plat est proposé par un restaurant, donc on référence le restaurant dans lequel le plat est proposé
  // Un Plat = Un Restaurant / Relation OneToOne
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
}, { timestamps: true })

// Export du model plat
module.exports = mongoose.models.Plat || mongoose.model('Plat', platSchema)
