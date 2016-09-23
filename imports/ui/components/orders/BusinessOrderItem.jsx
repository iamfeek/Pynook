import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Status from './Status'
import PaymentStatus from './PaymentStatus'
import CollapsibleBody from '/imports/ui/components/utils/CollapsibleBody'
import OrderInfo from './OrderInfo';

const BusinessOrderItem = props => {
  let item = props.item;
  let name = props.name;
  return(
    <li>
      <div className="collapsible-header">
        <div className="col s4 center" id="name">
          {name}
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

export default createContainer(props => {
  Meteor.call("pyns.getListingName", props.item.listing);

  return{
    item: props.item,
    name: Meteor.call("pyns.getListingName", props.item.listing)
  }
}, BusinessOrderItem)
