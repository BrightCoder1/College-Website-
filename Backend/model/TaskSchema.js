import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    createtime: {
        type: Date,
        default: Date.now
    }
});


const Task = mongoose.model("Task", TaskSchema);
export default Task;