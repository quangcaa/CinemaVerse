const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Genre = new Schema(
    {
        name: { type: String, required: true, unique: true }
    }
)

module.exports = mongoose.model('genres', Genre)