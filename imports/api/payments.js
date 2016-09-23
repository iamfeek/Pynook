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
    var saleRequest = {
      amount: "10.00",
      paymentMethodNonce: nonce,
      options: {
        submitForSettlement: true
      }
    };

    let transactionResponse = new Future();

    gateway.transaction.sale(saleRequest, function (err, result) {
      console.log("Making request!")
      if (err) {
        console.log("ERROR: " + err)
        transactionResponse.return({status: "failed", message: err});
      } else if (result.success) {
        console.log("success")
        Meteor.bindEnvironment(transactionHandler(result.transaction))

      } else {
        console.log("Another error ", result.message)
        transactionResponse.return({status: "failed", message: result.message});
      }
    });

    const transactionHandler = transaction => {
      transaction.orderId = orderId;
      Meteor.call("transactions.insert", transaction, (err, res) => {
        if(err){
          transactionResponse.return({
            status: "failed",
            message: err
          });
          return;
        }

        if(res){
          transactionResponse.return({status: "success", message: "All done!"})
        }
      })
    }

    return transactionResponse.wait();
  }
});
