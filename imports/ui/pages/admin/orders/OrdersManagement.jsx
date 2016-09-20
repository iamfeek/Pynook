import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import '/imports/ui/components/utils';
import AdminOrdersTable from '/imports/ui/components/admin/orders/AdminOrdersTable';
import {Orders} from '/imports/api/orders';

const OrdersManagement = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let orders = props.orders;
  return(
    <div id="ordersManagement">
      <PageHeader src="/orders-management.jpg" title="Orders Management" />

      <div className="row">
        <div className="col s12 l10 offset-l1">
          <AdminOrdersTable orders={orders} />
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Orders Management - Pynook")
  let handle = Meteor.subscribe("orders.unpaid");
  let orders = Orders.find().fetch();

  return{
    loading: !(handle.ready() && orders),
    orders: orders
  }
}, OrdersManagement)
