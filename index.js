import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routess/myroute.js";
import cors from "cors";
const app=express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000
const MONGOURL =process.env.MONGO_URL

mongoose
    .connect(MONGOURL)
    .then(()=>{
        console.log("mongodb connected")
        app.listen(PORT,()=>{
            console.log(`listeing to port ${PORT}`)
        })
    })
    .catch((err)=>console.log(err))

app.use('/api/routes',router);