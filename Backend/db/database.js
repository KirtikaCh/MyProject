import mongoose from 'mongoose';
// const DBSTRING = process.env.MONGO_URI;
export const DBConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    }catch(error){
        console.log(`Error in DB ${error}`)
    }
}