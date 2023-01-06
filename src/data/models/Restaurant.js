const mongoose = require('mongoose')
const { Schema } = mongoose

const restaurantSchema = new Schema({
  nom: {
    type: String
  },
  description: {
    type: String
  },
  adresse: {
    type: String
  },
  photo: {
    type: String
  },
  prix: {
    type: String
  },
  plats: [{
    type: Schema.Types.ObjectId,
    ref: 'Plat'
  }]
}, { timestamps: true })

module.exports = mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantSchema)
