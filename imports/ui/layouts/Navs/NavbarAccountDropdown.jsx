import React from 'react';

export default NavbarAccountDropdown = props => {
  return(
    <ul id="accountDropdown" className="dropdown-content navDropdowns">
      <li><a href="">Profile</a></li>
      <li><a href="">My Pyns</a></li>
      <li className="divider"></li>
      <li><a onClick={() => {Meteor.logout(() => {props.instance.forceUpdate()})}}>Logout</a></li>
    </ul>
  )
}
