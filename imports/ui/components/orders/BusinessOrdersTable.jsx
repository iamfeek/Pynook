import React from 'react';
import PaymentStatus from './PaymentStatus'
import CollapsibleBody from '/imports/ui/components/utils/CollapsibleBody'
import OrderInfo from './OrderInfo';
import OrderItemHeader from './OrderItemHeader';

export default OrdersTable = props => {
  let orders = props.orders;
  return(
    <ul className="collapsible" data-collapsible="accordion" ref={() => $('.collapsible').collapsible()}>
      {orders.map(o => <BusinessOrderItem item={o} key={o._id} />)}
    </ul>
  )
}

const BusinessOrderItem = props => {
  let item = props.item;
  return(
    <li>
      <div className="collapsible-header">
        <OrderItemHeader order={item} />
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
