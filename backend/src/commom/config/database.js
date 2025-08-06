import mongoose from "mongoose";
import { DATABASE_URL } from "../constant/app.constant.js";

export const database = async () =>{
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Connection successfully")
    }catch(error){
        console.log("Error: ", error)
    }
}