import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import CategoryTiles from '/imports/ui/components/homepage/CategoryTiles.jsx';
import TypeTiles from '/imports/ui/components/homepage/TypeTiles.jsx';
import CommunityTiles from '/imports/ui/components/homepage/CommunityTiles';
import SearchBar from '/imports/ui/components/search/SearchBar';

export default Home = props => {
  return(
    <div>
      <div id="cover" className="row valign-wrapper" style={{overflowY: "hidden"}}>
        <div className="overlay" />
        <div id="search-wrapper" className="col s12 valign centerByMargin">
          <h2 className="white-text center">Get Personal</h2>
          <SearchBar />
        </div>
      </div>

      <div className="wrapper striped" style={{marginBottom: "0px", zIndex: "20"}}>
        <div className="row valign-wrapper">
          <TypeTiles />
        </div>
      </div>

      <div className="wrapper striped" style={{background: "#f9f9f9", marginBottom: "0px"}}>
        <div className="row valign-wrapper">
          <CategoryTiles />
        </div>
      </div>

      <div className="wrapper">
        <div className="row valign-wrapper">
          <CommunityTiles />
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Pynook - Get Personal");

  return {}
}, Home)
