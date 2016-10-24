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

      <div className="col s12 paddingZero red" style={{paddingBottom: "15px !important"}}>
        <h3 className="center white-text">Find A Pyn</h3>
        <SearchBar />
      </div>

      <div className="col s12 paddingZero valign-wrapper">
        <TypeTiles />
      </div>

      <div className="col s12 paddingZero valign-wrapper">
        <CategoryTiles />
      </div>

      <div className="col s12 paddingZero valign-wrapper">
        <CommunityTiles />
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Pynook - Get Personal");

  return {}
}, Home)
