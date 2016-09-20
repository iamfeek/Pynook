import React from 'react';

export default PynHeader = props => {
  return(
    <header className="pyn_header">
      <div className="wider-content" style={{minHeight: "0px"}}>
        <h2 className="pyn_title">{props.name}</h2>
        <span className="pyn_tagline">{props.tagline}</span>
      </div>
    </header>
  )
}
