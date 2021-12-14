const { DateTime } = require('luxon')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

// the main schema for our author data
const AuthorSchema = new Schema(
    {
        first_name: {type: String, required: true, maxLength: 100},
        family_name: {type: String, required: true, maxLength: 100},
        date_of_birth: {type: Date},
        date_of_death: {type: Date}
    }
)
// // virtual schema
// allows for temporary model field/values that are not pushed to the db
// instantiating a virtual field/value called 'name' that concatenates first and last names
AuthorSchema
    .virtual('name')
    .get(function () {
    var fullName = ''
    // check for existence of both first and last names
    if(this.first_name && this.family_name) {
        fullName = this.family_name + ', ' + this.first_name
    }
    if(!this.first_name || !this.family_name) {
        fullName = ''
    }
    return fullName
})
// instantiating a virtual field/value called 'url' to create a usable URL referencing the author
AuthorSchema.virtual('url').get(function() {
    // concatenate _id to path where author info will be displayed
    return '/catalog/author/' + this._id
})
AuthorSchema.virtual('formatted_DOB').get(function() {
    return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : ''
})
AuthorSchema.virtual('formatted_DOD').get(function() {
    return this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : ''
})

// export an instantiated 'Author' model based on the schema we just designed
module.exports = mongoose.model('Author', AuthorSchema)