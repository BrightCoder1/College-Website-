import React from 'react'
import AdminNavbar from '../AdminNavbar'
import AdminStudent from '../AdminStudent'

const Student = () => {
    return (
        <div className='dashboard'>
            <AdminNavbar />
            <div className="tableSet">
                <AdminStudent />
            </div>
        </div>
    )
}

export default Student
