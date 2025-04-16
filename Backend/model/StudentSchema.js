import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true

    },
    lastName: {
        type: String,
        required: true

    },
    class: {
        type: String,
        required: true

    },
    section: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female', 'other']
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    admissionNo: {
        type: String,
        required: true,
        unique: true
    },
    religion: {
        type: String

    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Simple email validation
    },
    fees: {
        type: String,

    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    fatherName: {
        type: String

    },
    motherName: {
        type: String

    },
    fatherOccupation: {
        type: String

    },
    motherOccupation: {
        type: String

    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ // Example phone number validation
    },
    alternativeNumber: {
        type: String

    },
    nationality: {
        type: String
    },
    presentAddress: {
        type: String

    },
    permanentAddress: {
        type: String

    },
    parentAvatar: {
        type: String

    },
    transport: {
        type: String,
        required: true,
        default: false
    },
    hostel: {
        type: String,
        required: true,
        default: false
    },
    block: {
        type: String,
        default: null
    },
    roomNo: {
        type: String,
        default: null
    },
    roomType: {
        type: String,
        default: null
    },
    noOfBeds: {
        type: String,
        default: null
    }
});


const Student = mongoose.model('Students', studentSchema);


export default Student;