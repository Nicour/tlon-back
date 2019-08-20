'use strict'

const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const User = require('../models/user')
const Review = require('../models/review')

router.get('/books', async (req, res, next) => {
  try {
    const listOfBooks = await Book.find()
    res.status(200).json({ listOfBooks })
  } catch (error) {
    next(error)
  }
})

router.post('/books/new', async (req, res, next) => {
  try {
    const newBook = req.body
    const createdBook = await Book.create(newBook)
    const bookId = createdBook._id
    const id = req.session.currentUser._id
    const userWithBook = await User.findByIdAndUpdate(id, { $push: { myBooks: bookId } })
    res.status(200).json(userWithBook)
  } catch (error) {
    next(error)
  }
})

router.get('/books/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const book = await Book.findById(id).populate('reviews')
    res.status(200).json(book)
  } catch (error) {
    next(error)
  }
})

router.post('/books/:id/addreview', async (req, res, next) => {
  const { id } = req.params
  try {
    const newReview = req.body
    const createdReview = await Review.create(newReview)
    console.log(createdReview)
    const reviewId = createdReview._id
    const bookWithReviews = await Book.findByIdAndUpdate(id, { $push: { reviews: reviewId } })
    res.status(200).json(bookWithReviews)
  } catch (error) {
    next(error)
  }
})

router.get('/books/:id/reviews', async (req, res, next) => {
  const { id } = req.params
  try {
    const book = await Book.findById(id).populate('reviews')
    console.log(book)
    res.status(200).json(book)
  } catch (error) {
    next(error)
  }
})

router.put('/books/:id/update', async (req, res, next) => {
  const { id } = req.params
  const bookUpdated = req.body
  try {
    const updated = await Book.findByIdAndUpdate(id, bookUpdated, { new: true })
    res.status(200).json(updated)
  } catch (error) {
    next(error)
  }
})

router.delete('/books/:id/delete', async (req, res, next) => {
  const { id } = req.params
  try {
    await Book.findByIdAndDelete(id)
    res.status(200).json({ message: 'Book deleted' })
  } catch (error) {
    next(error)
  }
})

module.exports = router
