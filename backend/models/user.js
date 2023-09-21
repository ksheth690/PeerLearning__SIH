const mongoose = require('mongoose')
module.exports = mongoose.model("user",userSchema=new mongoose.Schema({
    firstname:{
        require:true,
        type: String
    },
    lastname:{
        require:true,
        type: String
    },
    password:{
        require:true,
        type: String
    },
    mobile:{
        require:true,
        unique:true,
        type:Number
    },
    email:{
        require:true,
        unique:true,
        type: String
    },
    socialaccount:{
            linkedin:{
                require:false,
                unique:true,
                type: String
            },
            github:{
                require:false,
                unique:true,
                type: String
            }
    },
    college:{
        require:true,
        type: String
    },
    university:{
        require:true,
        type: String
    },
    position:{
        require:true,
        type: String
    }
}));