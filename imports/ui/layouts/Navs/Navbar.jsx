import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavbarAccountItem from './NavbarAccountItem'
import NavbarAccountDropdown from './NavbarAccountDropdown'

const Navbar = props => {
  return(
    <div id="navbar-wrapper" className="navbar-fixed">
      <div style={{position: "absolute", width: "100%", height: "100%", backgroundColor: "black", opacity: "0.5", zIndex: "-10"}} />
      <nav>

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <ul id="newbieDropdown" className="navDropdowns dropdown-content">
          <li><a href="#!">Travellers</a></li>
          <li><a href="#!">Businesses</a></li>
          <li><a href="#!">Neighbourhoods</a></li>
        </ul>
        {props.user ? <NavbarAccountDropdown /> : null}

        <ul className="side-nav" id="mobile-menu">
          <li><a href={FlowRouter.path("pyns")}>Pyns</a></li>
          <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li>
          <li><a href={FlowRouter.path("newbie")}>Newbie</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
          <NavbarAccountItem user={props.user}/>
          <li><a href={FlowRouter.path("orders.my-orders")}>My Orders</a></li>
        </ul>

        <div className="nav-wrapper ">
          <a href={FlowRouter.path("home")} className="brand-logo">Pynook</a>
          <a href="#" data-activates="mobile-menu" className="button-collapse show-on-large" style={{color: "black", marginLeft:"10px", fontSize: "33px"}} ref={() => $(".button-collapse").off('click').sideNav({closeOnClick: true})}><i className="fa fa-bars" aria-hidden="true"></i></a>

          <ul className="right hide-on-med-and-down" style={{marginRight: "25px"}}>
            <li><a href={FlowRouter.path("pyns")}>Pyns</a></li>
            <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li>
            <li><a className="dropdown-button" href="#!" data-constrainWidth="false" data-beloworigin="true" data-hover="true" data-activates="newbieDropdown" ref={() => $('.dropdown-button').dropdown()}>Newbie <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
            <NavbarAccountItem user={props.user}/>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default createContainer(() => {
  DocHead.addLink({rel:"icon", sizes:"16x16 32x32", href:"/favicon.ico?v:2"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"57x57", href:"/apple-icon-57x57.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"60x60", href:"/apple-icon-60x60.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"72x72", href:"/apple-icon-72x72.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"76x76", href:"/apple-icon-76x76.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"114x114", href:"/apple-icon-114x114.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"120x120", href:"/apple-icon-120x120.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"144x144", href:"/apple-icon-144x144.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"152x152", href:"/apple-icon-152x152.png"});
  DocHead.addLink({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-icon-180x180.png"});
  DocHead.addLink({rel:"icon", type:"image/png", sizes:"192x192",  href:"/android-icon-192x192.png"});
  DocHead.addLink({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"});
  DocHead.addLink({rel:"icon", type:"image/png", sizes:"96x96", href:"/favicon-96x96.png"});
  DocHead.addLink({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"});
  DocHead.addLink({rel:"manifest", href:"/manifest.json"})

  return {
    user: Meteor.user()
  }
}, Navbar);
