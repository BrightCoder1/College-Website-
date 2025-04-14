import AdminNavbar from "./AdminNavbar"
import DashboardCard from "./DashboardCard"
import StudentList from "./StudentList"
import { Link } from "react-router-dom"


const Admin = () => {
    return (
        <>
            <div className="dashboard">
                <AdminNavbar />
                <div className="dashboardBox">
                    <div className="adminadd">
                        <DashboardCard />
                        <Link to="/add" className='add addmargin'>Add</Link>
                    </div>
                    <div className="dashboardtable">
                        <StudentList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
