const mongoose=require('mongoose');

const priceAndDocsSchema=mongoose.Schema({

    user:{

    },
    pdf:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
});

const priceAndDocsOwnerRegi=mongoose.Model();
module.exports=priceAndDocsOwnerRegi;