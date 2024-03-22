const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmbeddedMovie = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        poster: {
            type: String
        },
        trailer: {
            type: String
        },
    },
)

module.exports = mongoose.model('embedded_movies', EmbeddedMovie)