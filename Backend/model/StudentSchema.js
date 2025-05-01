import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();

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
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


studentSchema.methods.generateToken = async function () {
    try {
        const token = await jwt.sign({
            _id: this._id.toString(),
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        });

        // Concatenate new token to the tokens array in the student instance
        this.tokens = this.tokens.concat({ token });
        await this.save(); // Save the updated student instance to MongoDB

        return token; // Return the generated token
    } catch (error) {
        console.log("Token Error: ", error);
        throw error; // Throw an error if token generation fails
    }
};


const Student = mongoose.model('Students', studentSchema);


export default Student;