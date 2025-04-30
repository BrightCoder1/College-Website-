import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    FaUserFriends, FaRegUserCircle, FaUserGraduate, FaTasks, FaBed, FaBus, FaWpforms, FaRegWindowClose
} from "react-icons/fa";
import { MdSpaceDashboard, MdLibraryBooks, MdPermContactCalendar, MdDateRange } from "react-icons/md";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
const menuItems = [
    { name: 'Profile', path: '/student/profile', icon: <FaUserCircle /> },
    { name: 'Result', path: '/student/result', icon: <MdQuestionAnswer /> },
    { name: 'Tasks', path: '/student/tasks', icon: <FaTasks /> },
    { name: 'Fess', path: '/student/fess', icon: <FaRupeeSign /> },
    { name: 'Attendance', path: '/student/attendance', icon: <MdPermContactCalendar /> },
    { name: 'Notice', path: '/student/notice', icon: <MdDateRange /> },
    { name: 'Library', path: '/student/library', icon: <MdLibraryBooks /> },
    { name: 'Logout', path: '/student/logout', icon: <IoIosLogOut /> },
];

const StudentNavbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={`dashboard-nav ${isOpen ? 'full-width' : ''}`}>
            <div className="hamburgerOption">
                <FaRegWindowClose
                    className={`off ${isOpen ? 'showMe' : 'hidden'}`}
                    onClick={toggleMenu}
                />
                <GiHamburgerMenu
                    className={`open ${isOpen ? 'hidden' : 'showMe'}`}
                    onClick={toggleMenu}
                />
            </div>

            <h1 className="dash-nav-h1">
                <span className={!isOpen ? 'none' : ''}>Student</span>
            </h1>
            <ul className="dash-nav-ul">
                {menuItems.map(({ name, path, icon }, index) => (
                    <li key={index} className={`dash-nav-li ${location.pathname === path ? 'active' : ''}`}>
                        <Link to={path} className="dash-nav-tag">
                            <span className="dash-navicon iconSize">{icon}</span>
                            <span className={!isOpen ? 'none' : ''}>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentNavbar;
