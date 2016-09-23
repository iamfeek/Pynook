import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';

import OrdersTable from '/imports/ui/components/orders/OrdersTable';


const PurchaseHistory = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let orders = props.orders;
  return(
    <div id="myOrders">
      <PageHeader src="my-orders.jpg" title="Purchase History" style={{backgroundPosition: "center 25%"}}/>

      <div className="row">
        <h2 className="center hide-on-large-only">Purchase History</h2>
        <h2 className="center">{orders.length} order(s)</h2>

        <div className="col s12 l10 offset-l1">
          <OrdersTable orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Purchase History - Pynook");

  let handle = Meteor.subscribe("orders.done");
  let orders = Orders.find().fetch();

  return {
    loading: !(handle.ready() && orders),
    orders: orders
  }
}, PurchaseHistory)
