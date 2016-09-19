import React from 'react';
import Status from './Status'
import PaymentStatus from './PaymentStatus'
import CollapsibleBody from '/imports/ui/components/utils/CollapsibleBody'
import OrderInfo from './OrderInfo';

export default OrdersTable = props => {
  let orders = props.orders;
  return(
    <ul className="collapsible col s12 l8 offset-l2" data-collapsible="accordion" ref={() => $('.collapsible').collapsible()}>
      {orders.map(o => <BusinessOrderItem item={o} key={o._id} />)}
    </ul>
  )
}

const BusinessOrderItem = props => {
  let item = props.item;
  return(
    <li>
      <div className="collapsible-header">
        <div className="col s4 center">
          {item.title}
        </div>

        <div className="col s2 center">
          {item.orderedAt.getDate()}/{item.orderedAt.getMonth()}/{item.orderedAt.getFullYear()}
        </div>

        <div className="col s2 center">
          Qty: {item.quantity}
        </div>

        <div className="col s4 center">
          <Status status={item.status} />
        </div>
      </div>
      {
        item.status != "received" ?
        <CollapsibleBody content={<OrderInfo item={item} />} />
        :
        <CollapsibleBody content={<PaymentStatus status={item.paymentStatus} />} />
      }

  </li>
)
}

// {
//   item.status != "received" ?
//   <CollapsibleBody content={<OrderInfo item={item} />} />
//   :
//   <CollapsibleBody content={<PaymentStatus status={item.paymentStatus} />} />
// }
