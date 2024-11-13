import mongoose from "mongoose";

export const conn = async() => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/newDataRunner");
        // console.log("data is connecting => : ", connect);
    } catch (error) {
        console.error("data is not working try again !!", error);
    }
}