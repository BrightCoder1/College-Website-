import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../fileadmin.css";

const AddTask = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        description: "",
        duration: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3000/add/tasks",
                formData,
                {
                    headers: { "Content-Type": "application/json" },
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
            console.error("Error submitting form:", error);
            toast.error("Failed to add task. Please try again.");
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            description: "",
            duration: "",
        });
    };

    return (
        <div className="dashboard dashboard1">
            <ToastContainer className="z-index" />
            <div className="student-add-page">
                <h2>Add Task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <h3>Task Information</h3>
                        <div className="form-row">
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                style={{ width: "100%", height: "80px" }}
                            />
                        </div>
                        <div className="form-row">
                            <label>Duration (e.g. 2 hours, 3 days):</label>
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleChange}
                                required
                                className="duration"
                            />
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

export default AddTask;