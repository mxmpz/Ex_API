const mongoose = require('mongoose')
const { Schema } = mongoose

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

const restaurantSchema = new Schema({
  nom: {
    type: String
  },
  description: {
    type: String
  },
  adresse: {
    type: adresseSchema,
    default: {}
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
