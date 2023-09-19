const userData=require('../models/user')

const createUserData=(req,res)=>{
    const {firstname,lastname,mobile,email,collage,university,position} = req.body;
    // res.status(200).json("Controller is called")
    try{
        res.status(200).json(req.body)
        // console.log(req.body)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {createUserData}