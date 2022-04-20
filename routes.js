import Router from "express";
import Post from "./Post.js";

const router = new Router();

router.post("/posts", async (res, req) => {
  try {
    const { author, title, content, picture } = req.body;
    const post = await Post.create({ author, title, content, picture });
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
