import React from 'react';
import BusinessOrderStatusSelect from './BusinessOrderStatusSelect';
import ShippingInfo from './ShippingInfo';

export default OrderInfo = props => {
  let item = props.item;
  return(
    <span>
      <h5>{item.buyerEmail}</h5>
      <ShippingInfo shipping={item.shippingInfo} />
      <BusinessOrderStatusSelect id={item._id} status={item.status}/>
    </span>
  )
}
