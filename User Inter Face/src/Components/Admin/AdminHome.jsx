import React, { useEffect, useState } from 'react';
import { FaUserFriends } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";

const DashboardCard = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [totalFees, setTotalFees] = useState(0);

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(response => response.json())
            .then((data) => {
                if (data.success) {
                    setStudents(data.data);

                    
                    let feesSum = data.data.reduce((sum, student) => sum + Number(student.fees || 0), 0);
                    setTotalFees(feesSum);
                } else {
                    console.log("Data Not Found..");
                }
            });

        fetch("http://localhost:3000/professors")
            .then(response => response.json())
            .then((res) => {
                if (res.success) {
                    setTeachers(res.data);
                } else {
                    console.log("Data not found...");
                }
            });

    }, []);

    return (
        <>
            <div className="dsh-card">
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <FaUserFriends className='dsh-icon' />Students</h3>
                    <h1 className="dsh-inner-h1">{students.length}</h1>
                </div>
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <FaBookOpen className='dsh-icon' />Total Courses</h3>
                    <h1 className="dsh-inner-h1">100</h1>
                </div>
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <GiTeacher className='dsh-icon' />Total Teachers</h3>
                    <h1 className="dsh-inner-h1">{teachers.length}</h1>
                </div>
                <div className="dsh-inner">
                    <h3 className="dsh-inner-h3"> <HiCurrencyRupee className='dsh-icon' />Fees Collection</h3>
                    <h1 className="dsh-inner-h1">₹{totalFees.toLocaleString()}</h1>
                </div>
            </div>
        </>
    );
};

export default DashboardCard;
