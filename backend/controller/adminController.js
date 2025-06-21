import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "Missing credentials" });
    }

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Incorrect email or password" });
    }

    let admin = await User.findOne({ email }); 

    if (!admin) {
      const hashedPassword = await bcrypt.hash(password, 10);
      admin = await User.create({
        userName: "Admin",
        email,
        password: hashedPassword,
        role: "admin",
      });
    }

    const adminToken = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("adminToken", adminToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "Admin logged in successfully",
    });

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const logout = async(req, res) => {
    try{
        res.clearCookie('adminToken');
        res.json(
            {
                success:true,
                message:"Logged Out"
            }
        )

    }catch(error){
        return res.json({success:false, message:error.message});
    }
}