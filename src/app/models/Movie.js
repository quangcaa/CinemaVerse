const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        fullplot: {
            type: String,
        },
        poster: {
            type: String
        },
        released: {
            type: Number
        },
        genre: [String],
        director: [String],
        cast: [String],
        contries: [String],
        duration: {
            type: Number,
        },
        mURL: { 
            type: String,
            required: true,
        },
    },
)

module.exports = mongoose.model('movies', Movie)