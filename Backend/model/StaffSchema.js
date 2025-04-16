import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    degreePhoto: {
        type: String,
        required: true
    },
    panCardFile: {
        type: String,
        required: true
    },
    aadharCardFile: {
        type: String,
        required: true
    },
    staffOrProfessor: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
});


const Staff = mongoose.model("Staff", staffSchema);
export default Staff;