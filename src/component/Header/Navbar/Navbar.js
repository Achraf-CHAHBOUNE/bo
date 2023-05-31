import React, { useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import { Link, useNavigate } from 'react-router-dom'
import bottuLogo from "../../Assets/image/logo1.jpg"

function Navbar(props) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State for toggling navbar
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    };
    function outsubmit() {
    localStorage.setItem("login", false);
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate('/SignIn');
    
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light custom-navbar-bg ${isNavbarOpen ? 'show' : ''}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className='logo' src={bottuLogo} alt='logo'/>
          </Link>
         <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarCollapse"
  aria-controls="navbarCollapse"
  aria-expanded={isNavbarOpen ? 'true' : 'false'}
  aria-label="Toggle navigation"
  onClick={toggleNavbar}
  style={{ backgroundColor: "var(--secondary)" }} // Replace 'red' with your desired color
>
  <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
</button>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb- mb-lg-0">
              <li className="nav-item">
                <Link to={props.path[0]} className="nav-link Active" id='color-item'>{props.titre[0]}</Link>
              </li>
              <li className="nav-item">
                <Link to={props.path[1]} className="nav-link" id='color-item'>{props.titre[1]}</Link>
              </li>
              <li className="nav-item">
                <Link to={props.path[2]} className="nav-link " id='color-item'>{props.titre[2]}</Link>
              </li>
              <li className="nav-item">
                <Link to={props.path[3]} className="nav-link " tabIndex="-1"   id='color-item'>{props.titre[3]}</Link>
              </li>
              <li className="nav-item">
                <Link id="sort" onClick={outsubmit} className="nav-link " tabIndex="-1"   >Deconnexion</Link>
              </li>
                </ul>
                <ul className="navbar-nav" id="btn">
              <li className="nav-item " > {/* Apply the 'order-lg-last' class to control the position */}
            <button  className='logout' style={{ display:"" }} onClick={outsubmit}>Deconnexion</button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
