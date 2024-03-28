const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')

const Person = new Schema ( 
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, slug: 'name', unique: true },
    }
)

// plugin
mongoose.plugin(slug)

module.exports = mongoose.model('person', Person)