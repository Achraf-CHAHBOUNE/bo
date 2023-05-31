import React from 'react'
import "./Panel.css"
import { Link } from 'react-router-dom';

const Panel = () => {
    return (
      <div className='Health'>
        <p>YOUR HEALTH,<br /><span>OUR MISSION.</span></p><br/>
        <button ><Link to='/SignIn'>Connexion</Link></button>
        
      </div>
  );
}

export default Panel;