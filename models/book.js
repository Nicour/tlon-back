const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  name: String,
  author: String,
  editorial: String,
  image: String,
  revies: [],
  category: {
    type: String,
    enum: ['Novel', 'Short story', 'Essay', 'Philosophy', 'Sociology', 'History']
  }

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
