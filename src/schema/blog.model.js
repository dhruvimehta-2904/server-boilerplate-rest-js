const mongoose = require("mongoose")

const bloSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    tags:{
        type:[String],

    },
    category:{
        type:String,
        required:true,
        
    },
    isPublished:{
        type:Date,
        required:true,
    },
    views:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        enum:["draft", "published", "achived"],
        default:"draft"
    },

}, {timestamp:true})

const Blog = mongoose.model("Blog", bloSchema);
module.exports = Blog;