const express = require("express");

const {
  handleImageUpload,
  addPost,
  editPost,
  deletePost,
  fetchAllPosts,
  getPostDetails,
} = require("../../controllers/post/post-controller");

const { upload } = require("../../helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addPost);
router.put("/edit/:id", editPost);
router.delete("/delete/:id", deletePost);
router.get("/get", fetchAllPosts);
router.get("/get/:id", getPostDetails);

module.exports = router;
