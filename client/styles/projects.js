import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export const Projects = new Mongo.Collection('projects');

if (Meteor.isServer) {
  Meteor.publish("projects.actives", function(){
    return Projects.find({isActive: true});
  });

  Meteor.publish("projects.single", function(slug){
    return Projects.find({slug: slug});
  });

  Meteor.publish("projects.local", function(country){
    return Projects.find({isActive: true, country: country}, {limit: 6});
  });

  Meteor.publish("projects.global", function(country){
    return Projects.find({isActive: true, country: {$ne: country}}, {limit: 3});
  })
}
