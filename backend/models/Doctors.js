import mongoose from "mongoose";


const doctorSchema = new mongoose.Schema({
    name:{type:String, required:true},
    specialization:{type:String, required:true},
    qualification:{type:String, required:true},
    experience:{type:String, required:true},
    languages:{type:String, required:true},
    location:{type:String, required:true},
    timings:{type:String, required:true},
    consultationFee:{type:Number, required:true},
    description:{type:String},
    contact:{
        phone:{type:Number, required:true},
        email:{type:String, required:true}
    },
    availableFor:{type:String, enum:["Video Consultation","General Health Advice"], required:true},
    photo:{type:String, required:true}
})

export default mongoose.model('Doctors', doctorSchema);
