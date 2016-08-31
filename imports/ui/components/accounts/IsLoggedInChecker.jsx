import React from 'react';

import SignedInStatus from './SignedInStatus.jsx';
import NotSignedInStatus from './NotSignedInStatus.jsx';

export default IsLoggedInChecker = props => {
  return(
    <div>
      <p className="header">{Meteor.user() ? "Your Account" : "Have an account?"}</p>
      {Meteor.user() ? <SignedInStatus /> : <NotSignedInStatus />}
    </div>
  )
}
