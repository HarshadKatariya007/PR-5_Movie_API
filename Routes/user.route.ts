import Router from 'express';
import { Get_All_User, User_Delete, User_Login, User_Signup } from '../Controller/User_Controller';
import { User_Check } from '../Middleware/User_Middleware';

export const User_Route = Router()

User_Route.get("/user",Get_All_User)
User_Route.post("/signup",User_Check,User_Signup)
User_Route.post("/login",User_Login)
User_Route.delete("/delete/:id",User_Delete)