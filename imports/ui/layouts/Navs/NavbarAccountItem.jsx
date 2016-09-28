import React from 'react';
import {Session} from 'meteor/session';
import NavbarAccountDropdown from './NavbarAccountDropdown'

export default NavbarAccountItem = props => {
  if(props.user){
  return(
    <li><a className="dropdown-button" href="#!" data-constrainWidth="false" data-beloworigin="true" data-hover="true" data-activates="accountDropdown" ref={() => $('.dropdown-button').dropdown({beloworigin: true})}>{Meteor.user().username} <i className="fa fa-caret-down" aria-hidden="true"></i></a></li>
  )
} else {
  return(
    <li onClick={() => {
        Session.set("back", FlowRouter.getRouteName());
        FlowRouter.go("login");
      }}>
      <a>
        Login/Signup
      </a>
    </li>
  )
}

}
