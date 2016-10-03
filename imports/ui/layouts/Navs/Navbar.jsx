import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavbarAccountItem from './NavbarAccountItem'
import NavbarAccountDropdown from './NavbarAccountDropdown'
import BusinessDropdown from './BusinessDropdown';
import SideNav from './SideNav';
import UserSection from './UserSection'

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
    <div id="navbar-wrapper" className="navbar-fixed">
      <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: "0.5", zIndex: "-10"}} />
      <nav>
        <ul id="newbieDropdown" className="navDropdowns dropdown-content">
          <li><a href={FlowRouter.path("about") + "#business"}>Business</a></li>
          <li><a href={FlowRouter.path("about") + "#neighbourhoods"}>Neighbourhoods</a></li>
          <li><a href={FlowRouter.path("about") + "#travellers"}>Travellers</a></li>
        </ul>

        <NavbarAccountDropdown />

        <SideNav user={Meteor.user()}/>
        <div className="nav-wrapper ">
          <img className="hide-on-med-and-down" src="/logo.png" id="logo" style={{height: "40px", marginLeft: "10px", marginTop: "10px"}}/>
          <a href={FlowRouter.path("home")} className="brand-logo left">Pynook</a>
          <a href="#"
            data-activates="mobile-menu"
            className="button-collapse right"
            ref={() => $(".button-collapse").off('click').sideNav({edge: "right", closeOnClick: true})}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down" ref={() => $(".dropdown-button").dropdown({belowOrigin: true, hover: true, constrainWidth: false})}>
            <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
            <li><a className="dropdown-button" href={FlowRouter.path("about")} data-activates="newbieDropdown" data-constrainwidth="false">Newbie <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
            {props.user ? <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li> : null}
            {props.user ? <li><a className="dropdown-button" href="#!" data-activates="accountDropdown">{props.user.username} <i className="fa fa-caret-down" aria-hidden="true"></i></a></li> : <li><a href={FlowRouter.go("login")}>Login/Signup </a></li>}
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
