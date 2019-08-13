const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  review: String,
  user: []
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
