import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Listings = new Mongo.Collection('listings');

if (Meteor.isServer) {
  Meteor.publish("listings.self", function(){
    // console.log("Listings.self sub")
    listings = Listings.find({owner: this.userId})
    return listings;
  });

  Meteor.methods({
    "listings.create"(listing){
      console.log("Incoming Listing Creation from user: " + this.userId)
      check(listing.name, String);
      check(parseInt(listing.price), Number);
      check(listing.description, String);

      listing.createdAt = new Date();
      listing.owner = this.userId;
      listing.business = Meteor.call("business.getId", this.userId);


      // console.log(JSON.stringify(listing, null, 2))
      return Listings.insert(listing);
    }
  })
}
