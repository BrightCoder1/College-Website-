import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar.jsx';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Page/Home.jsx';
import "./mobile.css";
import Footer from './Components/Footer.jsx';
import Course from './Page/Course.jsx';
import Vlog from './Components/Vlog.jsx';
import Contact from './Page/Contact.jsx';
import Gallery from './Page/Gallery.jsx';
import Admission from './Page/Admission.jsx';
import Login from './Page/Login.jsx';
import Placement from './Page/Placement.jsx';
import Admin from './Components/Admin/Admin.jsx';
import Student from './Components/Admin/page/Student.jsx';
import Staff from './Components/Admin/page/Staff.jsx';
import Hostel from './Components/Admin/page/Hostel.jsx';
import Transport from './Components/Admin/page/Transport.jsx';
import Attendance from './Components/Admin/page/Attendance.jsx';
import Message from './Components/Admin/page/Message.jsx';
import Library from './Components/Admin/page/Library.jsx';
import Notification from './Components/Admin/page/Notification.jsx';
import Setting from './Components/Admin/page/Setting.jsx';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import AddStaff from './Components/Admin/Forms/AddStaff.jsx';
import AddStudent from './Components/Admin/Forms/AddStudent.jsx';
import AddTransport from './Components/Admin/Forms/AddTransport.jsx';
import Tasks from './Components/Admin/page/Tasks.jsx';
import AddTask from './Components/Admin/Forms/AddTask.jsx';
import AddNotice from './Components/Admin/Forms/AddNotice.jsx';
import AddBook from './Components/Admin/Forms/AddBook.jsx';

const App = () => {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await axios.get("http://localhost:3000", {
          withCredentials: true
        });

      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!..");
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <ToastContainer className="z-index" />
      <Router>
        {!login && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/vlog" element={<Vlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/students" element={<Student />} />
          <Route path='/admin/staff' element={<Staff />} />
          <Route path='/admin/hostel' element={<Hostel />} />
          <Route path='/admin/transport' element={<Transport />} />
          <Route path='/admin/attendance' element={<Attendance />} />
          <Route path='/admin/contact' element={<Message />} />
          <Route path='/admin/library' element={<Library />} />
          <Route path='/admin/notification' element={<Notification />} />
          <Route path='/admin/setting' element={<Setting />} />
          <Route path="/add" element={<AddStaff />} />
          <Route path='/add/student' element={<AddStudent />} />
          <Route path='/admin/addtransport' element={<AddTransport />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/add/tasks' element={<AddTask />} />
          <Route path='/add/notice' element={<AddNotice />} />
          <Route path='/addbook' element={<AddBook />} />
        </Routes>
        {!login && <Footer />}
      </Router>
    </>
  )
}

export default App;
