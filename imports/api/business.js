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
    "business.test"(){
      var geocoder = new google.maps.Geocoder();
    },
    "business.convert"(profile){
      let address = profile.address;
      check(profile.email, String);
      check(profile.name, String);
      check(address.block, String);
      check(address.street, String);
      check(address.unit, String);
      check(profile.hours, String);
      check(address.postal, Number);
      check(profile.latlng, Object);

      profile.owner = this.userId;
      profile.createdAt = new Date();
      profile.lastModified = new Date();

      Roles.addUsersToRoles(this.userId, "business");
      let id = Business.insert(profile);
      Meteor.call("users.addBusinessId", id)
      
      if(id) return Roles.userIsInRole(this.userId, "business");
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

    "business.getAddressString"(businessId){
      check(businessId, String);
      let business = Business.findOne({_id: businessId});
      let address = business.address;

      let addressString = "Block " + address.block + ", " + address.street + ", #" + address.unit + ", Singapore " + address.postal;
      console.log(addressString);
      return addressString
    },

    "business.getLatlng"(businessId){
      console.log("Latlng Request: " + businessId)
      check(businessId, String);

      let latlng = Business.findOne({_id: businessId}, {fields: {_id: 0, latlng: 1}});

      return latlng;
    }
  })



}
