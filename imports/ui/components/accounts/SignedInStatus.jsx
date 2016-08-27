import React from 'react';

export default SignedInStatus = props => {
  return(
    <div>
      You are signed in as <span className="red-text">{Meteor.user().emails[0].address}</span>
    </div>
  )

}
