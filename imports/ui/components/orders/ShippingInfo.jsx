import React from 'react';

export default ShippingInfo = props => {
  let shipping = props.shipping;
  return(
    <h6>
      {shipping.address}
      <br></br>
      {shipping.address2}
      <br></br>
      {shipping.unit}
      <br></br>
      {shipping.postal}
      <br></br>
      {shipping.country}
    </h6> 
  )
}
