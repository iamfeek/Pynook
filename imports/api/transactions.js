import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Transactions = new Mongo.Collection('transactions');

if (Meteor.isServer) {
  Meteor.publish("transactions.single", transactionId => {
    return Transactions.find({_id: transactionId});
  })
  Meteor.methods({
    "transactions.get"(transactionId){
      let transaction = Transactions.findOne({_id: transactionId});
      let order = Meteor.call("orders.get", transaction.orderId);
      let listing = Meteor.call("pyns.getListing", order.listingId);

      if(isOwner(transaction)){
        return {
          transaction: transaction,
          order: order,
          listing: listing
        }
      } else {
        throw new Meteor.Error(401, "Access Denied!");
      }
    },

    "transactions.insert"(orderId, paypal){
      let transaction = {};

      transaction.orderId = orderId;
      transaction.paypal = paypal;
      transaction.owner = this.userId;
      transaction.createdAt = new Date();
      transaction.lastModified = new Date();

      let transactionId = Transactions.insert(transaction);
      Meteor.call("orders.updateTransaction", transaction.orderId, transactionId);
      return transactionId;
    }
  })
}

const isOwner = transaction => {
  return transaction.owner === this.userId;
}
