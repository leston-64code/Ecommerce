const jwt=require("jsonwebtoken")

const generateRefreshToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"60"})
}

module.exports=generateRefreshToken