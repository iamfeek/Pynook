import React from 'react';
import Status from './Status';

export default PaymentStatus = props => {
  let status = props.status;
  return(
    <div className="paymentStatus">
      <h4 className="green-text">Order Received</h4>

      <h5>Status: <Status status={status} /></h5>
    </div>
  )
}
