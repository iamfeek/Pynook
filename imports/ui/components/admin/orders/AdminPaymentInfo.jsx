import React from 'react';
import Status from '/imports/ui/components/orders/Status'

export default AdminPaymentInfo = props => {
  return(
    <span className="adminPaymentStatus">
      <h5 className="center">{props.email}</h5>
      <Status status={props.status} />
      <p>
      <button onClick={() => release(props.id)} className="btn btn-flat center white-text green">Release Payment</button>
      </p>

    </span>
  )
}

const release = id => {
  Meteor.call("payments.release", id);
  Bert.alert("Payment release request has been made! You will receive a status email soon.", "info", "growl-bottom-right");
}
