import React from 'react';

import CategoryTiles from '../components/homepage/CategoryTiles.jsx';
import TypeTiles from '../components/homepage/TypeTiles.jsx';
import SearchBar from '/imports/ui/components/search/SearchBar';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $("body").css("background-image", "url('/home2.jpg')");
    $("body").css("background-size", "100% 100vh");
    $("body").css("background-repeat", "no-repeat");
    $("nav").css("border-color", "transparent");
    $("nav").css("background-color", "transparent");
    $("nav .brand-logo").css("color", "#fff");
    $("nav ul a").css("color", "#fff");
    $("#navbar-wrapper").removeClass("navbar-fixed");
    $("nav").addClass("z-depth-0");
    DocHead.setTitle("Pynook - Get Personal");
  }

  componentWillUnmount(){
    $("body").css("background-image", "");
    $("#navbar-wrapper").addClass("navbar-fixed");
    $("nav").removeClass("z-depth-0");
    $("nav").css("border-color", "");
    $("nav").css("background-color", "");
    $("nav .brand-logo").css("color", "");
    $("nav ul a").css("color", "");
  }

  render(){
    return(
      <div>
        <div id="cover" className="valign-wrapper" style={{width: "100%", height: "100vh"}}>
          <div className="valign centerByMargin" style={{marginTop: "40vh"}}>
            <h2 className="white-text center">Get Personal</h2>
            <SearchBar />
          </div>
        </div>

        <div className="wrapper striped" style={{paddingBottom: "50px"}}>
          <div className="row wider-content">
            <TypeTiles />
          </div>
        </div>

        <div className="wrapper" style={{paddingTop: "60px"}}>
          <div className="row wider-content">
            <CategoryTiles />
          </div>
        </div>
      </div>
    )
  }
}
