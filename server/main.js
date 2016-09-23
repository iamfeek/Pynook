import { Meteor } from 'meteor/meteor';

import '/imports/api/pyns.js';
import '/imports/api/reviews.js';
import '/imports/api/users.js';
import '/imports/api/email.js'
import '/imports/api/business.js'
import '/imports/api/plans.js'
import '/imports/api/orders.js'
import '/imports/api/payments.js'
import '/imports/api/transactions.js'
import '/lib/seo.js'


Meteor.startup(() => {
  process.env.MAIL_URL = "smtp://postmaster%40mg.pynook.com:blablabla@smtp.mailgun.org:587";
  BrowserPolicy.content.allowDataUrlForAll();
  BrowserPolicy.content.allowInlineStyles();
  BrowserPolicy.content.allowInlineScripts();
  BrowserPolicy.content.allowOriginForAll('*');
  // console.log(Meteor.settings.private.braintree.ACCESS_TOKEN);

  // Initialize Braintree connection:
});
