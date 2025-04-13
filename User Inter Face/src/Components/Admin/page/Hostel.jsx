import React from 'react'
import HotelList from '../HostelList'
import AdminNavbar from '../AdminNavbar'

const Hostel = () => {
    return (
        <div className='dashboard'>
            <AdminNavbar />
            <div className="tableSet">
                <HotelList />
            </div>
        </div>
    )
}

export default Hostel
