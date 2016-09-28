import React from 'react';
import OrderRemarks from './OrderRemarks';
import OrderItemHeader from './OrderItemHeader';
import Status from './Status'

export default OrdersTable = props => {
  let orders = props.orders;
  let type = props.type;
  return(
    <table className="responsive-table striped center">
      <thead>
        <tr>
          <th data-field="id">Name</th>
          <th data-field="price">Quantity</th>
          <th data-field="email">Email</th>
          <th className="remarksHeight" data-field="action">Remarks</th>
          <th className="actionHeight" data-field="status">Action</th>
        </tr>
      </thead>

      <tbody>
        {orders.map(o => <OrderItemRow order={o} key={o._id} />)}
      </tbody>
    </table>
  )
}

const OrderItemRow = props => {
  let order = props.order;

  return(
    <tr>
      <td>{order.listingName}</td>
      <td>{order.quantity}</td>
      <td>{order.businessEmail}</td>
      <td className="remarksHeight paddingZero">{order.remarks != "" ? <OrderRemarks remarks={order.remarks}/> : <p>No remarks</p>}</td>
      <td className="actionHeight paddingZero">
        {order.status == "delivered" ? <a className="btn btn-flat red white-text" onClick={() => received(order._id)}>I have received!</a> : <Status status={order.status} />}
        <br></br><br></br>
        <a className="btn btn-flat blue white-text" href={FlowRouter.path("pyn", {id: order.listingId})}>View</a>
      </td>
    </tr>
  )
}



const received = id => {
  if(confirm("Are you sure you have received the item?")){
    Meteor.call("orders.hasReceived", id);
    Bert.alert("Great! Enjoy your new item! We will now release the payment.", "info", "growl-bottom-right");
  }
}
