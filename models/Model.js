import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        unique: true,
        require: true
    },
    name: String,
    phone: Number
})

export const Mode = new mongoose.model("Mode", userSchema);