const mongoose = require('mongoose')

const Schema = mongoose.Schema


// // book instance schema
// contains meta information regarding the book's availability, etc
const BookInstanceSchema = new Schema(
    {
        // reference book model by _id
        book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
        imprint: {type: String, required: true}, 
        // define status as an enum to hard-code our options
        status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
        due_back: {type: Date, default: Date.now()}
    }
)

// book instance URL virtual
BookInstanceSchema.virtual('url').get(()=>{
    return '/catalog/bookinstance' + this._id
})

module.exports = mongoose.model('BookInstance', BookInstanceSchema)