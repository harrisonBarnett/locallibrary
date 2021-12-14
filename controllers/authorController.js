const async = require('async')
const Author = require('../models/author')
const Book = require('../models/book')

const { body, validationResult } = require('express-validator')

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
    res.render('author_form' , {title: 'Create Author'})
}

// handle CREATE AUTHOR on POST
exports.author_create_post = [
    // validate/sanitize
    body('first_name').trim().isLength({min: 1}).escape().withMessage('First name required')
        .isAlphanumeric().withMessage('First name has non-alphanumeric characters'),
    body('family_name').trim().isLength({min: 1}).escape().withMessage('Last name required')
        .isAlphanumeric().withMessage('Last name has non-alphanumeric characters'),
    body('date_of_birth', 'Invalid date of birth').optional({ checkFalsy: true}).isISO8601().toDate(),
    body('date_of_death', 'Invalid date of death').optional({ checkFalsy: true}).isISO8601().toDate(),

    // process req
    (req, res, next) => {
        // extract errors
        const errors = validationResult(req)

        if(!errors.isEmpty) {
            // data is invalid
            res.render('author_form', {title: 'Create Author', author: req.body, errors: errors.array()})
            return
        } else {
            // data is valid, create author object
            var author = new Author (
                {
                    first_name: req.body.first_name,
                    family_name: req.body.family_name,
                    date_of_birth: req.body.date_of_birth,
                    date_of_death: req.body.date_of_death
                })
            author.save(function(err) {
                if(err) {return next(err)}
                // successful -- save to db
                res.redirect(author.url)
            })
        }
    }
]

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