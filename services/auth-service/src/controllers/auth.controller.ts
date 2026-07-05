import express , { Request, Response } from "express";
import IUser from "../models/user.model";
import { AppError } from "../utils/AppError";
import { sendEmailService } from "../services/otp.service";
import { ApiResponse } from "../types/apiResponse.types";

export const sendEmailController = async (req: Request, res: Response) => {

    try{
        // fetch data
        const { fullname, email, password , role , confirmPassword } = req.body;

        //validation
        if(!fullname || !email || !password || !role || !confirmPassword){

            throw new AppError("All fields are required", 400);
        }

        if(password !== confirmPassword){
            throw new AppError("Passwords do not match", 400);
        }

        if(password.length < 8){
            throw new AppError("Password must be at least 8 characters long", 422);
        }

        const validRoles = ["User", "Worker", "Admin"] as const;
        const normalizedRole = validRoles.find(
            (r) => r.toLowerCase() === role.toLowerCase()
        );

        if(!normalizedRole){
            throw new AppError("Role must be one of: User, Worker, Admin", 400);
        }

        //service call

        const newOtp = await sendEmailService({ email});

        res.status(201).json({
            success: true,
            message: "OTP sent successfully",
            data: newOtp,
        } as ApiResponse<typeof newOtp>)
    }
    catch(error : any){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                message : error.message,
            });
        }
        return res.status(500).json({
            success: false,
            message : "Internal server error",
        });
    }
}

export const signupController = async (req: Request, res: Response) => {

    try{
        // fetch data
        const { fullname, email, password , role , confirmPassword  , otp} = req.body;

        //validation
        if(!fullname || !email || !password || !role || !confirmPassword || !otp){
            throw new AppError("All fields are required", 400);
        }

        if(password !== confirmPassword){
            throw new AppError("Passwords do not match", 400);
        }
        if(password.length < 8){
            throw new AppError("Password must be at least 8 characters long", 422);
        }
        if(role !== "User" && role !== "Worker" && role !== "Admin"){
            throw new AppError("Role must be one of: User, Worker, Admin", 400);
        }


        if(!otp){
            throw new AppError("OTP is required", 400);
        }
        if(otp.length !== 6){
            throw new AppError("OTP must be 6 digits", 400);
        }

        // call signUp Service


    }
    catch(error : any){

    }
}
