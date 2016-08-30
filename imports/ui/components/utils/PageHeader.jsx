import React from 'react';

export default PageHeader = props => {
  props.style ? style = props.style : style = {};
  style.backgroundImage = "url('"+ props.src + "')";
  return(
    <div className="valign-wrapper header-image" style={style}>
      <h1 className="header-image-text valign centerByMargin">{props.title}</h1>
    </div>
  )
}
