const mongoose = require('mongoose')

require('dotenv').config()
const mongoUri = `mongodb+srv://quangcaa:${process.env.DB_PASSWORD}@quangcaa.9ftudqn.mongodb.net/cinema_verse?retryWrites=true&w=majority&appName=quangcaa`

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected ...');
    } catch (error) {
        console.log('Connect failure !!!');
    }
}

module.exports = { connect };
