const BookInstance = require('../models/bookinstance')

// display ALL BOOK INSTANCES on GET
exports.bookinstance_list = (req, res) => {
    res.send('TODO // return ALL BOOK INSTANCES')
}

// display a SINGLE BOOK INSTANCE DETAIL based on _id on GET
exports.bookinstance_detail = (req, res) => {
    res.send('TODO // return a SINGLE BOOK INSTANCE DETAIL' + req.params.id)
}

// display CREATE BOOK INSTANCE FORM on GET
exports.bookinstance_create_get = (req, res) => {
    res.send('TODO // display CREATE BOOK INSTANCE FORM')
}

// handle CREATE BOOK INSTANCE on POST
exports.bookinstance_create_post = (req, res) => {
    res.send('TODO // handle CREATE BOOK INSTANCE on backend')
}

// display DELETE BOOK INSTANCE FORM on GET
exports.bookinstance_delete_get = (req, res) => {
    res.send('TODO // display DELETE BOOK INSTANCE FORM')
}

// handle DELETE BOOK INSATNCE on POST
exports.bookinstance_delete_post = (req, res) => {
    res.send('TODO // handle DELETE BOOK INSTANCE on backend')
}

// display UPDATE BOOK INSTANCE FORM on GET
exports.bookinstance_update_get = (req, res) => {
    res.send('TODO // display UPDATE BOOK INSTANCE FORM')
}

// handle UPDATE BOOK INSTANCE on POST
exports.bookinstance_update_post = (req, res) => {
    res.send('TODO // handle UPDATE BOOK INTSTANCE on backend')
}