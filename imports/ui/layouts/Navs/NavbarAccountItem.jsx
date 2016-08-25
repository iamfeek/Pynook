import React from 'react';
import {Session} from 'meteor/session';

export default NavbarAccountItem = props => {
  if(Meteor.user()){
    setTimeout(() => {
      $('#accountDropdownButton').dropdown();
    }, 500)

  return(
    <li id="accountDropdownButton" data-beloworigin="true" data-constrainwidth="true" data-activates="accountDropdown" data-hover="true">
      <a>
        {Meteor.user().emails[0].address}
      </a>
    </li>
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
