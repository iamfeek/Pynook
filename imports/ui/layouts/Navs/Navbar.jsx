import React from 'react';
import NavbarAccountItem from './NavbarAccountItem'
import NavbarAccountDropdown from './NavbarAccountDropdown'

export default class Navbar extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      name: Meteor.user() ? Meteor.user().emails[0].address : null
    }
  }

  componentDidMount(){
    //dropdown menu's fade in on hover.
    $(".dropdown-button").dropdown({
      hover: true,
      beloworigin: true
    });
  }

  render(){
    return(
      <div id="navbar-wrapper" className="navbar-fixed">
        <nav>
          <link rel="icon" sizes="16x16 32x32" href="/favicon.ico?v=2" />
          <NavbarAccountDropdown />
          <ul id="newbieDropdown" className="dropdown-content">
            <li><a href="#!">Travellers</a></li>
            <li><a href="#!">Businesses</a></li>
            <li><a href="#!">Neighbourhoods</a></li>
          </ul>
          <div className="nav-wrapper ">
            <a href={FlowRouter.path("home")} className="brand-logo" style={{marginLeft: "25px"}}>Pynook</a>
            <ul className="right hide-on-med-and-down" style={{marginRight: "25px"}}>
              <li><a className="dropdown-button" href="#!" data-constrainWidth="false" data-beloworigin="true" data-hover="true" data-activates="newbieDropdown">Newbie <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
              <NavbarAccountItem />
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
