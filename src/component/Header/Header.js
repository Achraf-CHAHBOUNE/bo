import React from 'react'
import Navbar from './Navbar/Navbar.js'
import Hero from './Hero/Hero.js'
import Image1 from "../Assets/image/logo2.jpg"
import Image2 from "../Assets/image/logo3.jpg"
import Image3 from "../Assets/image/logo4.jpg"



function Header() {
  const images = [Image1, Image2, Image3];
  return (
      <div className='header'>
      <Navbar path={["/","/Enregistrer","/Liberer","/Localiser"]} display="none" titre={["Home","Enregister","Liberer","Localiser"] }  />
      <Hero imgs={images}/>
    </div>
  )
}
export default Header;