import React from 'react';
import Status from './Status'

export default OrdersTable = props => {
  let orders = props.orders;
  return(
    <ul className="collapsible col s12 l8 offset-l2" data-collapsible="accordion" ref={() => $('.collapsible').collapsible()}>
      {orders.map(o => <OrderItem item={o} key={o._id} />)}
    </ul>
  )
}

const OrderItem = props => {
  let item = props.item;
  return(
    <li>
      <div className="collapsible-header">
        <div className="col s4 center">
          {item.title}
        </div>

        <div className="col s4 center">
          <Status status={item.status} />
        </div>

        <div className="col s4 center">
          {item.orderedAt.getDate()}/{item.orderedAt.getMonth()}/{item.orderedAt.getFullYear()}
        </div>

      </div>
      <div className="collapsible-body center">
        <p>
          {item.description}
        </p>


        {item.status == "delivered" ? <p><a className="btn btn-flat red white-text" onClick={() => received(item._id)}>I have received!</a></p> : null}
      </div>
    </li>
  )
}

const received = id => {
  if(confirm("Are you sure you have received the item?")){
    Meteor.call("orders.hasReceived", id);
    Bert.alert("Great! Enjoy your new item! We will now release the payment.", "info", "growl-bottom-right");
  }
}
