import { Request, Response } from 'express';
import {Movie} from '../Model/Movie.schema';

export const Movie_Create = async (req:Request,res:Response) =>
{
    let Movie_create= await Movie.create(req.body)
    res.status(201).send(Movie_create)
}    
export const Movie_Update = async (req:Request,res:Response) =>
{
    let {id} = req.params
    let Movie_update:any = await Movie.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).send(Movie_update)              
}
export const Movie_Delete = async (req:Request,res:Response) =>
{
    let {id} = req.params
    let Movie_delete = await Movie.findByIdAndDelete(id)
    res.status(200).send({message:"Movie deleted",Movie_delete})
}

export const Movie_Rating= async (req:Request,res:Response) =>
{
    let { id } = req.params;
    if (id) 
    {
        let Movie_Data:any = await Movie.findById(id)
        Movie_Data.ratings.push({ value: req.body.rating });
        await Movie_Data.save();
        res.send(Movie_Data)
    }
    else {
        res.send({ error: "movie not found" })
    }    
}    

export const Movie_Comment = async (req:Request,res:Response) =>
{
    const { id } = req.params;
    const { text } = req.body;
    const Movie_comment = await Movie.findById(id);
  
    if (!Movie_comment) {
      return res.status(404).json({ error: "Movie not found" });
    }
    Movie_comment.comments.push({ text });
    await Movie_comment.save();
  
    res.send(Movie_comment);
}    

export const Movie_Filter = async (req:Request,res:Response) =>
{
    let {title,addedBy,releaseDate,category} = req.query
    
    const Find_Filter:any = {}
    
    let Find_Data = await Movie.find(Find_Filter)

    if(title)
     {
        Find_Filter.title = title
     }
    if(addedBy)
    {
        Find_Filter.addedBy = addedBy
    }
    if(releaseDate)
    {
        Find_Filter.releaseDate = releaseDate
    }
    if(category)
    {
        Find_Filter.category = category
    }
    if(!Find_Data)
    {
        res.status(404).send("Not Found")
    }    
    res.send(Find_Data)           
}    
