
import mongoose from "mongoose";


export const Connection = async (URI) =>{    

    try{
       await mongoose.connect(URI);
       console.log("database connected successfully");
    } catch(error){
        console.log("Error ehile connecting with the database", error.message)
    }
}

export default Connection;