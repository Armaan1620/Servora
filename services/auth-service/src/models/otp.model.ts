import mongoose from "mongoose";

export interface IOtp {
    email : string;
    otp : string;
    createdAt : Date;
}

 const otpSchema = new mongoose.Schema<IOtp>({
    email : {
        type : String ,
        required : [true, " Email is required"],
        trim : true,
        unique : true,
    },
    otp : {
        type : String ,
        required : [true, " OTP is required"],
        maxLength : 6,
    },
    createdAt : {
        type : Date,
        default : Date.now,
        expires : 5*60,
    }
})

export const Otp = mongoose.model<IOtp>("Otp", otpSchema);