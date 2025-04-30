import React from 'react';
import ProfilePhoto from "/public/images/Logo.jpg";

function StudentProfile() {
    return (
        <div className="profile-container">
            <h2>Student Profile Page Design Example</h2>
            <p>A responsive student profile page design.</p>

            <div className="profile-content">
                {/* Left Section */}
                <div className="profile-left">
                    <img src={ProfilePhoto} alt="Student" />
                    <h3>Ishmam Ahasan Samin</h3>
                    <p><strong>Student ID:</strong> 321000001</p>
                    <p><strong>Class:</strong> 4</p>
                    <p><strong>Section:</strong> A</p>
                </div>

                {/* Right Section */}
                <div className="profile-right">
                    <div className="general-info">
                        <h3>📋 General Information</h3>
                        <table>
                            <tbody>
                                <tr><td>Roll</td><td>: 125</td></tr>
                                <tr><td>Academic Year</td><td>: 2020</td></tr>
                                <tr><td>Gender</td><td>: Male</td></tr>
                                <tr><td>Religion</td><td>: Group</td></tr>
                                <tr><td>Blood</td><td>: B+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;
