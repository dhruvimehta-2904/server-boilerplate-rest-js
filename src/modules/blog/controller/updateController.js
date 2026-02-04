const Blog = require("../../../schema/blog.model")
const ApiResponse = require("../../../utils/response");
const asyncHandler = require("../../../utils/async-handler")

module.exports.updateBlogs = asyncHandler(async(req,res)=>{
       const id = req.params.id
        const data = req.body;

        const update = await Blog.findByIdAndUpdate(id, data, {new:true}

            )
        res.json({success:true, message:"update Succesfully", update:update})
})