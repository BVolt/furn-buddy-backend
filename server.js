require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const connect = require('./database/dbConnect.js')
const payment = require('./routes/payment')
const products = require('./routes/products')

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())
app.use('/payment', payment)
app.use('/api/products', products)


const port = process.env.PORT || 5000

const start = async() =>{
    try{
        await connect(process.env.MONGO)
        app.listen(port, ()=>{
            console.log(`listening on port ${port}...`)
        })
    }catch(err){
        console.log(err)
    }
}

start()