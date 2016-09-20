import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Payments = new Mongo.Collection('payments');

if (Meteor.isServer) {
  Meteor.methods({
    "payments.release"(orderId){
      check(orderId, String);

      Meteor.call("orders.")

      return Listings.insert(listing);
    }
  })
}
