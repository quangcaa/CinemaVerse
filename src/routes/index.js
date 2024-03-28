const browseRouter = require('./browse')
const adminRouter = require('./admin')


function route(app) {
    app.use('/', browseRouter)
    app.use('/admin', adminRouter)

}

module.exports = route
