import {AppError} from "../utils/AppError";
import User from "../models/user.model";
import otpGenerator from "otp-generator";
import {Otp} from "../models/otp.model";

interface IUserData {
    fullname : string;
    email : string;
    password : string;
    role : "User" | "Worker" | "Admin";
}

export const sendEmailService = async(data : IUserData) => {
    const { fullname, email, password, role } = data;

    const isExist = await User.findOne({ email : email });

    if(isExist){
        throw new AppError("User already exists",409);
    }

    const newOtp = await otpGenerator.generate(6, 
        {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false 
        });
        
        const otpDoc = await Otp.create({ 
            email : email,
             otp : newOtp
             });

        return otpDoc;
}