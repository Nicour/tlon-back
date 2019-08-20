const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const reviewSchema = new Schema({
  review: String,
  user: {
    type: ObjectId,
    ref: 'user'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
