const mongoose = require('mongoose')
const { Schema } = mongoose

// Création du schéma d'une image
const imageSchema = new Schema({
  fileName: {
    type: String
  },
  originalName: {
    type: String
  },
  mimeType: {
    type: String
  },
  url: {
    type: String
  },
  path: {
    type: String
  },
  size: {
    type: Number
  }
}, { timestamps: true })

// Export du shéma seulement
module.exports = imageSchema
