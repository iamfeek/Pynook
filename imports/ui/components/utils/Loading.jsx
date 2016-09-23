import React from 'react';

export default Loading = props => {
  return(
    <div id="loading" className="valign-wrapper" style={{width: "100%", height: "90vh"}}>
      <img className="valign centerByMargin" src="/loading2.svg" />
    </div>
  )
}
