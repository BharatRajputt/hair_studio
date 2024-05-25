import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

     userName:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true

     },

     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
     },
     
     otp:{
        type:String,
        required:true,
     },

     gender:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:[true,"Password is required"],


     },
     confirmPassword:{
        type:String,
        required:[true,"Confirm Password is required"]

     }

},{timestamps:true})


userSchema.pre("save",  async function (next) {

    if(! this.isModified("password")) return next()

    
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect =  async  function(password){
  return await bcrypt.compare(password, this.password)
}


userSchema.methods.generateAccessToken= function(){
   return jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIN:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullName:this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIN:process.env.ACCESS_TOKEN_EXPIRY
        }
    )

}



export const User = mongoose.model("User",userSchema)