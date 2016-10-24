import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import CategoryTiles from '/imports/ui/components/homepage/CategoryTiles.jsx';
import TypeTiles from '/imports/ui/components/homepage/TypeTiles.jsx';
import CommunityTiles from '/imports/ui/components/homepage/CommunityTiles';
import SearchBar from '/imports/ui/components/search/SearchBar';
import HomeSlider from '/imports/ui/components/homepage/HomeSlider';

export default Home = props => {
  return(
    <div className="row">
      <div className="col s12 overflowHidden paddingZero">
        <HomeSlider />
      </div>

      <div className="col s12 padding20 white borderBottomGray">
        <SearchBar />
      </div>

      <div className="col s12 home-tile">
        <TypeTiles />
      </div>

      <div className="col s12 white home-tile">
        <CategoryTiles />
      </div>

      <div className="col s12 home-tile">
        <CommunityTiles />
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Pynook - Get Personal");

  return {}
}, Home)
