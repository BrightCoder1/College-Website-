import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

function StaffTable() {
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [randomStaff, setRandomStaff] = useState(null);

    useEffect(() => {
        const fakeStaff = [
            { name: 'Dr. A. Sharma', phone: '9876543210', dept: 'Physics', degree: 'PhD', salary: '70000' },
            { name: 'Prof. B. Kumar', phone: '9123456789', dept: 'Mathematics', degree: 'MSc', salary: '65000' },
            { name: 'Dr. C. Mehta', phone: '9988776655', dept: 'Biology', degree: 'PhD', salary: '72000' },
            { name: 'Ms. D. Roy', phone: '8888999900', dept: 'Chemistry', degree: 'MSc', salary: '60000' },
        ];

        setStaff(fakeStaff);
        setLoading(false);

        // Pick random staff
        const randomIndex = Math.floor(Math.random() * fakeStaff.length);
        setRandomStaff(fakeStaff[randomIndex]);
    }, []);

    const filteredStaff = staff.filter(item =>
    (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.phone?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dept?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="table-container">
            <div className="table-nav">
                <h1 className="t-h1">Teachers</h1>
                <div className="student-list-header dashboardSearch right">
                    <form onSubmit={(e) => e.preventDefault()} className=''>
                        <input
                            type="text"
                            className="search"
                            placeholder='Search by Name, Phone, or Department...'
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
                                <td colSpan="7">No staff found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default StaffTable;
