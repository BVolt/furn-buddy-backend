const express = require('express')
const router = express.Router()
const {
    getAll,
    getByCategory
} = require('../controllers/products')

router.route('/').get(getAll)
router.route('/:category').get(getByCategory)

module.exports = router;