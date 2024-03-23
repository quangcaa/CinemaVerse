const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        title: { type: String, required: true },
        genre: { type: [mongoose.Schema.Types.ObjectId], ref: 'genres', required: true },
        director: { type: [String], required: true },
        cast: { type: [String], required: true },
        contries: { type: [String] },
        duration: { type: Number },
        plot: { type: String },
        released: { type: Date },
        posterURL: { type: String },
        trailerURL: { type: String },
        mURL: { type: String, required: true },
    },
)

module.exports = mongoose.model('movies', Movie)