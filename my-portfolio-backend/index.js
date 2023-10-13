import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
mongoose
      .connect(process.env.MONGO)
      .then( ()=>{
        console.log("data base is connected");
      })
      .catch((err) =>{
        console.log(err);
      })
const PORT = process.env.PORT || 8600;
const app = express();
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})