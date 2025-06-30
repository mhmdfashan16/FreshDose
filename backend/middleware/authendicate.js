import jwt from 'jsonwebtoken'


export const authendicate =(req, res, next)=>{
    try{
        const token = req.cookies.adminToken || req.cookies.userToken;
        if(!token){
            return res.json({success:false, message:"there is no token available"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    }catch(error){
        return res.json({success:false, message:error.message})
    }
}

export const adminAuth = (req, res, next)=>{
    try{
        const token = req.cookies.adminToken;
        if(!token){
            return res.json({success:false, message:"there is no token available"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       
        if(decoded.role !== "admin"){
            return res.json({success:false, message:"Access denied, this is only for admin usage"});
        }
        req.user = decoded;

        next();
        return res.json({
            success:true,
            message:"Admin Authendicated",

        })
        
    }catch(error){
        return res.json({success:false, message:error.message})
    }

}
