import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavbarAccountItem from './NavbarAccountItem'
import NavbarAccountDropdown from './NavbarAccountDropdown'
import BusinessDropdown from './BusinessDropdown';
import SideNav from './SideNav';
import DesktopSideNav from './DesktopSideNav';

const Navbar = props => {
  const businessDropdownRender = () => {
    if(props.user){
      if(Roles.userIsInRole(props.user._id, "business")){
        return <li><a className="dropdown-button" href="#!" data-activates="businessDropdown">My Business <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
      } else {
        return <li><a href={FlowRouter.path("convert")}>Start a Business</a></li>
      }
    }
  }

  const getBusinessDropdown = () => {
    if(props.user){
      if(Roles.userIsInRole(props.user._id, "business")) return <BusinessDropdown />
    }
  }
  return(
    <div id="navbar-wrapper" style={{height: "50px"}}>
      <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: "0.5", zIndex: "-10"}} />
      <nav>
        <ul id="newbieDropdown" className="navDropdowns dropdown-content">
          <li><a href={FlowRouter.path("about") + "#business"}>Business</a></li>
          <li><a href={FlowRouter.path("about") + "#neighbourhoods"}>Neighbourhoods</a></li>
          <li><a href={FlowRouter.path("about") + "#travellers"}>Travellers</a></li>
        </ul>

        <SideNav user={Meteor.user()}/>
        <DesktopSideNav user={Meteor.user()} />
        <div className="nav-wrapper ">
          <img className="hide-on-med-and-down" src="/logo.png" id="logo" style={{height: "30px", marginLeft: "10px", marginTop: "8px"}}/>
          <a href={FlowRouter.path("home")} className="brand-logo left">Pynook</a>
          <a href="#"
            data-activates="mobile-menu"
            className="button-collapse right"
            ref={() => $(".button-collapse").sideNav({edge: "right", closeOnClick: true})}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down" ref={() => $(".dropdown-button").dropdown({belowOrigin: true, hover: true, constrainWidth: false})}>
            <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
            <li><a className="dropdown-button" href={FlowRouter.path("about")} data-activates="newbieDropdown" data-constrainwidth="false">Newbie <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
            {props.user ? <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li> : null}
            {props.user ? <li><a href="#!" className="button-collapse show-on-large" data-activates="desktop-sidenav">{props.user.username}</a></li> : <li><a href={FlowRouter.go("login")}>Login/Signup </a></li>}
          </ul>
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
