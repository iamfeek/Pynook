import React from 'react';

export default PynCard = props => {
  let pyn = props.pyn;
  let type = pyn.type;
  let imageURL = pyn.photos[0]+"-/resize/313x192/";
  return(
    <div className="card">
      <div className="card-image clickable">
        <img className="activator" src={imageURL} />
        {pyn.price ? <span className="card-title price">${pyn.price}</span> : null}
      </div>

      <div className="card-content activator clickable">
        <p>{pyn.name}</p>
        <p className="truncate">{pyn.tagline ? pyn.tagline : "Irresistable!"}</p>
      </div>

      <div className="card-reveal">
        <span className="card-title">{pyn.name}<i className="fa fa-times right" /></span>
        <span dangerouslySetInnerHTML={insert(pyn.description)} />
      </div>

      <div className="card-action sticky-action">
        {props.action}
      </div>
    </div>
  )
}

const insert = d => {
  return {__html: d}
}
