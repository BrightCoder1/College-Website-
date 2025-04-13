import AdminNavbar from "./AdminNavbar"
import DashboardCard from "./DashboardCard"
import StudentList from "./StudentList"



const Admin = () => {
    return (
        <>
            <div className="dashboard">
                <AdminNavbar />
                <div className="dashboardBox">
                    <DashboardCard />
                    <div className="dashboardtable">
                        <StudentList />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin
