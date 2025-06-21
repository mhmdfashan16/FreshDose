import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.json({ success: false, message: "Missing credentials" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ userName, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("userToken", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const login =async (req, res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({success:false, message:"Missing Creadentials"});
        }
        const checkUser = await User.findOne({email});
        if(!checkUser){
            return res.json({success:false, message:"User is not exist"});
        }
        const isMatch = await bcrypt.compare(password, checkUser.password);
        if(!isMatch){
            return res.json({success:false, message:"Incorrect email or password"})
        }
        const token = jwt.sign(
            {id:checkUser._id}, 
            process.env.JWT_SECRET, 
            {expiresIn:'7d'}
        );
        res.cookie('userToken',
            token,
            {httpOnly:true, maxAge:7*24*60*60*1000}
        );
        res.json({success:true, message:"Loged in successfully", checkUser});


    }catch(error){
        return res.json({success:false, message:error.message})
    }
}


export const logout = async (req, res)=>{
    try{
        res.clearCookie('userToken');
        res.json({
            success:true,
            message:"Logged Out"
        })

    }catch(error){
        return res.json({success:false, message:error.message});
    }
}
