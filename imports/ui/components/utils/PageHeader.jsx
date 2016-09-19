import React from 'react';

export default PageHeader = props => {
  // console.debug($(window).height()/2)
  height = $(window).height()/2;
  // height = "300"
  props.style ? style = props.style : style = {};
  style.backgroundImage = "url('"+ props.src + "')";
  style.height = height+"px";

  return(
    <div className="valign-wrapper header-image hide-on-small-only" style={style}>
      <h1 className="header-image-text valign centerByMargin center">{props.title}</h1>
    </div>
  )
}
