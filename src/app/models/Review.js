const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        review: { type: String, required: true },
        date: { type: Date, default: Date.now },
        username: { type: String, required: true },
        movie: {
            type: Schema.Types.ObjectId,
            ref: 'movies',
        },
    }
)

module.exports = monoose.model('reviews', Review)