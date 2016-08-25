import React from 'react';
import RegisterForm from './RegisterForm'

export default RegisterModal = props => {
    return(
      <div id="registerModal" className="modal">
        <div className="modal-content">
          <h4 className="center">Register</h4>
          <RegisterForm />
      </div>
    </div>
  )
}
