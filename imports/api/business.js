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
    "business.convert"(profile){
      Roles.addUsersToRoles(this.userId, "business");

      check(profile.email, String);
      check(profile.name, String);
      check(profile.block, String);
      check(profile.address, String);
      check(profile.unit, String);
      check(profile.hours, String);
      check(profile.postal, Number);

      profile.owner = this.userId;
      profile.createdAt = new Date();
      profile.lastModified = new Date();

      if(Business.insert(profile)) return Roles.userIsInRole(this.userId, "business");

    },

    "business.getId"(userId){
      check(userId, String);

      return Business.findOne({owner: userId}, {fields: {_id:1}})._id;
    },

    "business.getEmail"(businessId){

      if(Roles.userIsInRole(this.userId, "admin")){
        let result = Business.findOne({_id: businessId}, {fields: {email: 1}});
        console.log("Business Get Email - "+ businessId +" - Granted - ", result.email);
        return result.email;
      }
    },
  })



}
