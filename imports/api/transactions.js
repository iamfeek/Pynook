import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Transactions = new Mongo.Collection('transactions');

if (Meteor.isServer) {
  Meteor.methods({
    "transactions.insert"(transaction){
      return Transactions.insert(transaction);
    }
  })
}
