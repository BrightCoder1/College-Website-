import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";

const attendanceData = [
    {
        employee: 'John Doe',
        rollNumber: '12345',
        department: 'Engineering',
        attendance: '111111111110111111111111111111',
    },
    {
        employee: 'Tim Hank',
        rollNumber: '67890',
        department: 'Marketing',
        attendance: '111111111101111111111111111111',
    },
    {
        employee: 'Frank Camly',
        rollNumber: '13579',
        department: 'Sales',
        attendance: '111111110000001111111111111111',
    },
    {
        employee: 'Gary Camara',
        rollNumber: '24680',
        department: 'Engineering',
        attendance: '111111110111111111111111111111',
    },
    {
        employee: 'Fidel Tonn',
        rollNumber: '11223',
        department: 'HR',
        attendance: '111111101111111111111111111111',
    },
    {
        employee: 'Tim Hank',
        rollNumber: '44556',
        department: 'Marketing',
        attendance: '111111011111111111111111111111',
    },
    {
        employee: 'Maryam Amiri',
        rollNumber: '77889',
        department: 'Sales',
        attendance: '111110111111111111111111111111',
    },
    {
        employee: 'Hossein Shams',
        rollNumber: '99001',
        department: 'HR',
        attendance: '111101111111111111111111111111',
    },
];

function AttendanceList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('employee');
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = attendanceData.filter(item => {
        if (searchType === 'employee') {
            return item.employee.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchType === 'rollNumber') {
            return item.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchType === 'department') {
            return item.department.toLowerCase().includes(searchTerm.toLowerCase());
        }
        return true;
    });

    return (
        <div className="attendance-list-container">
            <div className="header">
                <h2>Attendance</h2>
                <button className="export-excel">Export Excel</button>
            </div>
            <div className="subheader">
                <p>Ericsson / Attendance</p>
            </div>
            <div className="search-bar">
                <select onChange={(e) => setSearchType(e.target.value)}>
                    <option value="employee">Employee Name</option>
                    <option value="rollNumber">Roll Number</option>
                    <option value="department">Department</option>
                </select>
                <input
                    type="text"
                    placeholder={`Search by ${searchType}...`}
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <div className="table-wrapper">
                <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>EMPLOYEE</th>
                            <th>Roll No.</th>
                            <th>Department</th>
                            <th>Total Lectures</th>
                            <th>Attended Lectures</th>
                            <th>Attendance (%)</th>
                            {days.map((day) => (
                                <th key={day}>{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((employeeData, index) => {
                            const totalLectures = employeeData.attendance.length;
                            const attendedLectures = employeeData.attendance.split('').filter(status => status === '1').length;
                            const attendancePercentage = ((attendedLectures / totalLectures) * 100).toFixed(2);

                            return (
                                <tr key={index}>
                                    <td>{employeeData.employee}</td>
                                    <td>{employeeData.rollNumber}</td>
                                    <td>{employeeData.department}</td>
                                    <td>{totalLectures}</td>
                                    <td>{attendedLectures}</td>
                                    <td>{attendancePercentage}%</td>
                                    {employeeData.attendance.split('').map((status, dayIndex) => (
                                        <td key={dayIndex} className={`attendance-status ${status === '1' ? 'present' : 'absent'}`}>
                                            {status === '1' ? (
                                                <span style={{ color: 'green' }}><FaUser /></span>
                                            ) : (
                                                <span style={{ color: 'red' }}><FaUser /></span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AttendanceList;