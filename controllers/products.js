const Product = require('../models/product')


const getAll = async(req, res) =>{
    try{
        const products = await Product.find({})
        res.status(201).json({products})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

const getByCategory = async(req, res) =>{
    const category = req.params.category
    try{
        const products = await Product.find({category})
        res.status(201).json({products})
    }catch(err){
        res.status(500).json({msg: err})
    }
}

const getById = async(req, res) =>{
    const id = req.params.id
    try{
        const products = await Product.find({id})
        res.status(201).json({products})
    }catch(err){
        res.status(500).json({msg: err})
    }
}


module.exports = {getAll, getByCategory,getById}