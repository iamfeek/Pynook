import React from 'react';

export default NavbarAccountDropdown = props => {
  return(
    <ul id="accountDropdown" className="dropdown-content navDropdowns" data-constrainwidth="false" style={{width: "300px"}}>
      <li><a href={FlowRouter.path("profile.dashboard")}>Dashboard</a></li>
      <li><a href={FlowRouter.path("profile.my-pyns")}>My Pyns</a></li>
      {Roles.userIsInRole(Meteor.userId(), "admin") ?
        <li><a href={FlowRouter.path("admin.dashboard")}>Admin Panel</a></li>
        :
        null
      }
      <li className="divider"></li>
      <li><a onClick={() => {Meteor.logout(() => {props.instance.forceUpdate()})}}>Logout</a></li>
    </ul>
  )
}
