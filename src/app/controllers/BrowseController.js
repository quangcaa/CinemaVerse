const Movie = require('../models/Movie');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class BrowseController {

    // [GET] /
    index(req, res, next) {
        Movie.find({})
            .then(movies => {
                res.render('browse', {
                    movies: mutipleMongooseToObject(movies),
                })
            })
            .catch(next)
    }


    // [GET] /search
    search(req, res) {
        res.send('FIND !');
    }

}

module.exports = new BrowseController();
