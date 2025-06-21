import mongoose, { model } from "mongoose";

const tabletSchema = new mongoose.Schema({
    name:{type:String, required:true},
    brand:{type:String, required:true},
    use: {type:String, required:true},
    strength:{type:String, required:true},
    price: {type:Number},
    description: {type:String},
    category: {type:String, required:true},
    images: {type:Array, required:true},

});

export default model('Tablet', tabletSchema);