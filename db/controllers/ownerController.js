const { message } = require('statuses');
const CarOwnerRegi=require('../models/carOwnerModel');
const userRegi=require('../models/userModel')
const bcrypt = require('bcryptjs');
const argon2 = require('argon2');
const { stringify } = require('qs');
const multer=require('multer');
//const priceAndDocsOwnerRegi=require('../models/priceAndDocs');
//app.use(express.json());
//const User = require('../models/User');  // Check the path and model name


exports.createOwner=async(req,res)=>{
  
    try{

        const owner=new CarOwnerRegi(req.body);
        await owner.save();
        res.status(200).json(owner);
    }catch(error){
        res.status(400).json({message:error.message});
        console.log("Controller create Owner error - "+error);

    }
};


exports.getOwnerOne=async(req,res)=>{

    try{
        const ownerName =req.params.name;

        const owner=await CarOwnerRegi.findOne({name:ownerName }).select('email mobile model');
        res.status(200).json(owner);
    }catch(error){
        res.status(400).json({message:error.message});
        console.log("Controller getOwnerOne error - "+error);
    }
};

exports.getOwner=async(req,res)=>{
  
    try{

        const owners=await CarOwnerRegi.find();
        res.status(200).json(owners);
    }catch(error){
        res.status(400).json({message:error.message});
        console.log("Controller create Owner error - "+error);

    }
};

// exports.LogIn = async (req, res) => {
//     try {
//         const ownerEmail = req.body.email; 
//         //console.log(ownerEmail);
//         //const password=req.body.password;
//         //console.log("password - "+password);
//         const owner = await CarOwnerRegi.findOne({ email: ownerEmail });
//         const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is a standard number for salt rounds

//         //console.log(owner.password);
//         const isMatch = await argon2.verify( owner.password,hashedPassword);
//         console.log("Is match "+isMatch);
//         if (isMatch) {
//             res.status(200).json({ message: "Logged In" });
//             console.log("Logged in successfully");
//         } else {
//             res.status(401).json({ message: "Invalid password" });
//         }

//         // if(owner.password==password&&owner.email==ownerEmail){
//         //     res.status(200).json({message: "Logged In" })
//         //     console.log("Logged in Success Full");
//         // }
//         // if (!owner) {
//         //     return res.status(404).json({ message: "Owner not found with this email" });
//         // }
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//         console.log("Controller LogIn method error - " + error);
//     }
// };
exports.LogIn = async (req, res) => {
    try {
        const ownerEmail = req.body.email;
        const password = req.body.password; 
        const owner = await CarOwnerRegi.findOne({ email: ownerEmail });
        if (password==owner.password) {
            res.status(200).json({ message: "Logged In" });
            console.log("Logged in successfully");
        } else {
            res.status(401).json({ message: "Invalid password" });
        } 
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log("Controller LogIn method error - ", error);
    }
};