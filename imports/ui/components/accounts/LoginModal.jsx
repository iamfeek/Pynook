import React from 'react';
import LoginForm from './LoginForm'

export default LoginModal = props => {
  return(
    <div id="loginModal" className="modal">
      <div className="modal-content">
        <h4 className="center">Log In</h4>
        <LoginForm />
      </div>
    </div>
  )
}
