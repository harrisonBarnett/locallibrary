const mongoose = require('mongoose')

const Schema = mongoose.Schema

// genre schema
const GenreSchema = new Schema(
    {
        name: {type: String, required: true, minLength: 3, maxLength: 100}
    }
)

// genre URL virtual
GenreSchema.virtual('url').get(()=>{
    return '/catalog/genre/' + this._id
})

module.exports = mongoose.model('Genre', GenreSchema)