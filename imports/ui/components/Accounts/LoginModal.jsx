import React from 'react';

export default LoginModal = props => {
  return(
    <div id="loginModal" className="modal">
      <div className="modal-content">
        <h4 className="center">Log In</h4>
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row" style={{marginBottom: "0px"}}>
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>
                <input type="checkbox" className="filled-in" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </p>
            </div>
            <div className="col s6 clickable">
              <p style={{color: "#ff4d55"}}>
                Lost your password?
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col s12 center">
              <div id="loginModalSubmit" className="clickable">
                Log In&nbsp;
                <i className="fa fa-caret-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="row" id="signUpText">
            <div className="col s12">
              Don't have an account? <span className="red-text clickable" onClick={() => {$("#loginModal").closeModal(); $("#registerModal").openModal()}}>Sign Up</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
