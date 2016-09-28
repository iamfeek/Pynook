import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavbarAccountItem from './NavbarAccountItem'
import NavbarAccountDropdown from './NavbarAccountDropdown'
import SideNav from './SideNav';

const Navbar = props => {
  return(
    <div id="navbar-wrapper" className="navbar-fixed">
      <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: "0.5", zIndex: "-10"}} />
      <nav>
        <ul id="newbieDropdown" className="navDropdowns dropdown-content">
          <li><a href="#!">Travellers</a></li>
          <li><a href="#!">Businesses</a></li>
          <li><a href="#!">Neighbourhoods</a></li>
        </ul>

        <SideNav user={Meteor.user()}/>
        <div className="nav-wrapper ">
          <a href={FlowRouter.path("home")} className="brand-logo">Pynook</a>
          <a href="#"
            data-activates="mobile-menu"
            className="button-collapse show-on-large"
            ref={() => $(".button-collapse").off('click').sideNav({edge: "left", closeOnClick: true})}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default createContainer(() => {


  return {
    user: Meteor.user()
  }
}, Navbar);
