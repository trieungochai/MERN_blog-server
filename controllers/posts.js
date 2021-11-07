import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    // the data sent from client
    const newPost = req.body;

    // Receive the data sent from client
    const post = new PostModel(newPost);
    await post.save();
    
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
