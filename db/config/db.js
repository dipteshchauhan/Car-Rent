const mongoose=require("mongoose");

const connectDB=async()=>{

    try{

        await mongoose.connect('mongodb://127.0.0.1/CarRent');
        console.log("MongoDB Connected")
    }catch(error){

        console.log("MongoDB Error - ",error);
    }
};
module.exports=connectDB;