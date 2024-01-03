const express = require('express');
const router = express.Router()
const signup=require('../controller/signup')
const login=require('../controller/login')
const AuthenticatedUser=require('../controller/AuthenticatedUser')
const {protect}= require('../middleware/auth')

router.post('/signup',signup);

router.post('/login',login)

router.get('/authenticate',protect,AuthenticatedUser)
module.exports=router