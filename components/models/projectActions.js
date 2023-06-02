const mongoose = require("mongoose")


// A schema to give the structure of the comments data
const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {timeStamps: true})


// A schema to give the structure of the likes data
const likeSchema = mongoose.Schema({
    email: {
        type: Number,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
}, {timeStamps: true})

mongoose.models = {}

const Comment = mongoose.model("comment", commentSchema)
export const Like = mongoose.model("like", likeSchema)

export default Comment;