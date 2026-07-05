import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/auth", proxy("http://localhost:4001"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app; 