const mongoose = require('mongoose')

const Schema = mongoose.Schema

// book schema
const BookSchema = new Schema(
    {
        title: {type: String, required: true},
        // links the author field to the 'Author' model object with the
        // corresponding _id
        author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
        summary: {type: String, required: true},
        isbn: {type: String, required: true},
        // links the genre field to the 'Genre' model object
        genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    }
)

// book URL virtual
BookSchema.virtual('url').get(function(){
    return '/catalog/book/' + this._id
})

// export an instantiated 'Book' model
module.exports = mongoose.model('Book', BookSchema)