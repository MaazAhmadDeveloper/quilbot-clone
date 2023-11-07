import mongoose from "mongoose";
import dotenv from "dotenv";

// db === bragoname1125

dotenv.config();

const userName = process.env.DB_USERNAME;
const password = process.env.DB_USERPASSWORD;

const URL = "mongodb+srv://"+userName+":"+password+"@quilbot-clone.pd9gflc.mongodb.net/?retryWrites=true&w=majority";


const dbConnection = async ()=>{
    try {
        await mongoose.connect(URL, {useUnifiedTopology: true});
        console.log("Database connected successfuly");
    } catch (error) {
        console.log("error while mongoose connection");
    }
}

export default dbConnection;