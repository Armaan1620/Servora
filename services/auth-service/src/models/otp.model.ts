import mongoose from "mongoose";

export interface IOtp {
    email : string;
    otp : string;
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
    }
})

export const Otp = mongoose.model<IOtp>("Otp", otpSchema);