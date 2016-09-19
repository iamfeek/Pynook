import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';

import OrdersTable from '/imports/ui/components/orders/OrdersTable';


const MyOrders = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  // let orders = [
  //   {
  //     _id: "1",
  //     title: "Order #1",
  //     description: "Order number one is order number one",
  //     status: "preparing",
  //     orderedAt: new Date()
  //   },
  //   {
  //     _id: "2",
  //     title: "Order #2",
  //     description: "Order number two is order number two",
  //     status: "shipped",
  //     orderedAt: new Date()
  //   }
  // ];
  let orders = props.orders;
  return(
    <div id="myOrders">
      <PageHeader src="my-orders.jpg" title="My Orders" style={{backgroundPosition: "center 25%"}}/>

      <div className="row">
        <h2 className="center"><span className="red-text">{orders.length}</span> Pending Orders</h2>

        <OrdersTable orders={orders} />
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
