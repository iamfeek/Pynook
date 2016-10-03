import React from 'react';

export default NavbarAccountDropdown = props => {
  return(
    <ul id="accountDropdown" className="dropdown-content navDropdowns" data-alignment="center" data-constrainwidth="false" style={{width: "300px"}}>

      {Roles.userIsInRole(Meteor.userId(), "admin") ?
        <li><a href={FlowRouter.path("admin.dashboard")}>Admin Panel</a></li>
        :
        null
      }

      {Meteor.user() ? <li><a href={FlowRouter.path("profile.my-pyns")}>My Pyns</a></li> : null}
      {Meteor.user() ? <li><a href={FlowRouter.path("orders.my-orders")}>My Orders</a></li> : null}



      {Roles.userIsInRole(Meteor.userId(), "business") ?
        <li className="divider"></li>
        :
        null
      }

      {Roles.userIsInRole(Meteor.userId(), "business") ?
        <li><a className="subheader" style={{color: "#333 !important"}}>My Business</a></li>
        :
        null
      }
      {Roles.userIsInRole(Meteor.userId(), "business") ?
        <li><a href={FlowRouter.path("business.my-orders")}>Orders</a></li>
        :
        null
      }
      {Roles.userIsInRole(Meteor.userId(), "business") ?
        <li><a href={FlowRouter.path("business.my-listings")}>Listings</a></li>
        :
        null
      }
      {Roles.userIsInRole(Meteor.userId(), "business") ?
        <li><a href={FlowRouter.path("business.my-profile")}>Profile</a></li>
        :
        null
      }


      {Meteor.user() ? <li className="divider"></li> : null}

      {Meteor.user() ? <li><a onClick={() => {Meteor.logout()}}>Logout</a></li> : null}
    </ul>
  )
}
