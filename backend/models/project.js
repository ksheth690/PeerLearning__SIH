const mongoose = require('mongoose');
module.exports = mongoose.model('project',new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    problemstatement:{
        required: true,
        type: String
    },
    description:{
        required: true,
        type: String
    },
    projecttype:{
        required: true,
        type: String
    },
    member:[
        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: true
            },
            isleader:{
                required: true,
                type: Boolean,
                default:false
            },
            // role:{
            //     required: true,
            //     type: String
            // }
        }
    ],
    institutename:{
        required: true,
        type: String
    },
    rating:{
        required: true,
        type: Number,
        default: 0
    },
    projectdomain:[
        {
            domainname:{
                required: true,
                type: String
            },
            opening:{
                required: true,
                type:Boolean
            },
            member:[
                {
                    required:false,
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user",
                }
            ]
        }
    ],
    mentor:{
        required:false,
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    progress:{
        required: true,
        type:Number,
        default: 0
    },
    duration:{
        required:false,
        type: Number,
    },
    opening:{
        required:true,
        type:Boolean,
    },
    noofopenings:{
        required:false,
        type:Number,
    },
    verified:{
        required:true,
        type:Boolean
    },
    documentation:[
        {
            name:{
                required:false,
                type: String
            },
            file:{
                required:false,
                data: Buffer,
                contentType: String
            }
        }
    ],
    images:[
        {
            name:{
                required:false,
                type: String
            },
            file:{
                required:true,
                data: Buffer,
                contentType: String
            }
        }
    ]
}))