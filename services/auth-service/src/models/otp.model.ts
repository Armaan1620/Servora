import mongoose from "mongoose";

interface IOtp {
    email : string;
    otp : string;
}

const otpSchema = new mongoose.Schema({
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