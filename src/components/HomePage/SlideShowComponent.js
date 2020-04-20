import React from 'react';
import { Fade,Zoom } from 'react-slideshow-image';
 
const fadeImages = [
  'assets/images/products/belt.png',
  'assets/images/products/leather bag.png',
  'assets/images/products/ear ring.png',
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }
   
  const SlideShow = () => {
      return (
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {
              fadeImages.map((each, index) =><div> <img key={index} style={{width: "180%"}} src={each} /> </div> )
            }
          </Zoom>
        </div>
      )
  }
export default SlideShow;