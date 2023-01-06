const mongoose = require('mongoose')
const { Schema } = mongoose
const imageSchema = require('./Image')

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
  photo: {
    type: imageSchema,
    default: {}
  },
  prix: {
    type: String
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  }
}, { timestamps: true })

module.exports = mongoose.models.Plat || mongoose.model('Plat', platSchema)
