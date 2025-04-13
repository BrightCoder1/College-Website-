import React from 'react'
import AdminNavbar from '../AdminNavbar'
import LibraryData from '../LibraryData'

const Library = () => {
    return (
        <>
            <div className="dashboard">
                <AdminNavbar />
                <LibraryData />
            </div>
        </>
    )
}

export default Library
