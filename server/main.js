import { Meteor } from 'meteor/meteor';

import '/imports/api/pyns.js';

Meteor.startup(() => {
  // BrowserPolicy.content.allowDataUrlForAll();
  // BrowserPolicy.content.allowInlineStyles();
  // BrowserPolicy.content.allowInlineScripts();
  BrowserPolicy.content.allowOriginForAll('*');
});
