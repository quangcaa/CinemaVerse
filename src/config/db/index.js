const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://localhost:27017/CinemaVerse', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected ...');
    } catch (error) {
        console.log('Connect failure !!!');
    }
}

module.exports = { connect };
