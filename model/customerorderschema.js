import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true,
        unique:true
    },
    adress:{
        type:String,
        required:true,
    },
    itemsString:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.models.Item || mongoose.model('Item',itemSchema)