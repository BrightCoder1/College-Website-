import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./fileadmin.css";

const departments = [
    "Computer Science", "Electrical Engineering", "Mechanical Engineering",
    "Civil Engineering", "Mathematics", "Physics", "Chemistry",
    "Biology", "Business Administration", "Humanities"
];

const AddStaff = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        dept: "",
        address: "",
        salary: "",
        degree: "",
        password: "",
        confirmPassword: "",
        staffOrProfessor: "",
        degreePhoto: null,
        panCardFile: null,
        aadharCardFile: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await axios.post(
                "http://localhost:3000/add",
                formDataToSend,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                toast.success(response.data.message, {
                    autoClose: 3000,
                    position: "top-center",
                });
                handleReset();
            }
        } catch (error) {
            toast.error("Failed to add staff. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
            dept: "",
            address: "",
            salary: "",
            degree: "",
            password: "",
            confirmPassword: "",
            staffOrProfessor: "",
            degreePhoto: null,
            panCardFile: null,
            aadharCardFile: null,
        });
    };

    return (
        <div className="dashboard dashboard1">
            <div className="student-add-page">
                <h2>Add Staff</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h3>Staff Information</h3>
                        <div className="form-row">
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <label>Course:</label>
                            <input type="text" name="course" value={formData.course} onChange={handleChange} required />
                            <label>Department:</label>
                            <select name="dept" value={formData.dept} onChange={handleChange} required>
                                <option value="">Select Department</option>
                                {departments.map((dept, index) => (
                                    <option key={index} value={dept}>{dept}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                            <label>Phone:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <label>Salary:</label>
                            <input type="text" name="salary" value={formData.salary} onChange={handleChange} required />
                            <label>Degree:</label>
                            <input type="text" name="degree" value={formData.degree} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <label>Degree Photo:</label>
                            <input type="file" name="degreePhoto" onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <label>PAN Card File:</label>
                            <input type="file" name="panCardFile" onChange={handleChange} required />
                            <label>Aadhar Card File:</label>
                            <input type="file" name="aadharCardFile" onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <label>Staff/Professor:</label>
                            <select name="staffOrProfessor" value={formData.staffOrProfessor} onChange={handleChange} required>
                                <option value="">Select Type</option>
                                <option value="admin">Admin</option>
                                <option value="employee">Employee</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
                        <button type="reset" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStaff;
