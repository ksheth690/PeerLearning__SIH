const express = require('express')
const router = express.Router();
const {createUserData,loginUser}=require('../controllers/user')
router.post('/signup',createUserData)
router.post('/login',loginUser)
module.exports = router