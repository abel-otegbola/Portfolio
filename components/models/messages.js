const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timeStamps: true})

mongoose.models = {}

const Message = mongoose.model("message", messageSchema)

export default Message;