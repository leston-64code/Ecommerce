const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

// New User Schema
let userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        index:true
    },
    lastname:{
        type:String,
        required:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    role:{
        type:String,
        default:"user"
    }
})


userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSaltSync(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

userSchema.methods.isPasswordMatched=async function(enteredPass){
    return await bcrypt.compare(enteredPass,this.password)
}

module.exports=mongoose.model("User",userSchema)