import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';

import OrdersTable from '/imports/ui/components/orders/OrdersTable';


const MyOrders = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>
  
  let orders = props.orders;
  return(
    <div id="myOrders">
      <PageHeader src="my-orders.jpg" title="My Orders" style={{backgroundPosition: "center 25%"}}/>

      <div className="row">
        <h2 className="center"><span className="red-text">{orders.length}</span> Pending Orders</h2>

        <div className="col s12 l8 offset-l2">
          <OrdersTable orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("My Orders - Pynook");
  DocHead.addMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });

  let handle = Meteor.subscribe("orders.self");
  let orders = Orders.find().fetch();

  return {
    loading: !(handle.ready() && orders),
    orders: orders
  }
}, MyOrders)
