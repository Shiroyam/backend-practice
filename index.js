import express from "express";
import mongoose from "mongoose";

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.lwikw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();

app.get('/', (req, res) => {
    res.status(200).json("Hello world!")
})

async function startApp (){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=> console.log("server working" + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()

