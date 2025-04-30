import React from 'react';
import {Link} from "react-router-dom";

function StudentResult() {
    return (
        <div className="result-container">
            <h2>Student Report Card</h2>
            <p>Free college report card template</p>

            <div className="student-info">
                <div><strong>Name:</strong> John Doe</div>
                <div><strong>Grade:</strong> 10</div>
                <div><strong>School Year:</strong> 2024-2025</div>
                <div><strong>Term:</strong> Fall</div>
                <div><strong>Teacher:</strong> Mr. Smith</div>
                <div><strong>Date:</strong> 28-Apr-2025</div>
            </div>

            <table className="result-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Grade Q1</th>
                        <th>Grade Q2</th>
                        <th>Grade Q3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Literature</td><td>A</td><td>A</td><td>A</td></tr>
                    <tr><td>History</td><td>B+</td><td>B+</td><td>B+</td></tr>
                    <tr><td>Geography</td><td>C</td><td>C</td><td>C</td></tr>
                    <tr><td>Algebra</td><td>C</td><td>C</td><td>C</td></tr>
                    <tr><td>Social Science</td><td>B</td><td>B</td><td>B</td></tr>
                    <tr><td>Chemistry</td><td>A+</td><td>A+</td><td>A+</td></tr>
                    <tr><td>Art</td><td>A</td><td>A</td><td>A</td></tr>
                    <tr><td>Physical Education</td><td>C</td><td>C</td><td>C</td></tr>
                    <tr><td>Entrepreneurship</td><td>F</td><td>F</td><td>F</td></tr>
                </tbody>
            </table>

            <div className="remarks">
                <div><strong>Absences:</strong> 2</div>
                <div><strong>Early Dismissals:</strong> 1</div>
                <div><strong>Tardies:</strong> 3</div>
                <div><strong>Penalties:</strong> None</div>
            </div>
            <Link to="/download" className='btn'>Download</Link>
        </div>
    );
}

export default StudentResult;
