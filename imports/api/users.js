import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {Accounts} from 'meteor/accounts-base';
import {Roles} from 'meteor/alanning:roles';

if(Meteor.isServer){
  Meteor.methods({
    'users.init'(){
      console.log("Added " + this.userId + " to default.");
      Roles.addUsersToRoles(this.userId, "default");
      Accounts.sendVerificationEmail(this.userId);


      // var cursor = Meteor.users.findOne({_id: this.userId}, {fields: {_id: 0, "emails.address": 1}});
      // console.log(cursor)
      // console.log(cursor.emails[0].address);

      // Meteor.call("email.send", )
    },
    'users.getUsername'(id){
      check(id, String);
      return Meteor.users.find({_id: id}, {username: 1});
    },
    'users.getEmail'(id){
      if(Roles.userIsInRole(this.userId, "admin")){
        var email = Meteor.users.findOne(
          {_id : id},
          {fields : {'emails.address': 1} }
        ).emails[0].address;
        return email;
      }
    },

    'users.addBusinessId'(businessId){
      Meteor.users.update({_id: this.userId}, { $set: {businessId: businessId} });
    },

    "users.getBusinessId"(userId){
      return Meteor.users.findOne({_id: userId}, {fields: {_id: 0, businessId: 1}}).businessId;
    }
  });
}
