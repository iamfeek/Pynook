import React from 'react';

export default NavbarAccountDropdown = props => {
  return(
    <ul id="accountDropdown" className="dropdown-content">
      <li><a onClick={() => {Meteor.logout(() => {FlowRouter.go("home")})}}>Logout</a></li>
    </ul>
  )
}
