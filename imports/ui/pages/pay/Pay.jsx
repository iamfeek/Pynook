import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Orders} from '/imports/api/orders';
import '/imports/ui/components/utils';
import CardDetails from '/imports/ui/components/pay/CardDetails';
var braintree = require('braintree-web');
import {Session} from 'meteor/session'
const Pay = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let order = props.order;
  return(
    <div id="pay">
      <PageHeader src="/pay.jpg" title="Checkout" />


      <div className="row">
        <div className="col s12 l6 offset-l3 center">
          <h2 id="header">Payment Options</h2>
          <Loading />

          <div id="paymentPanel">
            <div id="paypal-container" ref={() => {Session.get("nonce") ? null : getToken(order._id)}} />
            {props.nonce ? <button className="btn btn-flat blue white-text" onClick={() => pay(Session.get("nonce"), order._id)}>Pay Now</button> : null}
          </div>
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
      $("#paymentPanel").css("display", "block");
      braintree.setup(clientToken, 'custom', {
        paypal: {
          container: "paypal-container",
        },
        onPaymentMethodReceived: obj => {
          // console.log(Session.get("nonce"))
          Session.set("nonce", obj.nonce);
          // console.log(Session.get("nonce"))
          pay(obj.nonce, orderId)
        }
      })
    }
  })
}

const pay = (nonce, orderId) => {
  if(!nonce){
    Bert.alert("No token available. Please pick a payment option.", "danger");
    return false;
  }
  $("#header").html("Processing your payment...");
  $("#paymentPanel").css("display", "none");
  $("#loading").css("display", "block");
  Meteor.call("payments.pay", nonce, orderId, (err, res) => {
    err ? Bert.alert("Error: " + err, "danger") : responseHandler(res);
  });
}

const responseHandler = res => {
  console.log(res)
  $("#loading").css("display", "none")
  $("#paymentPanel").css("display", "block");
  if(res.status === "success"){
    Bert.alert("Transaction completed! Thank you!", "success");
    FlowRouter.go("receipt", {id: res.message})
  } else{
    if(res.status == "restart") location.reload();
    Bert.alert("Something went wrong! Check console.", "danger");
    console.log(res);
  }
}

export default createContainer(({orderId}) => {
  DocHead.setTitle("Checkout - Pynook");


  let handle = Meteor.subscribe("orders.single", orderId);
  let order = Orders.findOne();

  let nonce = Session.get("nonce");

  return{
    loading: !(handle.ready() && order),
    order: order,
    nonce: nonce
  }
}, Pay);
