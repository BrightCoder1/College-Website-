import React, { useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function StaffTable() {
    const [staff, setStaff] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3000/admin/staff", {}, {
                    withCredentials: true
                });

                // const employee = response.data.data.filter(item => item.staffOrProfessor === "employee")
                setStaff(response.data.data);
                setLoading(false);
            } catch (error) {
                toast.error("Something Went Wrong!");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredStaff = staff.filter(item =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dept?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="table-container">
            <ToastContainer />
            <div className="table-nav">
                <h1 className="t-h1">Teachers</h1>
                <div className="student-list-header dashboardSearch right">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            className="search"
                            placeholder="Search by Name, Phone, or Department..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </form>
                </div>
            </div>

            {loading ? (
                <p>Loading staff data...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Department</th>
                            <th>Degree</th>
                            <th>Salary</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStaff.length > 0 ? (
                            filteredStaff.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name || "N/A"}</td>
                                    <td>{item.phone || "N/A"}</td>
                                    <td>{item.dept || "N/A"}</td>
                                    <td>{item.degree || "N/A"}</td>
                                    <td>{item.salary || "N/A"}</td>
                                    <td>{item.staffOrProfessor.toUpperCase() || "N/A"}</td>
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
                                <td colSpan="6">No staff found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default StaffTable;
