import React from 'react';
import Status from './Status'

export default OrderItemHeader = props => {
  let order = props.order;

  return(
    <span>
      <div className="col s4 center">
        {order.listingName}
      </div>

      <div className="col s2 center">
        {order.orderedAt.getDate()}/{order.orderedAt.getMonth()}/{order.orderedAt.getFullYear()}
      </div>

      <div className="col s2 center">
        Qty: {order.quantity}
      </div>

      <div className="col s4 center">
        <Status status={order.status} />
      </div>
    </span>
  )
}
