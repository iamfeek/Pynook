import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';
import '/imports/ui/components/utils';
import CardDetails from '/imports/ui/components/pay/CardDetails';
var braintree = require('braintree-web');

const Pay = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let order = props.order;
  return(
    <div id="pay">
      <PageHeader src="/pay.jpg" title="Checkout" />


      <div className="row">
        <div className="col s12 l6 offset-l3">
          <h2 id="header" className="center">Payment Options</h2>
          <Loading />
          <div id="paypal-container" ref={() => getToken(order._id)} />
        </div>
      </div>
    </div>
  )
}


const getToken = orderId => {
  Meteor.call("payments.getClientToken", (err,clientToken) => {
    if(err) Bert.alert("Error while generating token!", "danger");
    if(!err){
      $("#loading").css("display", "none")
      braintree.setup(clientToken, 'custom', {
        paypal: {
          container: "paypal-container",
        },
        onPaymentMethodReceived: obj => pay(obj.nonce, orderId)
      })
    }
  })
}

const pay = (nonce, orderId) => {
  $("#header").html("Processing your payment...");
  $("#loading").css("display", "block");
  Meteor.call("payments.pay", nonce, orderId, (err, res) => {
    responseHandler(res);
  });
}

const responseHandler = res => {
  console.log(res)
  $("#loading").css("display", "none")
  if(res.status === "success"){
    alert("YOU ARE IN!")
    FlowRouter.go("payments.receipt", )
  } else{
    Bert.alert("Something went wrong! Check console.", "danger");
    console.log(res);
  }
}

export default createContainer(({orderId}) => {
  DocHead.setTitle("Checkout - Pynook");
  DocHead.addMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });

  let handle = Meteor.subscribe("orders.single", orderId);
  let order = Orders.findOne();

  return{
    loading: !(handle.ready() && order),
    order: order
  }
}, Pay);
