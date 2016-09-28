import { Email } from 'meteor/email'
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
  "email.send"(to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});

Accounts.emailTemplates.from = "Pynook Accounts <accounts@pynook.com>";
Accounts.emailTemplates.verifyEmail = {
  subject(){
    return "[Pynook] Verify Your Email Address"
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        urlProper = url.replace("pynook.herokuapp.com", "pynook.com")
        supportEmail   = "support@pynook.com",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${url}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
}
