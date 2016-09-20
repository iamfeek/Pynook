import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Pyns = new Mongo.Collection('Pyns');

import {Roles} from 'meteor/alanning:roles'

if (Meteor.isServer) {
  Meteor.publish("pyns.approved", () => {
    return Pyns.find({approved: true});
  })

  Meteor.publish("pyns.self", function(){
    return Pyns.find({owner: this.userId});
  })

  Meteor.publish("pyns.single", id => {
    return Pyns.find({_id: id});
  })
  Meteor.publish("pyns.toApprove", () => {
    return Pyns.find({approved: false});
  })

  Meteor.methods({
    'pyns.insertListing'(listing){
      console.log("Incoming Listing Creation from user: " + this.userId)
      check(listing.name, String);
      check(listing.tagline, String);
      check(parseInt(listing.price), Number);
      check(listing.description, String);

      listing.createdAt = new Date();
      listing.owner = this.userId;
      listing.type = "listing";
      listing.approved = true;

      listing.business = Meteor.call("business.getId", this.userId);
      listing.address = Meteor.call("business.getAddressString", listing.business);//listing.business is the business ID at this point

      // console.log(JSON.stringify(listing, null, 2))
      return Pyns.insert(listing);
    },
    'pyns.insert'(pyn){
      check(pyn.name, String);
      check(pyn.tagline, String);
      check(pyn.description, String);
      check(pyn.category, String);
      check(pyn.type, String);
      check(pyn.latlng, Object);
      check(pyn.address, String);
      check(pyn.photos, [String]);

      pyn.createdAt = new Date();
      pyn.owner = this.userId;
      pyn.approved = false;
      pyn.type = "pyn";

      return Pyns.insert(pyn);
    },

    'pyns.approve'(id){
      console.log("Approving pyn: ", id)
      if(Roles.userIsInRole(this.userId, "admin")){
        return Pyns.update({_id: id}, {$set: {approved: true}});
      } else throw new Meteor.Error(400, "Access denied");
    },

    'pyns.edit'(pyn, id){
      console.log(JSON.stringify(pyn, null, 2));
      console.log(id);

      return Pyns.update({_id: id}, {$set: pyn});
    },
  });
}
