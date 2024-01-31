const express = require("express");
const {
  addBlog,
  getAllBlog,
  getSingleBlog,
  searchBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");

const router = express.Router();

router.post("/add", addBlog);
router.get("/", getAllBlog);
router.get("/:id", getSingleBlog);
router.get("/search/:key", searchBlog);
router.patch("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
