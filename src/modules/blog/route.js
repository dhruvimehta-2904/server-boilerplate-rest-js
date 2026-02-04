const express = require('express');
const router = express.Router();

const blogController = require("../blog/controller/blogController")
const updateBlogs = require("../blog/controller/updateController")
const authenticate = require('../../middlewares/authenticate');
const deleteBlogs = require("../blog/controller/deleteController")

router.post("/create", authenticate, blogController.createBlog)
router.get("/get_all", authenticate, blogController.get_all)
router.patch("/updateBlogs/:id", authenticate, updateBlogs.updateBlogs)
router.delete("/deleteBlogs/:id", deleteBlogs.deleteBlogs)
router.get("/get_all_by_id/:id", blogController.get_all_by_id)

module.exports = router;