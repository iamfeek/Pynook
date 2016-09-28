import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
var braintree = require('braintree');

var Future = Npm.require('fibers/future');
var Fiber  = Npm.require('fibers');


export const Payments = new Mongo.Collection('payments');

var gateway = braintree.connect({
  accessToken: Meteor.settings.private.braintree.ACCESS_TOKEN
})

Meteor.methods({
  'payments.init'(){
    console.log(this.userId)
    console.log(Meteor.isServer);
  },



  "payments.getClientToken"(){
    // console.log("Client Token Request")
    var clientToken = new Future();
    console.log("Generating Client Token");

    gateway.clientToken.generate({}, (err, res) => {
      if(err){
        clientToken.return(err)
      } else{
        // console.log(res)
        clientToken.return(res.clientToken)
      }
    });

    return clientToken.wait();
  },

  "payments.pay"(nonce, orderId){
    console.log("Making payment...");
    var saleRequest = {
      amount: "10.00",
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    };

    let transactionResponse = new Future();

    gateway.transaction.sale(saleRequest, Meteor.bindEnvironment(function (err, transactionResult) {
      if(err) transactionResponse.return({status: "failed", message: err});

      if(transactionResult) transactionHandler(transactionResult.transaction, orderId, transactionResponse);
    }));

    return transactionResponse.wait();
  }
});

const transactionHandler = (transaction, orderId, transactionResponse) => {
  console.log("Payment complete!")
  if(!transaction){
    transactionResponse.return({status: "restart", message: "There is no transaction object."});
    return;
  }

  console.log("Finalising transaction...");
  Meteor.call("transactions.insert", orderId, transaction, (err, res) => {
    err ? transactionResponse.return({status: "failed", message: err}) : transactionResponse.return({status: "success", message: res})
    console.log("Done!")
  })
}
