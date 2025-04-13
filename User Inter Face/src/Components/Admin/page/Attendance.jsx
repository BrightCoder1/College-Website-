import React from 'react'
import AttendanceList from '../AttendanceList';
// import AdminNavbar from '../AdminNavbar';

const Attendance = () => {
    return (
        <>
            <div className="dashboard">
                {/* <AdminNavbar /> */}
                <div className="tableSet">
                    <AttendanceList />
                </div>
            </div>
        </>
    )
}

export default Attendance;
