import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaUserFriends, FaRegUserCircle, FaUserGraduate, FaTasks, FaBed, FaBus, FaWpforms, FaRegWindowClose
} from "react-icons/fa";
import { MdSpaceDashboard, MdLibraryBooks, MdPermContactCalendar, MdDateRange } from "react-icons/md";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const menuItems = [
  { name: 'Dashboard', path: '/admin', icon: <MdSpaceDashboard /> },
  { name: 'Staff', path: '/admin/staff', icon: <FaRegUserCircle /> },
  { name: 'Students', path: '/admin/students', icon: <FaUserGraduate /> },
  { name: 'Tasks', path: '/tasks', icon: <FaTasks /> },
  { name: 'Hostel', path: '/admin/hostel', icon: <FaBed /> },
  { name: 'Transport', path: '/admin/transport', icon: <FaBus /> },
  { name: 'Contact Message', path: '/admin/contact', icon: <FaWpforms /> },
  { name: 'Attendance', path: '/admin/attendance', icon: <MdPermContactCalendar /> },
  { name: 'Events', path: '/events', icon: <MdDateRange /> },
  { name: 'Library', path: '/admin/library', icon: <MdLibraryBooks /> },
  { name: 'Notification', path: '/admin/notification', icon: <IoIosNotifications /> },
  { name: 'Settings', path: '/admin/setting', icon: <IoMdSettings /> },
];

const AdminNavbar = () => {
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
        <span className={!isOpen ? 'none' : ''}>Admin</span>
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

export default AdminNavbar;
