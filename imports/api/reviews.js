import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Reviews = new Mongo.Collection("reviews");


if(Meteor.isServer){
  Meteor.publish("reviews.single", pynId => {
    return Reviews.find({pyn: pynId});
  });

  Meteor.methods({
    'reviews.insert'(review){
      check(review.pyn, String);
      check(review.title, String);
      check(review.description, String);
      review.createdAt = new Date();
      review.owner = this.userId;
      review.username = Meteor.users.findOne({_id: this.userId}, {fields: {_id: 0, username: 1}}).username;

      return Reviews.insert(review)
    }
  });
}
