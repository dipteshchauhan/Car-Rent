const { message } = require('statuses');
const userRegi=require('../models/userModel')

exports.userRegistration=async(req,res)=>{

    try{

        const user=new userRegi(req.body);
        await user.save();
        res.status(200).json(user);
    }catch(error){


        res.status(400).json({message:error.message});
        console.log(" userRegistration in controller getting error - "+error);
    }
};

exports.userLogIn=async(req,res)=>{

    try{

        const userEmail=req.body.email;
        const userPassword=req.body.password;
        const user=await userRegi.findOne({email:userEmail});
        if(userPassword==user.password){
            res.status(200).json({message:"Logged in as User"})
            console.log("Logged in as user");

        }else{
            res.status(401).json({message:message.error});
        }
    }catch(error){
        res.status(400).json({message:message.error});
        console.log("Got error in userLogIn Controller Log in method");
    }
    };