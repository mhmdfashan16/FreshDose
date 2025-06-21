import { timeStamp } from "console";
import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{type:String, required:true},
    email:{type:String,unique:true, required:true},
    password:{type:String, required:true},    
    role:{type:String, enum:["user", "admin"], default:"user"},
    chatHistory:[
        {
            message:{type:String},
            sender:{type:String, enum:['bot','user']},
            timeStamp:{type:String, default:Date.now}
    }
    ]
})

export default mongoose.model('User', userSchema);