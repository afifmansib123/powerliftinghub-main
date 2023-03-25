import connect from "../../../lib/mongodb"
import Product from '../../../model/schemaproduct'

connect()

export default async function handler(req,res){

    try{
        const product = await Product.create(req.body)
        res.redirect('/')
        if(!product){
            return res.json({"code" : "user not created"})
        }
    }catch(error){
        res.status(400).json({status:'Not able to create a new user.'})
    }
}
