import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { Request, Response } from 'express';
dotenv.config()


export const Connect:any = async (req:Request,res:Response) =>
{
    let db_url:any = process.env.DB_URL
    await mongoose.connect(db_url)
    console.log("MongoDB SuccessFully Connected...");
}    
