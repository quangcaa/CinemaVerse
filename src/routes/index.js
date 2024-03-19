const browseRouter = require('./browse')

function route(app) {
    app.use('/', browseRouter)
}

module.exports = route
