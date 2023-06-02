const express = require('express');
const {UserModel}  =require('../model/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Redis = require("ioredis");
const {client} = require("../config/redis")
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
userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const userExist = await UserModel.findOne({email})
        if(!userExist){
            res.status(400).send({msg:"User doesnot exist, please register"})
        }
        const isPassword = await bcrypt.compare(password,userExist.password)
        if(!isPassword){
            res.status(400).send({msg:"Wrong password"})
        }
        console.log(userExist.name)
        const token = jwt.sign({userid:userExist._id,role:userExist.name},process.env.JWT_ACCESS_TOKEN,{expiresIn:"1h"})
        const refreshToken = jwt.sign({userid:userExist._id,role:userExist.name},process.env.JWT_REFRESh_TOKEN,{expiresIn:"7d"})

        client.mset("token",token,'EX',60)
        client.mset("refreshToken",refreshToken,'EX',180)
        res.status(200).send({msg:"Login Successful",token,refreshToken})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

userRouter.get("/logout",(req,res)=>{
   client.get("token").then((result) => {
        console.log(result); // Prints "value"
        const decoded = jwt.verify(result,process.env.JWT_ACCESS_TOKEN)
   
    
        if(!decoded){
              res.status(400).send({"msg":"Access not granted"})
        }
        client.mset("blackList",decoded.userid)
        res.status(200).send("Logged Out")
      });
})

module.exports = {userRouter}
