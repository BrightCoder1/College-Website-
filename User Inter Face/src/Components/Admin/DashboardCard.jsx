import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const DashboardCard = () => {
    const [studentCount, setStudentCount] = useState(0);
    const [fess, setFess] = useState(0);
    const [teacher, setTeacher] = useState(0);


    useEffect(() => {
        const fetchStudentCountAndFees = async () => {
            try {
                const response = await axios.post("http://localhost:3000/admin/students", {
                    withCredentials: true
                });

                if (response.data.success) {
                    const students = response.data.data;
                    setStudentCount(students.length);

                    // Calculate total fees from students array
                    const totalFees = students.reduce((acc, student) => {
                        const fee = parseFloat(student.fees) || 0;
                        return acc + fee;
                    }, 0);

                    setFess(totalFees);
                } else {
                    toast.error("Failed to fetch student data.");
                }
            } catch (error) {
                toast.error("Error fetching student data.");
                console.error(error);
            }
        };


        const fetchStaffCountAndFees = async () => {
            try {
                const response = await axios.post("http://localhost:3000/admin/staff", {
                    withCredentials: true
                });

                if (response.data.success) {
                    const students = response.data.data;
                    setTeacher(students.length);
                }
            } catch (error) {
                toast.error("Error fetching student data.");
            }
        }

        fetchStudentCountAndFees();
        fetchStaffCountAndFees();
    }, []);

    return (
        <div className="dsh-card">
            <div className="dsh-inner">
                <h3 className="dsh-inner-h3">
                    <FaUserFriends className='dsh-icon' /> Students
                </h3>
                <h1 className="dsh-inner-h1">{studentCount}</h1>
            </div>
            <div className="dsh-inner">
                <h3 className="dsh-inner-h3">
                    <FaBookOpen className='dsh-icon' /> Total Courses
                </h3>
                <h1 className="dsh-inner-h1">100</h1>
            </div>
            <div className="dsh-inner">
                <h3 className="dsh-inner-h3">
                    <GiTeacher className='dsh-icon' /> Total Teachers
                </h3>
                <h1 className="dsh-inner-h1">{teacher}</h1>
            </div>
            <div className="dsh-inner">
                <h3 className="dsh-inner-h3">
                    <HiCurrencyRupee className='dsh-icon' /> Fees Collection
                </h3>
                <h1 className="dsh-inner-h1">₹{fess.toLocaleString()}</h1>
            </div>
        </div>
    );
};

export default DashboardCard;
