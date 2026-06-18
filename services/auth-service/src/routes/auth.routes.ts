import express from "express";
import { sendEmailController } from "../controllers/auth.controller";

const router = express.Router();

router.post("/send-email", sendEmailController);

export default router;