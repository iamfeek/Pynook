import React from 'react';
import {Session} from 'meteor/session';
import NavbarAccountDropdown from './NavbarAccountDropdown'

export default NavbarAccountItem = props => {
  if(Meteor.user()){
  return(
    <li><a className="dropdown-button">{Meteor.user().username}</a></li>
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
