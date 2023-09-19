const mongoose = require('mongoose')
module.exports=mongoose.model('qualification',new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    educationalqualification:[
        {
            institutename:{
                required: true,
                type: String
            },
            institutetype:{
                required: true,
                type: String
            },
            percentage:{
                required: false,
                type: Number
            },
            cgpa:{
                required: false,
                type: Number
            }
        }
    ],
    certification:[
        {
            name:{
                required: true,
                type: String
            },
            image:{
                required: false,
                data: Buffer,
                contentType: String
            }
        }
    ],
    otherachievement:[
        {
            description:{
                required:true,
                type: String
            }
        }
    ]
}))