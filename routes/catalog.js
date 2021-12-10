const express = require('express')
const router = express.Router()

// import controller modules
const book_controller = require('../controllers/bookController')
const author_controller = require('../controllers/authorController')
const bookinstance_controller = require('../controllers/bookinstanceController')
const genre_controller = require('../controllers/genreController')

// // BOOK ROUTES
// GET home page (index, whatever)
router.get('/', book_controller.index)
// GET form to CREATE book
// note: must come before other routes as they will require params
router.get('/book/create', book_controller.book_create_get)
// POST to CREATE book on backend
router.post('/book/create', book_controller.book_create_post)
// GET form to DELETE book
router.get('/book/:id/delete', book_controller.book_delete_get)
// POST to DELETE book on backend
router.post('/book/:id/delete', book_controller.book_delete_post)
// GET form to UPDATE book
router.get('/book/:id/update', book_controller.book_update_get)
// POST to UPDATE book on backend
router.post('/book/:id/update', book_controller.book_update_post)
// GET request to display ONE BOOK
router.get('/book/:id', book_controller.book_detail)
// GET request to display ALL BOOKS
router.get('/books', book_controller.book_list)

// // AUTHOR ROUTES
// GET form to CREATE author
router.get('/author/create', author_controller.author_create_get)
// POST to handle CREATE author
router.post('/author/create', author_controller.author_create_post)
// GET form to DELETE author
router.get('/author/:id/delete', author_controller.author_delete_get)
// POST to handle DELETE author
router.post('/author/:id/delete', author_controller.author_delete_post)
// GET form to UPDATE author
router.get('/author/:id/update', author_controller.author_update_get)
// POST to handle UPDATE author
router.post('/author/:id/update', author_controller.author_update_post)
// GET request to display ONE author
router.get('/author/:id', author_controller.author_detail)
// GET request to display ALL AUTHORS
router.get('/authors', author_controller.author_list)

// // BOOK INSTANCE ROUTES
// GET form to CREATE bookinstance
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get)
// POST to handle CREATE bookinstance
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post)
// GET form to DELETE bookinstance
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get)
// POST to handle DELETE bookinstance
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post)
// GET form to UPDATE bookinstance
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get)
// POST to handle UPDATE bookinstance
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post)
// GET request to display ONE book instance
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail)
// GET request to display ALL  book instances
router.get('/bookinstances', bookinstance_controller.bookinstance_list)

// // GENRE ROUTES
// GET form to CREATE genre
router.get('/genre/create', genre_controller.genre_create_get)
// POST to handle CREATE genre
router.post('/genre/create', genre_controller.genre_create_post)
// GET form to DELETE genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get)
// POST to handle DELETE genre
router.post('/genre/:id/delete', genre_controller.genre_delete_post)
// GET form to UPDATE genre
router.get('/genre/:id/update', genre_controller.genre_update_get)
// POST to handle UPDATE genre
router.post('/genre/:id/update', genre_controller.genre_update_post)
// GET request to display ONE genre
router.get('/genre/:id', genre_controller.genre_detail)
// GET request to display ALL genres
router.get('/genres', genre_controller.genre_list)

// EXPORT THE ROUTER
module.exports = router