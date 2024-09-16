import mongoose from "mongoose";

export const userScheema = new mongoose.Schema([
    {
        fname: String,
        required: true,
    },
    {
        lname: String,
        required: true,
    },
    {
        email: String,
        required: true,
        unique: true,
    },
    {
        message: String,
        required: true,
    }
])

export const User = mongoose("users", userScheema)