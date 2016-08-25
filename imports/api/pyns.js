import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Pyns = new Mongo.Collection('Pyns');

import {Roles} from 'meteor/alanning:roles'


if (Meteor.isServer) {


  Meteor.methods({
    'pyns.insert'(pyn){
      check(pyn.name, String);
      check(pyn.tagline, String);
      check(pyn.description, String);
      check(pyn.category, String);
      check(pyn.location, String);
      check(pyn.photos, [String]);

      pyn.createdAt = new Date();
      pyn.owner = this.userId;

      return Pyns.insert(pyn);
    }
  })

}
