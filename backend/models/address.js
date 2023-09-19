const mongoose = require('mongoose')
module.exports = mongoose.model('address',new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    city:{
        require:false,
        type: String
    },
    state:{
        require:true,
        type: String
    },
    country:{
        require:true,
        type: String
    },
    pin:{
        require:true,
        type:Number
    }
}))