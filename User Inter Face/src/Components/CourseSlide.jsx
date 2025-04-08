import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const CourseSlide = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchFun = async () => {
            try {
                const res = await fetch("/Course.json");
                const jsondata = await res.json();
                setData(jsondata.course);
            } catch (error) {
                toast.error("Something want wrong!", {
                    "position": "top-center",
                    "autoClose": 3000
                })
            }
        }

        fetchFun();
    }, []);

    return (
        <>
            <ToastContainer className="index" />
            <h1 className="courseh1">Course List</h1>
            <div className="C-B-1">
                {
                    data.map((item) => (
                        <div key={item.id} className="c-box">
                            <img src={item.url} alt={item.coursename} className="course-image" />
                            <div className="course-details">
                                <h1 className="coursename">{item.coursename}</h1>
                                <p className="course-p">{item.detail}</p>
                                <Link to="/admission" className="admissionbtn">Admission Open</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default CourseSlide;
