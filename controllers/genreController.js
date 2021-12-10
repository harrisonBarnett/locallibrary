const Genre = require('../models/genre')

// display ALL GENRES on GET
exports.genre_list = (req, res) => {
    res.send('TODO // display ALL GENRES')
}
// display SINGLE GENRE DETAIL on _id on GET
exports.genre_detail = (req, res) => {
    res.send('TODO // display SINGLE GENRE DETAIL' + req.params.id) 
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