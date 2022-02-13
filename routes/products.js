const express = require('express')
const router = express.Router()
const {
    getAll,
    getByCategory,
    getById
} = require('../controllers/products')

router.route('/').get(getAll)
router.route('/category/:category').get(getByCategory)
router.route('/id/:id').get(getById)

module.exports = router;