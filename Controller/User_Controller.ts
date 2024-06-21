import {User} from '../Model/User.schema'
import { Request, Response } from 'express' 
import bcrypt from 'bcrypt'

export const User_Signup = async (req:Request,res:Response) =>
{
    let {username,email,password} = req.body
    let Password = await bcrypt.hash(password,10)
    req.body.password = Password
    let User_signup = await User.create(req.body)
    res.status(201).send(User_signup)
}    

export const User_Delete = async (req:Request,res:Response) =>
{
    let {id} = req.params
    let User_delete = await User.findByIdAndDelete(id)
    res.send({message:'User deleted successfully',User_delete})
}

export const User_Login= async (req:Request,res:Response) =>
{
  let {username,password} = req.body
  let User_Find:any = await User.findOne({username:username})
 
  try {
     if(!User_Find)
      {
         res.status(401).send({error:"Invalid username or password"})    
      }
      let Password_match:any = bcrypt.compare(password,User_Find.password)
      if(!Password_match)
          {
              res.status(401).send({error:"Invalid username or password"})
          }  
     else
     {
          res.status(200).send({message:'Logged in successfully'})
     }  
  } catch (error) {
    console.log("Login SuccessFully...");
    
  } 
}

export const Get_All_User = (req:Request,res:Response) =>
{
    let All_User = User.find()
    res.status(200).send(All_User)
}    