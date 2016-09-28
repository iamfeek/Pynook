import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';

import OrdersTable from '/imports/ui/components/orders/OrdersTable';
import UnconfirmedTable from '/imports/ui/components/orders/UnconfirmedTable';


const MyOrders = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let orders = props.orders;
  let confirmed = [];
  let unconfirmed = orders.filter(o => {
    if(o.paymentStatus == "unpaid"){
      return o;
    } else if(o.paymentStatus = "paid"){
      confirmed.push(o);
    }
  });

  console.log("Confirmed: " + confirmed.length);
  console.log("Unconfirmed: " + unconfirmed.length);

  return(
    <div id="myOrders">
      <PageHeader src="my-orders.jpg" title="My Orders" style={{backgroundPosition: "center 25%"}}/>

      <div className="row">
        <h3 className="center">{unconfirmed.length} Unconfirmed Orders</h3>

        <div className="col s12 l10 offset-l1 center">
          {unconfirmed.length > 0 ? <UnconfirmedTable orders={unconfirmed} /> : <h4>All clear! No unconfirmed orders!</h4>}
        </div>
      </div>

      <div className="row">
        <h2 className="center">{confirmed.length} order(s)</h2>

        <div className="col s12 l10 offset-l1 center">
          {confirmed.length > 0 ? <OrdersTable orders={confirmed} /> : <h4>You have no pending orders.</h4>}
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("My Orders - Pynook");


  let handle = Meteor.subscribe("orders.pending");
  let orders = Orders.find().fetch();

  return {
    loading: !(handle.ready() && orders),
    orders: orders
  }
}, MyOrders)
