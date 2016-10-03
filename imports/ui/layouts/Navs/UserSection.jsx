import React from 'react';

export default UserSection = props => {
  return(
    <span>
      {props.user ? <li><a className="subheader">{props.user.username}</a></li> : null}
      {props.user ? <li><a href={FlowRouter.path("dashboard")}>Dashboard</a></li> : null}
      {props.user ? <li><a href={FlowRouter.path("orders.my-orders")}>My Orders</a></li> : null}
      {props.user ? <li><div className="divider"></div></li> : null}
    </span>
  )
}
