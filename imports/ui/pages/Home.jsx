import React from 'react';

import CategoryTiles from '../components/homepage/CategoryTiles.jsx';
import TypeTiles from '../components/homepage/TypeTiles.jsx';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    $("body").css("background-image", "url('/serendipity.jpg')");
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
        <div id="cover" className="valign-wrapper" style={{width: "100%", height: "90vh"}}>
          <div className="valign centerByMargin" style={{marginTop: "50vh"}}>
            <h2 className="white-text">Get Personal</h2>
            <div>
              <form>
                <div className="input-field">
                  <input name="search" type="text" placeholder="What are you searching for?"/>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="wrapper striped">
          <div className="row" style={{padding: "50px"}}>
            <TypeTiles />
          </div>
        </div>

        <div className="wrapper">
          <div className="row" style={{padding: "50px"}}>
            <CategoryTiles />
          </div>
        </div>
      </div>
    )
  }
}
