const Book = require('../models/book')
const Author = require('../models/author')
const Genre = require('../models/genre')
const BookInstance = require('../models/bookinstance')

const async = require('async')

// THIS IS THE HOME PAGE OF THE APP
exports.index = (req, res) => {
        async.parallel({
            book_count: function(callback) {
                Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
            },
            book_instance_count: function(callback) {
                BookInstance.countDocuments({}, callback);
            },
            book_instance_available_count: function(callback) {
                BookInstance.countDocuments({status:'Available'}, callback);
            },
            author_count: function(callback) {
                Author.countDocuments({}, callback);
            },
            genre_count: function(callback) {
                Genre.countDocuments({}, callback);
            }
        }, function(err, results) {
            res.render('index', { title: 'Local Library Home', error: err, data: results });
        });
}

// display ALL BOOKS on GET
exports.book_list = (req, res) => {
    
    Book.find({}, 'title author')
        .sort({title: 1})
        .populate('author')
        .exec(function(err, list_books) {
            if(err) {return next(err)}
            res.render('book_list', {title: 'Book List', book_list: list_books})
        })

}
// display a SINGLE BOOK DETAIL on _id on GET
exports.book_detail = (req, res) => {

    async.parallel({
        book: callback => {
            Book.findById(req.params.id)
                .populate('author')
                .populate('genre')
                .exec(callback)
        },
        book_instance: callback => {
            BookInstance.find({'book': req.params.id})
                .exec(callback)
        }
    }, function(err, results) {
        if(err) {return next(err)}
        if(results.book == null) {
            var err = new Error('Book not found :(')
            err.status(404)
            return next(err)
        }
        res.render('book_detail', {title: results.book.title, book: results.book, book_instances: results.book_instance})
    })

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