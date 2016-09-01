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
    },
    'users.getUsername'(id){
      check(id, String);
      return Meteor.users.find({_id: id}, {username: 1});
    }
  });
}
