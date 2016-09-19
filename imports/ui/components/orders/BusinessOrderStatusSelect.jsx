import React from 'react';

export default BusinessOrderStatusSelect = props => {
  let id = props.id;
  let status = props.status
  return(
    <p>
      <select id={id+"-status"} defaultValue={status} ref={() => $('select').material_select()}>
        <option value="" disabled>Order Status</option>
        <option value="pending">Pending</option>
        <option value="acknowledged">Acknowledged</option>
        <option value="delivered">Delivered</option>
      </select>
      <a className="btn btn-flat red white-text centerbyMargin" onClick={() => update(id)}>Update Order Status</a>
    </p>
  )
}


const update = id => {
  if(confirm("Are you sure you want to update?")){
    let status = $("#"+id+"-status").val();
    Meteor.call("orders.updateStatus", id, status)
    Bert.alert("Order status updated! Buyer will be notified", "info", "growl-bottom-right");
  }
}
