const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')

const app = express()
const port = 5000

// handle form from user
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs'
    }),
);
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Static files (public)
app.use(express.static(path.join(__dirname, 'public')))

// Connect to db
db.connect();

// Routes init
route(app)

// Port
app.listen(port, () => { console.log(`Server started on port ${port}`)})
