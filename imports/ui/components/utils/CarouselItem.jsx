import React from 'react';

export default CarouselItem = props => {
  return (
    <a className="carousel-item"><img src={props.src+"-/resize/800x400/-/setfill/f9f9f9/-/progressive/yes/"} /></a>
  )
}
