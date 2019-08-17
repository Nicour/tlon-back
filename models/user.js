const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  myBooks: [{
    type: ObjectId,
    ref: 'book'
  }],
  favorites: {
    type: ObjectId,
    ref: 'book'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User
