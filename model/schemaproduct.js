import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productid:{
        type:String,
        required:true,
        unique:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    }
})

module.exports = mongoose.models.Product || mongoose.model('Product',productSchema)