import React from 'react'
import AdminNavbar from '../AdminNavbar'
// import { Link } from 'react-router-dom'
import StudentInformation from '../StudentInformation'

const Student = () => {
    return (
        <div className='dashboard'>
            <AdminNavbar />
            <div className="tableSet">
                <StudentInformation />
            </div>
        </div>
    )
}

export default Student
