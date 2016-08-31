import { Meteor } from 'meteor/meteor';

import '/imports/api/pyns.js';
import '/imports/api/reviews.js';
import '/imports/api/users.js';
import '/lib/seo.js'

Meteor.startup(() => {
  BrowserPolicy.content.allowDataUrlForAll();
  BrowserPolicy.content.allowInlineStyles();
  BrowserPolicy.content.allowInlineScripts();
  BrowserPolicy.content.allowOriginForAll('*');
});
