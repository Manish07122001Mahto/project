const express = require('express');
const {UserModel}  =require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const {name,email,password,role} = req.body
    try {
        const userEx = await UserModel.findOne({email})
        if(userEx){
            res.status(400).send({msg:"User already exist"})
        }
        const hash = bcrypt.hashSync(password,5)
        const user = new UserModel({name,email,password:hash,role})
        await user.save()
        res.status(200).send("successful")
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})
module.exports = {userRouter}
