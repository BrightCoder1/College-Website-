import React from 'react'
import Notice from '../Notice'
import AdminNavbar from '../AdminNavbar'

const Notification = () => {
    return (
        <>
            <div className="dashboard">
                <AdminNavbar />
                <div className="flexNotice">
                    <Notice />
                </div>
            </div>
        </>
    )
}

export default Notification
