const express= require("express")
const router=express.Router();
const User=require("../models/user")
const jwt=require("jsonwebtoken")
const mongoose = require('mongoose')
const url="mongodb://l27.0.0.1:27017/userdetail";
var UsersData;
mongoose.connect(url,(err,db)=>{
    if(err){
        console.log("not connected",err)
    }
    else{
        console.log("sucess connection ")
        db.collection("users").find().toArray((err, result)=> {  
            if (err) throw err;  
            UsersData=result; 
        });  
    }
})

router.get('/getallUsers',(req,res)=>{
    console.log(UsersData);
    res.status(200).send(UsersData);
})
router.post('/register',(req,res)=>{
    let userData=req.body
    let user = new User(userData);
    user.save((err,registeredUser)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(user)
        }
    })
})
router.post("/login",(req,res)=>{
    let userData=req.body
    User.findOne({email:userData.email},(err,user)=>{
        if(err){
            console.log(err);
        }
        else{
            if(!user){
                res.status(401).send("Invalid Email");
            }
            else{
                if(user.password!==userData.password){
                    res.status(401).send("invalid password")
                }
                else{
                    res.status(200).send(user);
                }
            }
        }
    })
})

module.exports=router;
