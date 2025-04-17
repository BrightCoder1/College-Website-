import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    notice: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    }
})


const Notice = mongoose.model("Notice", NoticeSchema);

export default Notice;