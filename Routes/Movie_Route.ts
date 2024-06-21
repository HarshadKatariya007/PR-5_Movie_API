import { Router } from "express";
import { Movie_Comment, Movie_Create, Movie_Delete, Movie_Filter, Movie_Rating, Movie_Update } from "../Controller/Movie_Controller";

export const Movie_Route = Router()

Movie_Route.get("/filter",Movie_Filter)
Movie_Route.post("/create",Movie_Create)
Movie_Route.patch("/update/:id",Movie_Update)
Movie_Route.patch("/rating/:id",Movie_Rating)
Movie_Route.patch("/comment/:id",Movie_Comment)
Movie_Route.delete("/delete/:id",Movie_Delete)