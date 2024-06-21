import mongoose from 'mongoose';

const User_schema = new mongoose.Schema
({
    username:String,
    email:String,
    password:String
})

export const User = mongoose.model("User",User_schema)