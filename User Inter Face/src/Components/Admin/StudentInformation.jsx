import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function StudentInformation() {
    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/admin/students", {
                    withCredentials: true
                });

                setStudents(response.data.data);
                setLoading(false);
            } catch (error) {
                toast.error("Something went wrong while fetching data!");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredStudents = students.filter(student =>
        `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.section?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="table-container">
            <ToastContainer />
            <div className="table-nav">
                <h1 className="t-h1">Student List</h1>
                <div className="student-list-header dashboardSearch right">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className="search"
                            placeholder="Search by Name, Roll No, Class or Section..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            {loading ? (
                <p>Loading student data...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Roll No</th>
                            <th>Admission No</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Gender</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Fees</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student, index) => (
                                <tr key={index}>
                                    <td>{`${student.firstName} ${student.lastName}`}</td>
                                    <td>{student.rollNo || "N/A"}</td>
                                    <td>{student.admissionNo || "N/A"}</td>
                                    <td>{student.class || "N/A"}</td>
                                    <td>{student.section || "N/A"}</td>
                                    <td>{student.gender || "N/A"}</td>
                                    <td>{student.phoneNumber || "N/A"}</td>
                                    <td>{student.email || "N/A"}</td>
                                    <td>{student.fees || "N/A"}</td>
                                    <td>
                                        <span className="actions">
                                            <span role="img" aria-label="view">👀</span>
                                            <span role="img" aria-label="edit">✏️</span>
                                            <span role="img" aria-label="delete"><MdDelete /></span>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="10">No students found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default StudentInformation;
