import React from 'react';

export default NavbarAccountDropdown = props => {
  return(
    <ul id="accountDropdown" className="dropdown-content navDropdowns" data-constrainwidth="false" style={{width: "300px"}} ref={() => $('#accountDropdownButton').dropdown()}>

      {Roles.userIsInRole(Meteor.userId(), "admin") ?
        <li><a href={FlowRouter.path("admin.dashboard")}>Admin Panel</a></li>
        :
        null
      }
      <li><a href={FlowRouter.path("profile.dashboard")}>Dashboard</a></li>
      <li><a href={FlowRouter.path("profile.my-pyns")}>My Pyns</a></li>
      <li><a href={FlowRouter.path("orders.my-orders")}>My Orders</a></li>
      <li>
        <a href={FlowRouter.path("business.dashboard")}>
          {Roles.userIsInRole(Meteor.userId(), "business") ?
            "My Business"
            :
            "Start Business"
          }
        </a>
      </li>

      {Roles.userIsInRole(Meteor.userId(), "business") ?
        <li><a href={FlowRouter.path("business.my-listings")}>My Listings</a></li>
        :
        null
      }
      <li className="divider"></li>
      <li><a onClick={() => {Meteor.logout()}}>Logout</a></li>
    </ul>
  )
}
