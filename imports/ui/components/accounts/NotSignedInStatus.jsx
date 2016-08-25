import React from 'react';
import LoginModal from './LoginModal.jsx';
import RegisterModal from './RegisterModal.jsx';

export default NotSignedInStatus = props => {
  return(
    <div>
      <span className="red-text bold-text clickable" onClick={() => {$("#loginModal").openModal()}}>Log In</span>
      &nbsp;or&nbsp;
      <span className="red-text bold-text clickable" onClick={() => {$("#registerModal").openModal()}}>Sign Up</span>
    </div>
  )
}
