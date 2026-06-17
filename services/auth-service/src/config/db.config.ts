 import mongoose from "mongoose";

 const dbConnect = async () => {
    try{
        const MONGO_URI = process.env.MONGO_URI;
        
        if(!MONGO_URI){
            throw new Error("MONGO_URI is not defined in the environment variables");
        }

        await mongoose.connect(MONGO_URI).then(() => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log(err);
            process.exit(1);
        });
    }
    catch(error){
        if(error instanceof Error){
            console.log(error.message);
        }
        else{
            console.log("An unknown error occurred");
        }
        process.exit(1);
    }
 }

 export default dbConnect;