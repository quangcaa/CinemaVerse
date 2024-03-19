class BrowseController {

    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.send('FIND !');
    }

}

module.exports = new BrowseController();
