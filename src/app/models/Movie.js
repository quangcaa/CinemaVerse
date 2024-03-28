const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Episode = new Schema(
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, slug: 'name', unique: true },
        filename: { type: String },
        link_embed: { type: String },
        link_m3u8: { type: String },
    },
)

const Movie = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, slug: 'title', unique: true },
        plot: { type: String, required: true },
        type: { type: String, required: true, enum: ['Series', 'Movie'] },
        status: { type: String, required: true, enum: ['Completed', 'Ongoing'] },
        posterURL: { type: String },
        thumbURL: { type: String },
        trailerURL: { type: String },
        runtime: { type: String, required: true },
        episode_total: { type: Number, required: true },
        released: { type: Date, required: true },
        genre: { type: [mongoose.Schema.Types.ObjectId], ref: 'genres', required: true },
        director: { type: [mongoose.Schema.Types.ObjectId], ref: 'person', required: true },
        cast: { type: [mongoose.Schema.Types.ObjectId], ref: 'person', required: true },
        contries: { type: [mongoose.Schema.Types.ObjectId], ref: 'countries', required: true },
        episodes: [Episode],
    },
    {
        _id: false,
        timestamps: true,
    }
)

// plugin
mongoose.plugin(slug)
Movie.plugin(AutoIncrement)

module.exports = mongoose.model('movies', Movie)