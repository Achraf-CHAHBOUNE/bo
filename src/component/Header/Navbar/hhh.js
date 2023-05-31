import React, { useState } from 'react';
import "./nav.css";
import bottuLogo from "../../Assets/image/logo1.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const style = props.display;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function outsubmit() {
    localStorage.setItem("login", false);
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate('/SignIn');
  }

  return (
    <nav className='Navbar'>
      <div className='nav-container'>
        <Link to="/" className='logo-container'>
          <img className='logo' src={bottuLogo} alt='logo' />
        </Link>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <div className='menu-toggler' onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
          <ul className='menu-links'>
            <li>
              <Link className='navigators' to={props.path[0]}>{props.titre[0]}</Link>
            </li>
            <li>
              <Link className='navigators' to={props.path[1]}>{props.titre[1]}</Link>
            </li>
            <li>
              <Link className='navigators' to={props.path[2]}>{props.titre[2]}</Link>
            </li>
            <li>
              <Link className='navigators' to={props.path[3]}>{props.titre[3]}</Link>
            </li>
            <li>
          <button className='logout' style={{ display: style }} onClick={outsubmit}>Deconnexion</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
