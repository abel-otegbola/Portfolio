import connectDB from "../../components/middleware/mongodb"
import Message from "../../components/models/messages"

const handler = async (req, res) => {
    var message = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    message.save()
    .then(() => console.log("message recieved"))
    .catch(err => console.log(err))

    res.status(200).send(`your message has been recieved!!`)
}
export default connectDB(handler)