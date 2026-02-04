const Blog = require("../../../schema/blog.model")
const ApiResponse = require("../../../utils/response");

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

module.exports.get_all = async(req,res)=>{
    try {
        const userId  = req.user._id
    // const {title, content, tags, category, isPublished, views, status} = req.body;

    const blog = await Blog.find({author:userId})
        res.status(200).json({sucess:true, message:"all blogs", blog:blog})
        
    } catch (error) {
        res.status(400).json({sucess:false})
    }
}

module.exports.get_all_by_id = async(req,res)=>{
    try {
       

        // const id = req.user.id
        const authorId = req.params.id

        const data = req.body
        const blog = await Blog.find({author:authorId})
        res.status(200).json({success:true, message:"blogs", blog:blog})

    } catch (error) {
        res.status(400).json({sucess:false})
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