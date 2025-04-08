import { useState } from "react";
import logo from "C:/Users/vs035/OneDrive/Desktop/Vivek University Bijnor/Frontend/public/Images/Logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

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
            <a href="/" className="listtag">Home</a>
          </li>
          <li className="listItem">
            <a href="/course" className="listtag">Course</a>
          </li>
          <li className="listItem">
            <a href="/vlog" className="listtag">Vlog</a>
          </li>
          <li className="listItem">
            <a href="/contact" className="listtag">Contact</a>
          </li>
          <li className="listItem">
            <a href="/placement" className="listtag">Placement</a>
          </li>
          <li className="listItem">
            <a href="/gallery" className="listtag">Gallery</a>
          </li>
          <li className="listItem">
            <a href="/admission" className="listtag">Admission</a>
          </li>

          <li className="listItem">
            <a href="/login" className="listtag">Login</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
