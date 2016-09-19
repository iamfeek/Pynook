import React from 'react';

export default OrderStatus = props => {
  switch(props.status){
    case "pending":
    return <span className="blue-text">{props.status.toUpperCase()}</span>
    case "acknowledged":
    return <span className="red-text">{props.status.toUpperCase()}</span>
    case "received":
    return <span className="green-text">{props.status.toUpperCase()}</span>
    case "unpaid":
    return <span className="red-text">{props.status.toUpperCase()}</span>
    case "paid":
    return <span className="green-text">{props.status.toUpperCase()}</span>

    default:
    return <span>{props.status.toUpperCase()}</span>
  }
}
