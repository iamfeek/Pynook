import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Pyns = new Mongo.Collection('Pyns');
export const Reviews = new Mongo.Collection("reviews");

import {Roles} from 'meteor/alanning:roles'


if (Meteor.isServer) {
  Meteor.publish("pyns.all", () => {
    return Pyns.find({});
  })

  Meteor.publish("pyns.single", id => {
    return Pyns.find({_id: id});
  })

  Meteor.methods({
    'pyns.insert'(pyn){
      check(pyn.name, String);
      check(pyn.tagline, String);
      check(pyn.description, String);
      check(pyn.category, String);
      check(pyn.latlng, Object);
      check(pyn.address, String);
      check(pyn.photos, [String]);

      pyn.createdAt = new Date();
      pyn.owner = this.userId;

      return Pyns.insert(pyn);
    },
    'pyns.insertReview'(review){
      check(review.pyn, String);
      check(review.title, String);
      check(review.description, String);
      review.createdAt = new Date();
      review.owner = this.userId;

      return Reviews.insert(review)
    }
  })

}
