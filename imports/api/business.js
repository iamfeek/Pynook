import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

if (Meteor.isServer) {
  Meteor.methods({
    "business.convert"(){
      console.log("Converting");
    }
  })
}
