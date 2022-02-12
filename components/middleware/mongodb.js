import mongoose from "mongoose";
import MONGODB_URL from "../config/keys"

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    return handler(req, res)
}

export default connectDB;