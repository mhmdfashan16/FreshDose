import mongoose from "mongoose"


const connection = async()=>{
    try{
        mongoose.connection.on('connected', ()=>console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/FreshDose`)
    }catch(error){
        console.log(error.message)
    }
}

export default connection;