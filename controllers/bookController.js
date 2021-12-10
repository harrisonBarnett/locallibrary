const Book = require('../models/book')

// THIS IS THE HOME PAGE OF THE APP
exports.index = (req, res) => {
    res.send('TODO // implement the site home page')
}

// display ALL BOOKS on GET
exports.book_list = (req, res) => {
    res.send('TODO // display ALL BOOKS')
}
// display a SINGLE BOOK DETAIL on _id on GET
exports.book_detail = (req, res) => {
    res.send('TODO // return a SINGLE BOOK DETAIL' + req.params.id) 
}
// display CREATE BOOK FORM on GET
exports.book_create_get = (req, res) => {
    res.send('TODO // display CREATE BOOK FORM')
}
// handle CREATE BOOK on POST
exports.book_create_post = (req, res) => {
    res.send('TODO // handle CREATE BOOK on backend')
}
// display DELETE BOOK FORM on GET
exports.book_delete_get = (req, res) => {
    res.send('TODO // display DELETE BOOK FORM')
}
// handle DELETE BOOK on POST
exports.book_delete_post = (req, res) => {
    res.send('TODO // handle DELETE BOOK on backend')
}
// display UPDATE BOOK FORM on GET
exports.book_update_get = (req, res) => {
    res.send('TODO // display UPDATE BOOK FORM')
}
// handle UPDATE BOOK on POST
exports.book_update_post = (req, res) => {
    res.send('TODO // handle UPDATE BOOK on backend')
}