import React from 'react'
import ContactList from '../ContactList';
import AdminNavbar from '../AdminNavbar';

const Message = () => {
    return (
        <>
            <div className="dashboard">
                <AdminNavbar />
                <ContactList />
            </div>
        </>
    )
}

export default Message;