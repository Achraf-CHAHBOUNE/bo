import React from 'react'
import "./Navbar.css";
import bottuLogo from "../../Assets/image/logo1.jpg"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar(props) {
  const navigate = useNavigate();
  const style = props.display;
  function outsubmit() {
    localStorage.setItem("login", false);
    localStorage.setItem("loginStatus", "Logged out successfully!");
    navigate('/SignIn');
    
  }
  return (
      <div className='Navbar'>
          <div>
        <img className='logo' src={bottuLogo} alt='logo'/>
          </div>
     
      <div className='Nmenu'>
        <Link className='navigators'  to={props.path[0]}>{props.titre[0]} </Link>
        <Link className='navigators'  to={props.path[1]}> {props.titre[1]} </Link>
        <Link className='navigators'  to={props.path[2]}> {props.titre[2]}</Link>
        <Link className='navigators' to={props.path[3]}> {props.titre[3]}</Link>  
        <button className='logout' style={{ display:style }} onClick={outsubmit}>Deconnexion</button>
      </div>
    </div>
  )
}

export default Navbar