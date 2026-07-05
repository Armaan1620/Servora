import express , { Request, Response } from "express";
import IUser from "../models/user.model";
import { AppError } from "../utils/AppError";
import { sendEmailService } from "../services/auth.service";
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

        const newOtp = await sendEmailService({fullname, email, password, role: normalizedRole});

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