import React from 'react';

export default HomeSlider = props => {
  return(
    <div className="slider">
      <ul className="slides" ref={() =>  $('.slider').slider({full_width: true, indicators: false})}>
        <li>
          <img src="/home.jpg" />
          <div className="caption center valign-wrapper" style={{backgroundColor: "rgba(0,0,0,0.3)", height: "100%", width: "100%", top: "0", left: "0"}}>
            <div className="valign centerByMargin">
              <h3>Pynook</h3>
              <h5 className="light grey-text text-lighten-3">A sad but true fact.</h5>
            </div>

          </div>
        </li>
      </ul>
    </div>
    )
  }
