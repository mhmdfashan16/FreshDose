import cloudinary from "../config/cloudinary.js";
import Doctors from "../models/Doctors.js";
import Tablets from "../models/Tablets.js";


export const addDoctor = async(req, res) => {
    try{
        const doctorData = JSON.parse(req.body.doctorData);
        const photo = req.file;

        if(!photo){
            return res.json({success:false, message:"photo is required"})
        }
        // console.log(doctorData)

      const result = await cloudinary.uploader.upload(photo.path, {
        resource_type: 'image',
        });
        const imageURL = result.secure_url;

        const doctor = await Doctors.create({
            ...doctorData,
            photo:imageURL
        });

        res.json({
            success:true,
            message:"Doctor data added successfully",
            doctor
        })

    }catch(error){
        return res.json({
            success:false,
            message:error.message
        })
    }
}

export const removeDoctor =async (req, res) => {
    try{
        const {doctorId} = req.body;
        if(!doctorId){
            return res.jdon({
                success:false,
                message:"Incorrect Input"
            })
        }
        const deleteDoctor = await Doctors.findByIdAndDelete(doctorId);
        if(!deleteDoctor){
            return res.json({
                success:false,
                message:"Doctor doesn't exist"
            });
        }
        res.json({
            success:true,
            message:"Doctor deleted",
            
        })

    }catch(error){

    }
}

export const allDoctors = async (req, res) => {
    try{
        const doctors = await Doctors.find();
        if(!doctors){
            return res.json({
                success:false,
                message:"No tablets exist"
            });

        }
        res.json({
            success:true,
            doctors
        })
    }catch(error){

    }
}