const Product = require('./models/product')
const products = require('./products.json')
const connect = require('./database/dbConnect')
require('dotenv').config()

const populate = async () => {
    try{
        await connect(process.env.MONGO)
        await Product.deleteMany()
        await Product.create(products)
        process.exit(0)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

populate()
