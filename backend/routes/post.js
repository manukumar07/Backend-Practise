import express from "express";
// import Post from "../models/post.js";
const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json({ Posts: posts });
});

postRouter.get("/:id", async (req, res) => {
  const posts = await Post.find({
    _id: req.params.id,
  });
  res.json({ Posts: posts });
});

postRouter.post("/create", async (req, res) => {
  const newPost = await Post.create(req.body);
  res.json({ data: newPost });
});
postRouter.patch("/updatePost/:id", async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
  res.json({ data: updatedPost });
});
postRouter.delete("/deletePost/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.send("Post Deleted Successfully.");
});


export default postRouter;