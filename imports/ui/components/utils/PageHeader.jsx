import React from 'react';

export default PageHeader = props => {
  return(
    <div className="valign-wrapper header-image" style={{backgroundImage: "url('"+ props.src +"')"}}>
      <h1 className="header-image-text valign centerByMargin">{props.title}</h1>
    </div>
  )
}
