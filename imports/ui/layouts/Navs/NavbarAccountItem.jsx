import React from 'react';
import {Session} from 'meteor/session';
import NavbarAccountDropdown from './NavbarAccountDropdown'

export default NavbarAccountItem = props => {
  if(props.user){
  return(
    <span>
      <li id="accountDropdownButton" data-beloworigin="true" data-constrainwidth="true" data-activates="accountDropdown" data-hover="true" ref={() => $(".dropdown-button").dropdown({hover: true,beloworigin: true})}>
        <a>
          {Meteor.user().username} <i className="fa fa-caret-down" aria-hidden="true"></i>
        </a>
      </li>
      <NavbarAccountDropdown />
    </span>

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
