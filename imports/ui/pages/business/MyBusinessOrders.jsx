import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';

import BusinessOrdersTable from '/imports/ui/components/orders/BusinessOrdersTable';

const MyBusinessOrders = props => {
  if(props.loading) return <div className="row"><Loading /></div>

  let orders = props.orders;
  return(
    <div id="myBusinessOrders">
      <PageHeader src="/my-business-orders.jpg" title="Business Orders" />

      <div className="row">
        <h2 className="center"><span className="red-text">{orders.length}</span> Pending Orders</h2>


        <div className="col s12 l8 offset-l2">
          <BusinessOrdersTable orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Business Orders - Pynook")


  let handle = Meteor.subscribe("orders.forBusiness");
  let orders = Orders.find().fetch();

  return{
    loading: !(handle.ready() && orders),
    orders: orders
  }
}, MyBusinessOrders)
