import mongoose from "mongoose";

export interface IUser {
    fullname:string;
    email:string;
    password:string;
    role : "User" | "Worker" | "Admin";
}

const userSchema = new mongoose.Schema<IUser>({
    fullname:{
        type:String,
        required:[true, "Full name is required"],
        trim:true,
    },
    email:{
        type:String,
        required : [true, "Email is required"],
        unique : true,
        trim : true,
    },
    password:{
        type:String,
        required : [true, " Password is requireed"]
    },
    role:{
        type:String,
        enum : ["User", "Worker", "Admin"],
        default : "User",
    },
}, {
    timestamps: true,
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
