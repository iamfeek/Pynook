import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Business = new Mongo.Collection('business');

if (Meteor.isServer) {
  Meteor.publish("business.self", function(){
    business = Business.find({owner: this.userId})
    return business;
  });

  Meteor.methods({
    "business.convert"(){
      Roles.addUsersToRoles(this.userId, "business");

      business = {
        owner: this.userId,
        createdAt: new Date(),
      }

      Business.insert(business);
      return Roles.userIsInRole(this.userId, "business");
    },

    "business.getId"(userId){
      return Business.findOne({owner: userId}, {$fields: {id:1}})._id;
    }
  })
}
