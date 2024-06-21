import express, { Request, Response } from 'express';
import dotenv from "dotenv"
import { Connect } from './Config/db';
import { User_Route } from './Routes/user.route';
import cookie from 'cookie-parser';
import { Movie_Route } from './Routes/Movie_Route';
dotenv.config()
const Movies = express()

Movies.use(express.json())
Movies.use(cookie())
Movies.use(express.urlencoded({extended:true}))
Movies.set("view engine","ejs")
Movies.set("view",__dirname + "/view")

Movies.get("/",(req:Request,res:Response) =>
{
    res.send("Welcome to the movie API")
})

Movies.use("/user",User_Route)
Movies.use("/movie",Movie_Route)
Movies.listen(process.env.PORT,() =>
{
    console.log(`Server Is Running On http://localhost:${process.env.PORT}`)
    Connect()
})