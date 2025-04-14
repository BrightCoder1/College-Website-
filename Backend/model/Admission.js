import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true

    },
    dateOfBirth: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    phone: {
        type: String,
        required: true,
        unique: true

    },
    address: {
        type: String,
        required: true

    },
    course: {
        type: String,
        required: true
    }
});


const StudentDB = mongoose.model("Admission Contact", admissionSchema);

export default StudentDB;