import mongoose, { model } from "mongoose";


const chatSchema = new mongoose.Schema({
    user:{type:String},
    message:{type:String},
    replay:{type:String},
    createdAt:{type:Date, default:Date.now()}
})

export default mongoose.model('Chat', chatSchema);

