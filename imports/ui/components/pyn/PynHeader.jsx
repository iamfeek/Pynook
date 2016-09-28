import React from 'react';

export default PynHeader = props => {
  return(
    <header className="pyn_header row">
      <div className="col s12 l10 offset-l1">
        <h2 className="pyn_title">{props.name}</h2>
        <span className="pyn_tagline">{props.tagline}</span>
      </div>

    </header>
  )
}
