import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const PORT = 5000;
const DB_URL =
  "mongodb+srv://user:user@cluster0.lwikw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.post("/", async (req, res) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });
    res.json(post);
  } catch (error) {
    res.status(500).json(error)
  }
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("server working" + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
