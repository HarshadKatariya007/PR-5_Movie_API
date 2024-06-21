import { NextFunction, Request, Response } from "express";

export const Movie_Check = (req:Request,res:Response,next:NextFunction) =>
{
   let {title,description,releaseDate,category,actors,image,ratings,comments,addedBy} = req.body 

   if(!title || !description || !releaseDate || !category || !actors || !image || !ratings || !comments || !addedBy)
    {
        res.status(400).send({error: "all fields are required"})
    }
    else
    {
        next()
    }
}    