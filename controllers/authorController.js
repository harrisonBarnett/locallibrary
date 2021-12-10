const Author = require('../models/author')

// display ALL AUTHORS on GET
exports.author_list = (req, res) => {
    res.send('TODO // return ALL AUTHORS')
}

// display a SINGLE AUTHOR DETAIL based on author _id on GET
exports.author_detail = (req, res) => {
    res.send('TODO // return a SINGLE AUTHOR DETAIL' + req.params.id)
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