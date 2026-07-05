import app from "./app";
import dbConnect from "./config/db.config";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4001;

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Auth service is running on port ${PORT}`);
    });
});

