import { useState } from "react";
import logo from "C:/Users/vs035/OneDrive/Desktop/Vivek University Bijnor/Frontend/public/Images/Logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />

        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <IoIosCloseCircle className="icon" />
          ) : (
            <GiHamburgerMenu className="icon" />
          )}
        </div>

        <ul className={menuOpen ? "list active" : "list"}>
          <li className="listItem">
            <Link to="/" className="listtag">Home</Link>
          </li>
          <li className="listItem">
            <Link to="/course" className="listtag">Course</Link>
          </li>
          <li className="listItem">
            <Link to="/vlog" className="listtag">Vlog</Link>
          </li>
          <li className="listItem">
            <Link to="/contact" className="listtag">Contact</Link>
          </li>
          <li className="listItem">
            <Link to="/placement" className="listtag">Placement</Link>
          </li>
          <li className="listItem">
            <Link to="/gallery" className="listtag">Gallery</Link>
          </li>
          <li className="listItem">
            <Link to="/admission" className="listtag">Admission</Link>
          </li>

          <li className="listItem">
            <Link to="/login" className="listtag">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
