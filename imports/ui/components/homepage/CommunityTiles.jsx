import React from 'react';
import CommunityTilesCard from './CommunityTilesCard';

export default CommunityTiles = props => {
  let cards = [
    {
      header: "For Travellers",
      body: "Travelling to a region that you're not familiar with? We've got you covered!"
    },
    {
      header: "For Neighbourhoods",
      body: "Are you bored of your neighbourhood? We can help you unlock more of it!"
    },
    {
      header: "For Businesses",
      body: "Are you a home business owner? Click here to find out how to increase your revenue!"
    },
  ]
  return(
    <div id="communityTiles" className="col s12 l10 offset-l1 valign">
      <h5 className="center">Find your way</h5>
      <h3 className="center" style={{marginTop: "-13px"}}>Around Pynook</h3>

      <div className="row">
        {cards.map((c, i) => <CommunityTilesCard card={c} key={i}/>)}
      </div>
    </div>
  )
}