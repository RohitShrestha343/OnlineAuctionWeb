const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const Schema=mongoose.Schema;
 
const userSchema=new Schema(
    {
        first_name:{
            type:String
            //required:true
        },
        last_name:{
            type:String
            //required:true

        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        
        },
        profile_image:{
            type:String
        },
        tokens:{
            type:String
        }
    }
);
userSchema.statics.checkCrediantialsDb = async (user, password) => {
    const user1 = await User.findOne({ email: user, password: password });
    if (user1) {
      return user1;
    }
  };

const User = mongoose.model("User", userSchema);
module.exports = User;