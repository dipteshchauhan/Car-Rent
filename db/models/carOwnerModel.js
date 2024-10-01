const mongoose=require("mongoose");

const carOwnerSchema=mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    carNumber:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"owner"
    }
});

const CarOwnerRegi = mongoose.model("carOwner",carOwnerSchema);
module.exports=CarOwnerRegi;