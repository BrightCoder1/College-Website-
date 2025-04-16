import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "../fileadmin.css";

const AddStudent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        class: '',
        section: '',
        gender: '',
        dateOfBirth: '',
        rollNo: '',
        admissionNo: '',
        religion: '',
        email: '',
        fees: '',
        avatar: null,
        fatherName: '',
        motherName: '',
        fatherOccupation: '',
        motherOccupation: '',
        phoneNumber: '',
        alternativeNumber: '',
        nationality: '',
        presentAddress: '',
        permanentAddress: '',
        parentAvatar: null,
        password: '',
        confirmPassword: '',
        transport: false,
        hostel: false,
        block: '',
        roomNo: '',
        roomType: '',
        noOfBeds: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match. Please try again.");
            return;
        }

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            if (formData[key]) {
                formDataToSend.append(key, formData[key]);
            }
        });

        for (let pair of formDataToSend.entries()) {
            console.log(pair[0], pair[1]);
        }

        try {
            const response = await axios.post(
                "http://localhost:3000/add/student",
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
            console.error("Error submitting form:", error.response?.data || error.message);
            toast.error("Failed to add student. Please try again.");
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            class: '',
            section: '',
            gender: '',
            dateOfBirth: '',
            rollNo: '',
            admissionNo: '',
            religion: '',
            email: '',
            fees: '',
            avatar: null,
            fatherName: '',
            motherName: '',
            fatherOccupation: '',
            motherOccupation: '',
            phoneNumber: '',
            alternativeNumber: '',
            nationality: '',
            presentAddress: '',
            permanentAddress: '',
            parentAvatar: null,
            password: '',
            confirmPassword: '',
            transport: false,
            hostel: false,
            block: '',
            roomNo: '',
            roomType: '',
            noOfBeds: ''
        });
    };

    return (
        <div className="dashboard dashboard1">
            <ToastContainer className="z-index" />
            <div className="student-add-page">
                <h2>Add Student Form</h2>
                <form onSubmit={handleSubmit} method='post'>
                    <div className="form-section">
                        <h3>Student Information</h3>
                        <div className="form-row">
                            <label>First Name:</label>
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                            <label>Last Name:</label>
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                            <label>Class:</label>
                            <select name="class" value={formData.class} onChange={handleChange}>
                                <option value="">Select Class</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                {/* Add more classes */}
                            </select>
                            <label>Section:</label>
                            <select name="section" value={formData.section} onChange={handleChange}>
                                <option value="">Select Section</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                {/* Add more sections */}
                            </select>
                        </div>
                        <div className="form-row">
                            <label>Gender:</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <label>Date Of Birth:</label>
                            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                            <label>Roll No:</label>
                            <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} />
                            <label>Admission No:</label>
                            <input type="text" name="admissionNo" value={formData.admissionNo} onChange={handleChange} />
                            <label>Fees:</label>
                            <input type="text" name="fees" value={formData.fees} onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <label>Religion:</label>
                            <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
                            <label>E-mail:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />

                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />

                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />

                            <label>Avatar:</label>
                            <div className="avatar-input">
                                <input type="file" name="avatar" onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <label>Transport:</label>
                            <select name="transport" value={formData.transport} onChange={handleChange}>
                                <option value={true}>Yes</option>
                                <option value={false}>No</option>
                            </select>
                            <label>Hostel:</label>
                            <select name="hostel" value={formData.hostel} onChange={handleChange}>
                                <option value="false">No</option>
                                <option value="true">Yes</option>
                            </select>
                        </div>


                        {formData.hostel === "true" && (
                            <>
                                <h1 className="headingMe">Hostel</h1>
                                <div className="form-row">
                                    <label>Block:</label>
                                    <input type="text" name="block" value={formData.block} onChange={handleChange} />
                                    <label>Room No:</label>
                                    <input type="text" name="roomNo" value={formData.roomNo} onChange={handleChange} />
                                    <label>Type:</label>
                                    <select name="roomType" value={formData.roomType} onChange={handleChange}>
                                        <option value="">Select Type</option>
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                        <option value="triple">Triple</option>
                                    </select>
                                    <label>No of Beds:</label>
                                    <input type="number" name="noOfBeds" value={formData.noOfBeds} onChange={handleChange} />
                                </div>
                            </>
                        )}

                    </div>


                    <div className="form-section">
                        <h3>Parents Information</h3>
                        <div className="form-row">
                            <label>Father Name:</label>
                            <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                            <label>Mother Name:</label>
                            <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} />
                            <label>Father Occupation:</label>
                            <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} />
                            <label>Mother Occupation:</label>
                            <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <label>Phone Number:</label>
                            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                            <label>Alternative Number:</label>
                            <input type="text" name="alternativeNumber" value={formData.alternativeNumber} onChange={handleChange} />
                            <label>Nationality:</label>
                            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
                            <label>Present Address:</label>
                            <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} />
                            <label>Permanent Address:</label>
                            <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <label>Avatar:</label>
                            <div className="avatar-input">
                                <input type="file" name="parentAvatar" onChange={handleChange} />
                            </div>
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

export default AddStudent;
