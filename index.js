import express, { json } from "express";
import { conn } from "./connections/Connection.js";
import { data, deleteData, updateData } from "./controllers/UsersData.js";
 
conn();

const app = express();

app.use(json());

app.get("/", (req, res) => {
    res.send("connection working sucacefully");
})

app.post("/add", data)

app.patch("/updt", updateData)

app.delete("/del", deleteData);


app.listen(3000, () => {
    console.log("server working localhost 3000");
})