import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerStart">
                    <ul className="footer-list">
                        <h1 className="footerh1">Quick Link</h1>
                        <li className="footerlistItem">
                            <Link to="/" className="footertag">
                                Home
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/course" className="footertag">
                                Course
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/vlog" className="footertag">
                                Vlog
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/contact" className="footertag">
                                Contact
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/placement" className="footertag">
                                Placement
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/gallery" className="footertag">
                                Gallery
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/admission" className="footertag">
                                Admission
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <h1 className="footerh1">Students Supports</h1>
                        <li className="footerlistItem">
                            <Link to="/academiccalendar" className="footertag">
                                Academic Calendar
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/syllabus" className="footertag">
                                Syllabus
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/timetable" className="footertag">
                                Time Table
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/library" className="footertag">
                                Library
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/placement" className="footertag">
                                Placement
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <h1 className="footerh1">Admissions</h1>
                        <li className="footerlistItem">
                            <Link to="/course" className="footertag">
                                Undergraduate Courses
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/course" className="footertag">
                                Post Graduate Courses
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/course" className="footertag">
                                Diploma Course
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/admission" className="footertag">
                                Admission
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <h1 className="footerh1">Examination</h1>
                        <li className="footerlistItem">
                            <Link to="/notice" className="footertag">
                                Notices
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/examschedule" className="footertag">
                                Exam Schedule
                            </Link>
                        </li>
                        <li className="footerlistItem">
                            <Link to="/result" className="footertag">
                                Result
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footerEnd">
                    © 2025 <span className="footerColor">
                        Vivek University Bijnor
                    </span> of Education All Rights Reserved. Design & Developed By: Vishal Kumar
                </div>
            </div>
        </>
    )
}

export default Footer;