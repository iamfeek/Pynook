import React from 'react';

import CategoryTiles from '../components/homepage/CategoryTiles.jsx';
import TypeTiles from '../components/homepage/TypeTiles.jsx';
import SearchBar from '/imports/ui/components/search/SearchBar';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    DocHead.addMeta({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    });
    bSize = "100% " + $(window).height()+"px"
    cSize = $(window).height() + "px";
    $("body").css("background-image", "url('/home.jpg')");
    $("body").css("background-size", "cover");
    $("body").css("background-repeat", "no-repeat");
    $("#cover").css("height", cSize)
    $("nav").css("border-color", "transparent");
    $("nav").css("background-color", "transparent");
    $("nav .brand-logo").css("color", "#fff");
    $("nav .button-collapse").css("color", "#fff");
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
    $("nav .button-collapse").css("color", "black");
    $("nav ul a").css("color", "");
  }

  render(){
    return(
      <div>
        <div id="cover" className="row valign-wrapper">
          <div id="search-wrapper" className="col s12 valign centerByMargin">
            <h2 className="white-text center">Get Personal</h2>
            <SearchBar />
          </div>
        </div>

        <div className="row wrapper striped" style={{marginBottom: "0px"}}>
          <div className="wider-content col s12">
            <TypeTiles />
          </div>
        </div>

        <div className="row wrapper" style={{background: "#f9f9f9", marginBottom: "0px"}}>
          <div className="wider-content col s12">
            <CategoryTiles />
          </div>
        </div>
      </div>
    )
  }
}
