import mongoose from "mongoose";


const addTransport = new mongoose.Schema({
    drivername: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    licenseno: {
        type: String,
        required: true
    },
    vehicleno: {
        type: String,
        required: true
    },
    routename: {
        type: String,
        required: true
    },
    stdCap: {
        type: String,
        required: true
    },
})


const Transport = mongoose.model("Transport", addTransport);

export default Transport;