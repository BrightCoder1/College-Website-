import React from 'react'
import Navbar from './Components/Navbar.jsx'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Page/Home.jsx';
import "./mobile.css"
import Footer from './Components/Footer.jsx';
import Course from './Page/Course.jsx';
import Vlog from './Components/Vlog.jsx';
import Contact from './Page/Contact.jsx';
import Gallery from './Page/Gallery.jsx';
import Admission from './Page/Admission.jsx';
import Login from './Page/Login.jsx';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/vlog" element={<Vlog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
