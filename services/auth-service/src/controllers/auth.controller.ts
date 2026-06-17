import express , { Request, Response } from "express";
import IUser from "../models/user.model";
import { AppError } from "../utils/AppError";
import { registerUser } from "../services/auth.service";
import { ApiResponse } from "../types/apiResponse.types";

const signUpController = async (req: Request, res: Response) => {

    try{
        // fetch data
        const { fullname, email, password , role} = req.body;

        //validation
        if(!fullname || !email || !password || !role){

            throw new AppError("All fields are required", 400);
        }

        if(password.length < 8){
            throw new AppError("Password must be at least 8 characters long", 422);
        }

        //service call

        const newOtp = await registerUser({fullname, email, password, role});

        res.status(201).json({
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