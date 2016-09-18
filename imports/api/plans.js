import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Plans = new Mongo.Collection('plans');

if (Meteor.isServer) {
  Meteor.publish("plans.all", () => {
    return Plans.find({});
  });

  Meteor.publish("plans.active", () => {
    return Plans.find({isActive: true});
  })

  Meteor.methods({
    "plans.create"(plan){
      check(plan.title, String);
      check(plan.price, Number);
      check(plan.description, String);

      plan.createdAt = new Date();
      plan.lastModified = new Date();
      plan.modifiedBy = this.userId;
      plan.isActive = true;

      return Plans.insert(plan);
    }
  })
}
