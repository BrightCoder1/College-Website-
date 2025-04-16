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
                        <div className="btnflex">
                            <Link to="/add" className='add addmargin'>Add Employee</Link>
                            <Link to="/add/student" className='add addmargin'>Add Student</Link>
                            <Link to="/add/tasks" className='add addmargin'>Add Tasks</Link>
                            <Link to="/add/events" className='add addmargin'>Add Events</Link>
                            <Link to="/addbook" className='add addmargin'>Add Books</Link>
                            <Link to="/add/notice" className='add addmargin'>Add Notice</Link>
                            <Link to="/admin/addtransport" className="add addmargin">Add Transport</Link>
                        </div>
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
