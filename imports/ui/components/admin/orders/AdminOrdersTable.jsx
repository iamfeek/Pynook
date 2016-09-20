import React from 'react';
import CollapsibleBody from '/imports/ui/components/utils/CollapsibleBody';
import AdminPaymentInfo from './AdminPaymentInfo';

export default AdminOrdersTable = props => {
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
        <div className="col s6 center">
          {item.title}
        </div>

        <div className="col s6 center">
          {item.receivedDate.getDate()}/{item.receivedDate.getMonth()}/{item.receivedDate.getFullYear()}
        </div>
      </div>

      <CollapsibleBody content={<AdminPaymentInfo id={item._id} email={item.buyerEmail} status={item.paymentStatus} />}/>
    </li>
  )
}

const received = id => {
  if(confirm("Are you sure you have received the item?")){
    Meteor.call("orders.hasReceived", id);
    Bert.alert("Great! Enjoy your new item! We will now release the payment.", "info", "growl-bottom-right");
  }
}
