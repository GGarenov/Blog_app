const { imageUploadUtil } = require("../../helpers/cloudinary");
const Post = require("../../models/Post");

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = "data:" + req.file.mimetype + ";base64," + b64;
    const result = await imageUploadUtil(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured",
    });
  }
};

const addPost = async (req, res) => {
  try {
    const { image, title, summary, content, author, tags } = req.body;
    const newlyCreatedPost = new Post({
      image,
      title,
      summary,
      content,
      author,
      tags,
    });

    await newlyCreatedPost.save();
    res.status(201).json({
      success: true,
      data: newlyCreatedPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const fetchAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, title, summary, content, author, tags } = req.body;

    let findPost = await Post.findById(id);
    if (!findPost)
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });

    findPost.image = image || findPost.image;
    findPost.title = title || findPost.title;
    findPost.summary = summary || findPost.summary;
    findPost.content = content || findPost.content;
    findPost.author = author || findPost.author;
    findPost.tags = tags || findPost.tags;

    await findPost.save();

    res.status(200).json({
      success: true,
      data: findPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post)
      return res.status(404).json({
        success: false,
        message: "Post not found",
      });

    res.status(200).json({
      success: true,
      message: "Post deleted successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error occured",
    });
  }
};

const getPostDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post)
      return res.status(404).json({
        success: false,
        message: "Post not found!",
      });

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = {
  handleImageUpload,
  addPost,
  editPost,
  deletePost,
  fetchAllPosts,
  getPostDetails,
};
