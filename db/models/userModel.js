const mongoose=require('mongoose');
require('dotenv').config();
const userSchema=mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    }
});

// userSchema.methods.generateUserAuthToken = function () {
//     const token = jwt.sign({ _id: this._id }, process.env.userAuthToken, {
//         expiresIn: "10min",
//     });
//     return token;
// };

const userRegi=mongoose.model("user",userSchema);
module.exports=userRegi;