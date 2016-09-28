import React from 'react';

export default SideNav = props => {
  return(
    <ul className="side-nav" id="mobile-menu">
      <li><a href={FlowRouter.path("pyns")}>Pyns</a></li>
      <li><a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></li>
      <li><div className="divider"></div></li>

      <li><a href={FlowRouter.path("newbie")}>Newbie</a></li>
      <li><a href="#">FAQ</a></li>

      <li><div className="divider"></div></li>
      {props.user ? <li><a className="subheader">{Meteor.user().username}</a></li> : null}
      {props.user ? <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li> : null}
      {props.user ? <li><a href={FlowRouter.path("orders.my-orders")}>My Orders</a></li> : null}
      {props.user ? <li><div className="divider"></div></li> : null}

      {props.user ? <li onClick={() => logout()}><a>Logout</a></li> : <li><a href={FlowRouter.go("login")}>Login/Register</a></li>}
    </ul>
  )
}

const logout = () => {
  if(confirm("Are you sure you want to logout?")){
    Meteor.logout(() => FlowRouter.go("home"))
  }
}
