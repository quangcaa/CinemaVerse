const express = require('express')
const router = express.Router()

const browseController = require('../app/controllers/BrowseController')

router.get('/search', browseController.search)
router.get('/', browseController.index)

module.exports = router
