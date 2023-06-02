import connectDB from "../../components/middleware/mongodb"
import Comment, { Like } from "../../components/models/projectActions"

const handler = async (req, res) => {

    // Check if the action is a like and save it into database
    if(req.body.action === "Like") {
        let like = new Like({
            emai: req.body.email
        })
        like.save()
        .then(() =>  res.status(200).json({msg: `Liked successfully!!`}))
        .catch(err => console.log(err))
    }

    // Check if the action is comment and save into database
    else if(req.body.action === "Comment") {
        let comment = new Comment({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        })
        comment.save()
        .then(() =>  res.status(200).json({msg: `your message has been recieved!!`}))
        .catch(err => console.log(err))
    }
    else {
        res.status(400).json({ msg: "No action specified! Please, ensure the action to be made is specified" })
    }
   
}
export default connectDB(handler)