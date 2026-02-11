const Blog = require("../../../schema/blog.model");
const asyncHandler = require("../../../utils/async-handler");
const ApiResponse = require("../../../utils/response");
const mongoose = require("mongoose");


module.exports.createBlog = async(req,res)=>{
    try {
        const userId = req.user._id
        const {title, content, tags, category, isPublished, views, status} = req.body;

        const blog = await Blog.create({
            title, content, author:userId, tags, category, isPublished, views, status
        })
       
console.log(blog);

        res.status(201).json({sucess:true, message:"inserted blog", blog:{title:blog.title}})
        console.log(res)

    } catch (error) {
        res.status(400).json({sucess:false})
    }
}

// module.exports.get_all = async(req,res)=>{
//     try {
//         const userId  = req.user._id
//     // const {title, content, tags, category, isPublished, views, status} = req.body;

//     const blog = await Blog.find({author:userId})
//         res.status(200).json({sucess:true, message:"all blogs", blog:blog})
        
//     } catch (error) {
//         res.status(400).json({sucess:false})
//     }
// }

module.exports.get_all = asyncHandler(async(req,res)=>{
    const userId = req.user._id
    console.log(userId);
    
    const user = await Blog.aggregate([
        {
            $match:{
                author:userId
            }
        }
    ])
     res.status(200).json({sucess:true, message:"all blogs", user})
})

module.exports.get_all_by_id = async(req,res)=>{
    try {
        // const id = req.user.id
        const authorId = new mongoose.Types.ObjectId(req.params.id) 
console.log(authorId);

        // const data = req.body
        // const blog = await Blog.find({author:authorId})

const blog = await Blog.aggregate([
    {
        $match:{
            author: authorId
        }
    }
])
console.log(blog);


        res.status(200).json({
            blog,
            message: "blogs",
            statusCode: 200
        })

    } catch (error) {
    console.error("ERROR:", error); 
    res.status(500).json({
        success: false,
        message: error.message
    });
}
}




// const Blog = require("../../../schema/blog.model")
// const ApiResponse = require("../../../utils/response");

// module.exports.createBlog = async(req,res)=>{
//     try {
//         const userId = req.user._id
//         const {title, content, tags, category, isPublished, views, status} = req.body;

//         const blog = await Blog.create({
//             title, content, author:userId, tags, category, isPublished, views, status
//         })
       
//         return ApiResponse.created(res, blog, 'Product created successfully');
//     } catch (error) {
//         res.status(400).json({sucess:false})
//     }
// }