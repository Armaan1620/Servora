import { Otp } from "../models/otp.model";
import User from "../models/user.model";
import { AppError } from "../utils/AppError";

interface IUserData {
    fullname : string;
    email : string;
    password : string;
    role : "User" | "Worker" | "Admin";
    otp : string;
}
export const signUpService = async(data : IUserData) => {
    //fetch data
    const { fullname, email, password, role, otp } = data;

    // check if user is already registered
    const isRegistered = await User.findOne({ email : email });
    if(isRegistered){
        throw new AppError("User already exists",409);
    }

    //latest otp
    const latestOtp = await Otp.findOne({ email : email }).sort({ createdAt: -1 });

    if(!latestOtp){
        throw new AppError("OTP not found",404);
    }

    if(latestOtp.otp !== otp){
        throw new AppError("Invalid OTP",400);
    }

    //create user
    const newUser = await User.create({ fullname, email, password, role });
    return newUser;
}