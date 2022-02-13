const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    desc: {
        type: String
    } ,
    price: {
        type: Number
    },
    category: {
        type: String
    }
})

module.exports = mongoose.model('Product', ProductSchema)
