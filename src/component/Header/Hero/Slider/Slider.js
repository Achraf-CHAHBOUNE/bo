import React, { useState } from 'react';
import "./Slider.css"
import icone1 from "../../../Assets/icones/arr1.png"
import icone2 from "../../../Assets/icones/arr2.png"
// import CountUp from "react-countup"


function Slide(props){
  const images = props.images;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  }

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  }

  return (
    <div>
      <div className='slidey'>
        {images.map((image, index) => (
          <img key={index} className={`Image_slide ${index === currentImageIndex ? 'show' : 'hide'}`} src={image} alt={`${index}`}/>
        ))}

        <div className='arrow'>
          <button className='btn_pic' onClick={handlePrevClick}><img className='images' src={icone1} alt='icone1'/></button>
          <br />
          <button className='btn_pic' onClick={handleNextClick}><img className='images' src={icone2} alt='icone2'/></button>
        </div>
      </div>
    </div>
  );
}

export default Slide;
