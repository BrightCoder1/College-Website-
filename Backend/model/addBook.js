import mongoose from "mongoose";

const LibrarySchema = new mongoose.Schema({
    authName: {
        type: String,
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    bookCode: {
        type: String,
        required: true
    },
    bookDescription: {
        type: String,
        required: true
    },
    bookCatag: {
        type: String,
    }
});


const Books = mongoose.model("Library", LibrarySchema);

export default Books;