import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/Vivek_University";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(url, {
            dbName: "Vivek_University"
        });
        console.log("DB Connect Successfully!...");
    } catch (error) {
        console.log(error);
    }
}

