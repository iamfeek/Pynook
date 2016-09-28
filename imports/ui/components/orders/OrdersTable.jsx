import React from 'react';
import OrderRemarks from './OrderRemarks';
import OrderItemHeader from './OrderItemHeader';

export default OrdersTable = props => {
  let orders = props.orders;
  let type = props.type;
  return(
    <ul className="collapsible" data-collapsible="accordion" ref={() => $('.collapsible').collapsible()}>
      {orders.map(o => <OrderItem item={o} key={o._id} />)}
    </ul>
  )
}

const OrderItem = props => {
  let item = props.item;
  return(
    <li>
      <div className="collapsible-header">
        <OrderItemHeader order={item} />
      </div>

      <div className="collapsible-body center">
        {item.remarks != "" ? <OrderRemarks remarks={item.remarks}/> : <h5>No remarks</h5>}


        {item.status == "received" ? <p>Enjoy your new item!</p> : <p>{item.description}</p>}

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
