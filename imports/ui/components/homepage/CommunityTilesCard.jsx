import React from 'react';

export default CommunityTilesCard = props => {
  let card = props.card;
  return(
    <div className="col s12 l4">
      <div className="community-tiles-card card-panel center" style={{"height": "300px"}}>
        <h5 className="header" style={{height: "40px"}}>{card.header}</h5>
        <p style={{marginTop: "40px"}}>
          {card.body}
        </p>
      </div>
    </div>
  )
}
