import {AppError} from "../utils/AppError";
import User from "../models/user.model";
import otpGenerator from "otp-generator";
import axios from "axios";
import mailTemplate from "../templates/mail.template";
import {Otp} from "../models/otp.model";

interface IUserData {
    
    email : string;
}

export const sendEmailService = async(data : IUserData) => {
    const {  email } = data;

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

             const mailData = {
                email : email,
                subject : "OTP for verification",
                body : mailTemplate.replace("{{OTP}}", newOtp),
                from : "Server@example.com"
             }

             try {
                await axios.post("http://localhost:5001/api/v1/send-mail", mailData);
             } catch (error: any) {
                const message = error.response?.data?.message || error.message || "Failed to send email";
                throw new AppError(message, error.response?.status || 502);
             }

        return otpDoc;
}