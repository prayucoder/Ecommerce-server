
import mongoose from "mongoose";


export const Connection = async (username, password) =>{    
    const URI = `mongodb+srv://${username}:${password}@ecommerce-web.wdk5xyt.mongodb.net/?retryWrites=true&w=majority`;

    try{
       await mongoose.connect(URI);
       console.log("database connected successfully");
    } catch(error){
        console.log("Error ehile connecting with the database", error.message)
    }
}

export default Connection;