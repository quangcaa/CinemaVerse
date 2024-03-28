const Movie = require('../models/Movie')
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')

class AdminController {
    // [GET] /admin/add
    addMovie(req, res, next) {
        res.render('admin/add')
    }

}

module.exports = new AdminController()