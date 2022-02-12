import connectDB from "../../components/middleware/mongodb"
import Message from "../../components/models/messages"

const handler = async (req, res) => {
    Message.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
}

export default connectDB(handler)