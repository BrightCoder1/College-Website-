import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";

const DashboardCard = () => {

    return (
        <>
            <div className="dsh-card">
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <FaUserFriends className='dsh-icon' />Students</h3>
                    <h1 className="dsh-inner-h1">24014614</h1>
                </div>
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <FaBookOpen className='dsh-icon' />Total Courses</h3>
                    <h1 className="dsh-inner-h1">100</h1>
                </div>
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <GiTeacher className='dsh-icon' />Total Teachers</h3>
                    <h1 className="dsh-inner-h1">1535</h1>
                </div>
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <HiCurrencyRupee className='dsh-icon' />Fees Collection</h3>
                    <h1 className="dsh-inner-h1">₹304251425</h1>
                </div>
            </div>
        </>
    );
};

export default DashboardCard;
