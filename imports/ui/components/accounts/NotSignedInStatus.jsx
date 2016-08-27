import React from 'react';

export default NotSignedInStatus = props => {
  return(
    <div>
      <span className="red-text bold-text clickable" onClick={() => {FlowRouter.go("login")}}>Log In</span>
      &nbsp;or&nbsp;
      <span className="red-text bold-text clickable" onClick={() => {FlowRouter.go("register")}}>Sign Up</span>
    </div>
  )
}
