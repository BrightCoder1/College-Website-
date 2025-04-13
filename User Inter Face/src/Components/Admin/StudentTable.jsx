import { MdDelete } from "react-icons/md";
import { useState } from "react";

const StudentTable = () => {

    const dummyStudents = [
        {
            _id: 1,
            firstName: "Rahul",
            lastName: "Sharma",
            class: "10",
            section: "A",
            gender: "Male",
            rollNo: "101",
            email: "rahul10@gmail.com",
            admissionNo: "A1001"
        },
        {
            _id: 2,
            firstName: "Priya",
            lastName: "Singh",
            class: "9",
            section: "B",
            gender: "Female",
            rollNo: "102",
            email: "priya09@gmail.com",
            admissionNo: "A1002"
        },
        {
            _id: 3,
            firstName: "Aman",
            lastName: "Verma",
            class: "11",
            section: "C",
            gender: "Male",
            rollNo: "103",
            email: "aman11@gmail.com",
            admissionNo: "A1003"
        },
        {
            _id: 4,
            firstName: "Neha",
            lastName: "Patel",
            class: "12",
            section: "A",
            gender: "Female",
            rollNo: "104",
            email: "neha12@gmail.com",
            admissionNo: "A1004"
        },
    ];

    const [students, setStudents] = useState(dummyStudents);
    const [search, setSearch] = useState("");

    const filteredStudents = students.filter((student) =>
        `${student.firstName} ${student.lastName}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="student-list-container">
            <div className="student-list-header">
                <h2 className="s-l-h2">New Student List</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        className="search"
                        placeholder="Search by Name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
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
                        <th>DELETE</th>
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
                                <td><MdDelete style={{ cursor: "pointer", color: "red" }} /></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="9">No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
