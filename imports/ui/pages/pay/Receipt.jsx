import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Transactions} from '/imports/api/transactions';
import Loading from '/imports/ui/components/utils/Loading';

const Receipt = props => {
  if(props.loading) return <Loading />
  if(props.transaction.length < 1) return <NoAccess />

  return(
    <div id="receipt">
      <PageHeader src="/receipt.jpg" title="Receipt" />

      <div className="row">
        <div className="col s12 center">
          <h2 className="hide-on-large-only">Receipt</h2>

          <h4>Thank you for your purchase!</h4>
          <a href={FlowRouter.path("orders.my-orders")}>View Your Orders</a>
        </div>
      </div>
    </div>
  )
}

export default createContainer(({id}) => {
  DocHead.setTitle("Receipt - Pynook");

  let handle = Meteor.subscribe("transactions.single", id);
  let transaction = Transactions.findOne({_id: id});

  return{
    loading: !(handle.ready() && transaction),
    transaction: transaction
  }
}, Receipt)
