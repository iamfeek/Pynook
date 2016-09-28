import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Orders = new Mongo.Collection('orders');

if (Meteor.isServer) {
  Meteor.publish("orders.pending", function(){
    return Orders.find({buyer: this.userId, status: {$not: /received/}})
  });

  Meteor.publish("orders.done", function(){
    return Orders.find({buyer: this.userId, status: "received"})
  });

  Meteor.publish("orders.forBusiness", function(){
    businessId = Meteor.call("business.getId", this.userId);
    return Orders.find({business: businessId});
  });

  Meteor.publish("orders.unpaid", function(){
    let isAdmin = Roles.userIsInRole(this.userId, "admin");

    if(isAdmin){
      return Orders.find({status: "received", paymentStatus: "unpaid"});
    } else{
      throw new Meteor.Error(500, "Access Denied");
    }
  })

  Meteor.publish("orders.single", orderId => {
    return Orders.find({_id: orderId});
  })

  Meteor.methods({
    "orders.get"(orderId){
      return Orders.findOne({_id: orderId});
    },

    "orders.updateTransaction"(orderId, transactionId){
      return Orders.update({_id: orderId}, {$set: {lastModified: new Date, transactionId: transactionId, paymentStatus: "paid"}});
    },

    "orders.updateRemark"(orderId, remark){
      check(orderId, String);
      check(remark, String);

      return Orders.update({_id: orderId}, {$set: {remarks: remark}});
    },

    "orders.create"(order){
      console.log("Incoming order Creation from user: " + this.userId)
      let shippingInfo = order.shippingInfo;
      check(order.quantity, Number);
      check(order.listingId, String)
      check(order.businessId, String)
      // check(shippingInfo.email, String);
      // check(shippingInfo.name, String);
      // check(shippingInfo.address, String);
      // check(shippingInfo.block, String);
      // check(shippingInfo.unit, String);
      // check(shippingInfo.postal, Number);

      order.shippingInfo = {};
      order.createdAt = new Date();
      order.listingName = Meteor.call("pyns.getListingName", order.listingId);
      order.buyer = this.userId;
      order.buyerEmail = Meteor.call("users.getEmail", this.userId);
      order.businessEmail = Meteor.call('business.getEmail', order.businessId); //should be businessId.
      order.status = "pending";
      order.orderedAt = new Date();
      order.lastModified = new Date();
      order.paymentStatus = "unpaid";
      order.remarks = "";
      // console.log(JSON.stringify(order, null, 2))
      return Orders.insert(order);
    },
    'orders.updateStatus'(orderId, status){
      check(orderId, String);
      check(status, String);

      let businessId = Meteor.call("business.getId", this.userId);

      return Orders.update({_id: orderId, business: businessId}, {$set: {status: status}});
    },

    'orders.hasReceived'(orderId){
      return Orders.update({_id: orderId}, {$set: {status: "received", receivedDate: new Date()}})
    },
  })
}
