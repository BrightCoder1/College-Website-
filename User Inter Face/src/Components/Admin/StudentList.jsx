import React, { useState, useEffect } from "react";

const StudentList = () => {
    const randomStudents = [
        {
            _id: "1",
            firstName: "Gaurav",
            lastName: "Sharma",
            class: "12th",
            section: "A",
            gender: "Male",
            rollNo: "101",
            email: "gaurav@example.com",
            admissionNo: "A001"
        },
        {
            _id: "2",
            firstName: "Neha",
            lastName: "Singh",
            class: "11th",
            section: "B",
            gender: "Female",
            rollNo: "102",
            email: "neha@example.com",
            admissionNo: "A002"
        },
        {
            _id: "3",
            firstName: "Ravi",
            lastName: "Verma",
            class: "10th",
            section: "C",
            gender: "Male",
            rollNo: "103",
            email: "ravi@example.com",
            admissionNo: "A003"
        },
        {
            _id: "4",
            firstName: "Priya",
            lastName: "Gupta",
            class: "9th",
            section: "D",
            gender: "Female",
            rollNo: "104",
            email: "priya@example.com",
            admissionNo: "A004"
        },
        {
            _id: "5",
            firstName: "Priya",
            lastName: "Gupta",
            class: "9th",
            section: "D",
            gender: "Female",
            rollNo: "104",
            email: "priya@example.com",
            admissionNo: "A004"
        },
        {
            _id: "6",
            firstName: "Priya",
            lastName: "Gupta",
            class: "9th",
            section: "D",
            gender: "Female",
            rollNo: "104",
            email: "priya@example.com",
            admissionNo: "A004"
        }
    ];

    const [students, setStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setStudents(randomStudents);
    }, []);

    const filteredStudents = students.filter(student =>
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.admissionNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="student-list-container">
            <div className="student-list-header">
                <h2>Student List</h2>
                <input
                    type="text"
                    className="search"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <table className="student-list-table">
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>NAME</th>
                        <th>CLASS</th>
                        <th>SECTION</th>
                        <th>GENDER</th>
                        <th>ROLL NO</th>
                        <th>EMAIL</th>
                        <th>ADMISSION NO</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.length > 0 ? (
                        filteredStudents.map((student, index) => (
                            <tr key={student._id}>
                                <td>{index + 1}</td>
                                <td>{`${student.firstName} ${student.lastName}`}</td>
                                <td>{student.class}</td>
                                <td>{student.section}</td>
                                <td>{student.gender}</td>
                                <td>{student.rollNo}</td>
                                <td>{student.email}</td>
                                <td>{student.admissionNo}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentList;
