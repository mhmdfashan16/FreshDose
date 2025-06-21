import { table } from "console";
import cloudinary from "../config/cloudinary.js";
import Tablets from "../models/Tablets.js";



export const addTablet = async (req, res) => {
    try{
        const tabletData = JSON.parse(req.body.tabletData);
        const images = req.files

        if(!images){
            return res.json({
                success:false,
                message:"Image is require"
            })
        }

        const imageArray = Array.isArray(images) ? images : [images];
        const imageURLs = await Promise.all(
            imageArray.map(async (img)=>{
                const result = await cloudinary.uploader.upload(img.path, {
                    resource_type: 'image',

                });
                return result.secure_url;
            })
        );

        const tablet = await Tablets.create({
            ...tabletData,
            images:imageURLs
        });

        res.json({
            success:true,
            message:"Tablet added",
            tablet
        })

    }catch(error){
        return res.json({
            success:false,
            message:error.message
        })
    }
}

export const removeTablet =async (req,res) => {
    try{
        const {tabletId} = req.body; //for postman checkup
        // const tabletId = req.params;

        const deleteTablet = await Tablets.findByIdAndDelete(tabletId);
        if(!deleteTablet){
            return res.json({
                success:false,
                message:"Tablet not found"
            })

        }
        res.json({
            success:true,
            message:"Tablet deleted"
        })


    }catch(error){
        return res.json({success:false, message:error.message})
    }
}

export const getAllTablet =async (req, res) =>{
    try{
        const tablets =await Tablets.find();
        res.json({
            success:true,
            tablets
        })

    }catch(error){
        return res.json({success:false, message:error.message});
    }
}

export const getTablet =async (req, res)=>{
    try{

        const {tabletId} = req.body;

        // console.log(tabletId);

        const findTablet = await Tablets.findOne({_id:tabletId});
        if(!findTablet){
            return res.json({
                success:false,
                message:"Tablet not found"
            })
        }
        res.json({
            success:true,
            message:findTablet
        })

    }catch(error){
        return res.json({
            success:false,
            message:error.message
        })
    }
}

export const searchTablet =async (req, res)=> {
    try{

        const {keyword} = req.body;
        const tablet = await Tablets.find({
            name:{$regex: keyword, $options:'i'},
        });
        res.json({success:true, tablet})

    }catch(error){
        return res.json({success:false, message:error.message});
    }
}