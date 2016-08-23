import React from 'react';

export default RegisterModal = props => {
  return(
    <div id="registerModal" className="modal">
      <div className="modal-content">
        <h4 className="center">Register</h4>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="col s12 center">
              <div id="loginModalSubmit" className="clickable">
                Register&nbsp;
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="row" id="signUpText">
            <div className="col s12">
              Have an account? <span className="red-text clickable" onClick={() => {$("#registerModal").closeModal(); $("#loginModal").openModal()}}>Log In</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
