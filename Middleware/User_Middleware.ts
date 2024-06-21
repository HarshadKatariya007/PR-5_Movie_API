import { NextFunction, Request, Response} from "express";

export const User_Check = (req:Request,res:Response,next:NextFunction) =>
{
    const {username,email,password} = req.body

    if(!username || !email || !password)
        {
            res.status(400).send({error: "all fields are required"})
        }
    else
    {
        next()
    }    
}    

