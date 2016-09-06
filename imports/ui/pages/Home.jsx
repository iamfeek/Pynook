import React from 'react';

import CategoryTiles from '../components/homepage/CategoryTiles.jsx';
import TypeTiles from '../components/homepage/TypeTiles.jsx';
import SearchBar from '/imports/ui/components/search/SearchBar';
import Navbar from '/imports/ui/layouts/Navs/Navbar';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    DocHead.addMeta({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    });
    DocHead.setTitle("Pynook - Get Personal");
  }

  render(){
    return(
      <div>
        <div id="cover" className="row valign-wrapper" style={{overflowY: "hidden"}}>
          <div className="overlay" />
          <div id="search-wrapper" className="col s12 valign centerByMargin">
            <h2 className="white-text center">Get Personal</h2>
            <SearchBar />
          </div>
        </div>

        <div className="row wrapper striped" style={{marginBottom: "0px", zIndex: "20"}}>
          <div className="wider-content col s12 l8 offset-l2">
            <TypeTiles />
          </div>
        </div>

        <div className="row wrapper" style={{background: "#f9f9f9", marginBottom: "0px"}}>
          <div className="wider-content col s12 l8 offset-l2">
            <CategoryTiles />
          </div>
        </div>
      </div>
    )
  }
}
