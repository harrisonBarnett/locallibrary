const async = require('async')
const Author = require('../models/author')
const Book = require('../models/book')

// display ALL AUTHORS on GET
exports.author_list = (req, res) => {
    
    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function(err, list_authors){
            if(err) {return next(err)}
            res.render('author_list', {title: 'Author List', author_list: list_authors})
        })
}

// display a SINGLE AUTHOR DETAIL based on author _id on GET
exports.author_detail = (req, res, next) => {

    async.parallel({
        author: callback => {
            Author.findById(req.params.id) 
                .exec(callback)
        },
        authors_books: callback => {
            Book.find({'author': req.params.id}, 'title summary')
                .exec(callback)
        }
    }, function(err, results) {
        if(err) {return next(err)}
        if(results.author == null) {
            var err = new Error('Author not found :(')
            err.status(404)
            return next(err)
        }
        res.render('author_detail', {title: 'Author Detail', author: results.author, author_books: results.authors_books})
    })

}

// display the CREATE AUTHOR FORM on GET
exports.author_create_get = (req, res) => {
    res.send('TODO // return a CREATE AUTHOR FORM')
}

// handle CREATE AUTHOR on POST
exports.author_create_post = (req, res) => {
    res.send('TODO // handle CREATE AUTHOR on the backend')
}

// display DELETE AUTHOR FORM on GET
exports.author_delete_get = (req, res) => {
    res.send('TODO // display DELETE AUTHOR FORM')
}

// handle DELETE AUTHOR on POST
exports.author_delete_post = (req, res) => {
    res.send('TODO // handle DELETE AUTHOR on the backend')
}

// display UPDATE AUTHOR on GET
exports.author_update_get = (req, res) => {
    res.send('TODO // display UPDATE AUTHOR FORM')
}

// handle UPDATE AUTHOR on POST 
exports.author_update_post = (req, res) => {
    res.send('TODO // handle UPDATE AUTHOR on the backend')
}