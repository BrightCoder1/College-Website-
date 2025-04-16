import express from "express";
import cors from "cors";
import Message from "./model/Message.js";
import StudentDB from "./model/Admission.js";
import multer from "multer";
import Staff from "./model/StaffSchema.js";
import Student from "./model/StudentSchema.js";
import Transport from "./model/TransportSchema.js";
import Task from "./model/TaskSchema.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });


app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "User is authenticated (dummy)" });
});

app.post("/contact", async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const response = new Message({
            name,
            email,
            phone,
            message,
            date: new Date()
        });
        await response.save();

        res.status(200).json({ success: true, message: "Contact form received" });

    } catch (error) {
        console.error("Error receiving contact form data:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

app.post("/admission", async (req, res) => {
    try {
        const { firstName, lastName, dateOfBirth, gender, email, phone, address, course } = req.body;

        // Check if data already exists using email or phone
        const existingStudent = await StudentDB.findOne({ $or: [{ email }, { phone }] });

        if (existingStudent) {
            return res.status(400).json({
                success: false,
                message: "You have already submitted your data.",
            });
        }

        // If not exists, proceed to save
        const admission = new StudentDB({
            firstName,
            lastName,
            dateOfBirth,
            gender,
            email,
            phone,
            address,
            course,
        });

        await admission.save();

        res.status(200).json({
            success: true,
            message: "Form submitted successfully!",
        });
    } catch (error) {
        console.error("Error saving admission:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});


// staff add route
app.post("/add", upload.fields([
    { name: "degreePhoto", maxCount: 1 },
    { name: "panCardFile", maxCount: 1 },
    { name: "aadharCardFile", maxCount: 1 }
]), async (req, res) => {
    try {
        const newStaff = new Staff({
            ...req.body,
            degreePhoto: req.files["degreePhoto"]?.[0]?.path || "",
            panCardFile: req.files["panCardFile"]?.[0]?.path || "",
            aadharCardFile: req.files["aadharCardFile"]?.[0]?.path || "",
        });

        await newStaff.save();
        res.status(201).json({ success: true, message: "Staff added successfully!" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});



// add transport
app.post("/admin/addtransport", async (req, res) => {
    try {
        const { drivername, mobile, licenseno, vehicleno, routename, stdCap } = req.body;

        const data = await Transport({ drivername, mobile, licenseno, vehicleno, routename, stdCap });

        await data.save();
        res.status(200).json({
            success: true,
            message: "Data Send Successfully!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
})



//admin staff route
app.post("/admin/staff", async (req, res) => {
    try {
        const data = await Staff.find();
        res.status(200).json({
            success: true,
            message: "Data fetch successfully!..",
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!..."
        })
    }
});

//admin contact
app.post("/admin/contact", async (req, res) => {
    try {
        const data = await Message.find();
        res.status(200).json({
            success: true,
            message: "Data fetch successfully!..",
            data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!..."
        })
    }
})


//admin student
app.post("/admin/students", async (req, res) => {
    try {
        const data = await Student.find();
        // console.log(data);

        res.status(200).json({
            success: true,
            message: "Data fetch Successfully!..",
            data
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!..."
        })
    }
})

app.get("/admin/hostel", async (req, res) => {
    try {
        const data = await Student.find();

        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error.."
        });
    }
});



app.post("/admin/staff", async (req, res) => {
    try {
        const data = await Staff.find();
        res.status(200).json({
            success: true,
            message: "Data fetch successfully!..",
            data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error!..."
        })
    }
})

//add student route
app.post("/add/student", upload.fields([{ name: "avatar", maxCount: 1 }, { name: "parentAvatar", maxCount: 1 }]), async (req, res) => {
    try {
        const studentData = new Student({
            ...req.body,
            avatar: req.files["avatar"]?.[0]?.path || "",
            parentAvatar: req.files["parentAvatar"]?.[0]?.path || "",
        });

        await studentData.save();
        res.status(201).json({ success: true, message: "Student added successfully!" });

    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
});


app.post("/add/tasks", async (req, res) => {
    try {
        const { name, email, description, duration } = req.body;

        const task = new Task({
            name,
            email,
            description,
            duration 
        });

        await task.save();

        res.status(200).json({
            success: true,
            message: "Task added successfully!"
        });
    } catch (error) {
        console.error("Error saving task:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});




export default app;