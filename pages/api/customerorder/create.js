import connect from "../../../lib/mongodb"
import Item from '../../../model/customerorderschema'

connect()

export default async function handler(req,res){

    try{
        const item = await Item.create(req.body)
        res.redirect('/')
        if(!item){
            return res.json({"code" : "user not created"})
        }
    }catch(error){
        res.status(400).json({status:'Not able to create a new user.'})
    }
}
