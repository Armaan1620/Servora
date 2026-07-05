import express , {Request, Response} from "express";
import AppError from "../utils/appError";
import { ApiResponse } from "../types/apiResponse";
import sendMailService from "../services/mail.service";

export interface IMailData{
    email : string;
    subject : string;
    body : string;
    from : string;
}

export const sendMailController = async (req: Request, res: Response) => {
        try{
            //fetch data
            const {email, subject, body, from} = req.body;

            //validation
            if(!email || !subject || !body || !from){
                throw new AppError("All fields are required", 400);
            }
            
            //mail service call

            const mailSent = await sendMailService({email, subject, body, from});
            res.status(200).json({
                success: true,
                message: "Email sent successfully",
            } as ApiResponse<null>)
        }
        catch(error : any){
            console.log(error);
            res.status(error.statusCode || 500).json({
                success: false, 
                message: error.message || "Internal server error",
            })
        }
}
