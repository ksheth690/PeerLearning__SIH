const express = require('express')
const router = express.Router();
const {createUserData}=require('../controllers/user')
router.post('/',createUserData
// (req,res)=>{
//     res.status(200).json("called login");
// }
)
module.exports = router