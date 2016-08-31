import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'users.getUsername'(id){
    check(id, String);
    return Meteor.users.find({_id: id}, {username: 1});
  }
});
