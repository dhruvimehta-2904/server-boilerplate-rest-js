const Blog = require("../../../schema/blog.model")
const ApiResponse = require("../../../utils/response");
const asyncHandler = require("../../../utils/async-handler")

module.exports.deleteBlogs = asyncHandler(async(req,res)=>{
    try {
        const id = req.params.id;

        const data = req.body;
        const blog = await Blog.findByIdAndDelete(id)

        if(!blog){
            res.status(400).json({message:"blog not found"})
        }

        res.status(200).json({success:true, message:"Ok", blog:blog})

    } catch (error) {
        res.status(404).json({success:false})
    }
})