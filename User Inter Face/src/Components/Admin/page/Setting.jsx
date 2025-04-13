import React from 'react'
import SettingUpdate from '../SettingUpdate'
import AdminNavbar from '../AdminNavbar'

const Setting = () => {
    return (
        <>
            <div className="dashboard">
                <AdminNavbar />
                <SettingUpdate />
            </div>
        </>
    )
}

export default Setting
