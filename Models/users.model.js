const mongoose=require('mongoose')
const usersSchema=new mongoose.Schema({
    userId:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    preferences:{
        inApp:{type:Boolean, default:true},
        email:{type:Boolean, default:true},
        sms:{type:Boolean,default:false}
    }
})


const userModel=mongoose.model("userData",usersSchema)

module.exports=userModel