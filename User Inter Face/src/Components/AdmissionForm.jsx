import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdmissionForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        course: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3000/admission",
                formData,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.success) {
                toast.success(response.data.message, {
                    autoClose: 3000,
                    position: "top-center",
                });
                setFormData({
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    gender: '',
                    email: '',
                    phone: '',
                    address: '',
                    course: '',
                });
                navigate("/admission");
            }
        } catch (error) {
            console.error("Error submitting form:", error);

            const message =
                error.response && error.response.data && error.response.data.message
                    ? error.response.data.message
                    : "Failed to send information. Please try again.";

            toast.error(message, {
                position: "bottom-center",
                autoClose: 3000,
            });
        }
    };



    return (
        <>
            <div className="admission-form-container">
                <ToastContainer className="z-index" />
                <h1>College Admission Form 2025</h1>
                <form className="admission-form" onSubmit={handleSubmit} method='post' >
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Course Applying For:</label>
                        <select
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Course</option>
                            <option value="B.Sc Computer Science">B.Sc Computer Science</option>
                            <option value="B.A Economics">B.A Economics</option>
                            <option value="B.Com">B.Com</option>
                            <option value="MBA">MBA</option>
                        </select>
                    </div>

                    <button type="submit" className="submit-btn">
                        Submit Application
                    </button>
                </form>
            </div>
        </>
    );
};

export default AdmissionForm;