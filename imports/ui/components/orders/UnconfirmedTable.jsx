import React from 'react';

export default UnconfirmedTable = props => {
  let orders = props.orders;

  return(
    <table className="responsive-table highlight center">
      <thead>
        <tr>
          <th data-field="id">Item Name</th>
          <th data-field="price">Quantity</th>
          <th data-field="action">Action</th>
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
    <tr onClick={() => FlowRouter.go("pyn", {id: order.listingId})}>
      <td>{order.listingName}</td>
      <td>${order.quantity}</td>
      <td><a className="btn btn-flat blue white-text" href={FlowRouter.path("pay", {id: order._id})}>Pay Now</a></td>
    </tr>
  )
}
