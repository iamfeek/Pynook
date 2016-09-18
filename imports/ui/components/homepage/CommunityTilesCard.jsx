import React from 'react';

export default CommunityTilesCard = props => {
  let card = props.card;
  return(
    <div className="col s12 l4">
      <div className="community-tiles-card card-panel center">
        <h5 className="header">{card.header}</h5>
        <p style={{marginTop: "40px"}}>
          {card.body}
        </p>
      </div>
    </div>
  )
}
