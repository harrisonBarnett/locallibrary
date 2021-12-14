const Genre = require('../models/genre')
const Book = require('../models/book')
const async = require('async')

// validation and sanitation of form data
const { body, validationResult } = require('express-validator')

// display ALL GENRES on GET
exports.genre_list = (req, res) => {
    
    Genre.find()
        .sort({name: 1})
        .exec(function(err, list_genres){
            if(err) {return next(err)}
            res.render('genre_list', {title: 'Genre List', genre_list: list_genres})
        })

}
// display SINGLE GENRE DETAIL on _id on GET
exports.genre_detail = (req, res) => {
    
    async.parallel({
        genre: callback => {
            Genre.findById(req.params.id)
                .exec(callback)
        },
        genre_books: callback => {
            Book.find({'genre' : req.params.id})
                .exec(callback)
        }
    }, function(err, results) {
        if(err) {return next(err)}
        if(results.genre == null) {
            var err = new Error('Genre not found')
            err.status(404)
            return next(err)
        }
        res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books})
    })

}
// display CREATE GENRE FORM on GET
exports.genre_create_get = (req, res) => {
    res.render('genre_form', {title: 'Create Genre'})
}
// handle CREATE GENRE on POST
exports.genre_create_post = [
    // validate and sanitize name field
    body('name', 'Genre name required').trim().isLength({min: 1}).escape(),
    // process request on validation
    (req, res, next) => {
        // extract validation errors
        const errors = validationResult(req)
        // construct a genre object with sanitized data
        var genre = new Genre(
            {name: req.body.name}
        )
        // check errors
        if(!errors.isEmpty()) {
            // we have errors
            res.render('genre_form', {title: 'Create Genre', genre: genre, errors: errors.array()})
            return
        } else {
            // data is valid, no errors
            // check if genre already exists
            Genre.findOne({'name': req.body.name})
                .exec( function(err, found_genre) {
                    if(err) {return next(err)}

                    if(found_genre) {
                        // genre exists
                        res.redirect(found_genre.url)
                    } else {
                        genre.save(function (err) {
                            if(err) {return next(err)}
                            // save genre and redirect to genre page
                            res.redirect(genre.url)
                        })
                    }
                })
        }
    }

]
// display DELETE GENRE FORM on GET
exports.genre_delete_get = (req, res) => {
    res.send('TODO // display DELETE GENRE FORM')
}
// handle DELETE GENRE on POST
exports.genre_delete_post = (req, res) => {
    res.send('TODO // handle DELETE GENRE on backend')
}
// display UPDATE GENRE FORM on GET
exports.genre_update_get = (req, res) => {
    res.send('TODO // display UPDATE GENRE FORM')
}
// handle UPDATE GENRE on POST
exports.genre_update_post = (req, res) => {
    res.send('TODO // handle UPDATE GENRE on backend')
}