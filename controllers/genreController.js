const Genre = require('../models/genre')
const Book = require('../models/book')
const async = require('async')

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
    res.send('TODO // display CREATE GENRE FORM')
}
// handle CREATE GENRE on POST
exports.genre_create_post = (req, res) => {
    res.send('TODO // handle CREATE GENRE on backend')
}
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