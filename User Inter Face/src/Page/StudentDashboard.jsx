import React from 'react'
import StudentNavbar from '../Components/Student/StudentNavbar'
import StudentProfile from '../Components/Student/StudentProfile';

const StudentDashboard = () => {
    return (
        <>
            <div className="dashboard studentDashboard">
                <StudentNavbar />
                <div className="studentFront">
                    <StudentProfile />
                </div>
            </div>
        </>
    )
}

export default StudentDashboard;
