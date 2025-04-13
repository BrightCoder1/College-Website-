import React from 'react'
import AdminNavbar from '../AdminNavbar'
import TransportTable from '../TransportTable'

const Transport = () => {
    return (
        <div className='dashboard'>
            <AdminNavbar />
            <div className="tableSet">
                <TransportTable />
            </div>
        </div>
    )
}

export default Transport
