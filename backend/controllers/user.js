const userData=require('../models/user')

const createUserData=async (req,res)=>{
    const {firstname,lastname,mobile,email,collage,university,position,password} = req.body;
    // res.status(200).json("Controller is called")
    try{
        const newuser={
            firstname:firstname,
            lastname:lastname,
            mobile:mobile,
            email:email,
            password:password,
            collage:collage,
            university:university,
            position:position
        }
        const User=new userData(newuser);
        const savedUser=await User.save();
        res.status(200).json(savedUser);
        // console.log(req.body)
    }catch(err){
        res.status(500).json(err)
    }
}

const loginUser = async (req, res)=>{
    const {email,password}=req.body;
    try{
        const existing_user=await userData.findOne({email:email});
        if(password===existing_user.password){
            res.status(200).json("user is varified")
        }else{
            res.status(200).json("Password is wrong")
        }
    }catch(err){
        res.status(500).json("err")
    }
}

module.exports = {createUserData,loginUser}