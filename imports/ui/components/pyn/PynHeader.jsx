import React from 'react';

export default PynHeader = props => {
  return(
    <header className="pyn_header">
      <div className="wider-content">
        <div className="pyn_breadcrumb">
          <a href={FlowRouter.path("pyns")}>Pyns </a>
          <span className="pyn_breadcrumb_arrow">&gt;&gt;</span>
          <a href=""> {props.category}</a>
        </div>

        <h1 className="pyn_title">{props.name}</h1>
        <span className="pyn_tagline">{props.tagline}</span>
      </div>
    </header>
  )
}
