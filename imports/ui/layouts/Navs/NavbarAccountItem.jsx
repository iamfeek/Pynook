import React from 'react';
import {Session} from 'meteor/session';
import NavbarAccountDropdown from './NavbarAccountDropdown'

export default NavbarAccountItem = props => {
  if(Meteor.user()){
    setTimeout(() => {
      $('#accountDropdownButton').dropdown();
    }, 500)

  return(
    <span>
      <li id="accountDropdownButton" data-beloworigin="true" data-constrainwidth="true" data-activates="accountDropdown" data-hover="true">

        <a>
          {Meteor.user().username} <i className="fa fa-caret-down" aria-hidden="true"></i>
        </a>
      </li>
      <NavbarAccountDropdown instance={props.instance}/>
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
