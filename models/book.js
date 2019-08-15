const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: String,
  author: String,
  editorial: String,
  image: String,
  reviews: [],
  category: {
    type: String,
    enum: ['Novel', 'Short story', 'Essay', 'Philosophy', 'Sociology', 'History']
  },
  rating: {
    type: Number,
    enum: [1, 2, 3, 4, 5]
  }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
