import React from 'react';
import { Accounts } from 'meteor/accounts-base'
import {Session} from 'meteor/session';

export default RegisterForm = props => {
  return(
    <form onSubmit={register.bind(this)} className="col s12 l8 offset-l2">
      <div className="row">
        <div className="input-field col s12">
          <input id="registerUsername"  type="text" className="validate" />
          <label htmlFor="registerUsername">Username</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="registerEmail" type="email" className="validate" />
          <label htmlFor="registerEmail">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="registerPassword" type="password" className="validate" />
          <label htmlFor="registerPassword">Password</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="registerCPassword" type="password" className="validate" />
          <label htmlFor="registerCPassword">Confirm Password</label>
        </div>
      </div>

      <div className="row">
        <div className="col s12 center">
          <button type="submit" id="registerModalSubmit" className="clickable accountModalSubmit">
            Register&nbsp;
            <i className="fa fa-caret-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div className="row" id="signUpText">
        <div className="col s12">
          Have an account?
          <span className="red-text clickable" onClick={() => {FlowRouter.go("login")}}>Log In</span>
        </div>
      </div>
    </form>
  )
}

const register = e => {
  e.preventDefault();
  let password = document.getElementById("registerPassword").value;
  let cPassword = document.getElementById("registerCPassword").value;

  if(password != cPassword){
    cPasswordElement = document.getElementById('registerCPassword')
    cPasswordElement.blur();
    cPasswordElement.value = "";
    cPasswordElement.focus();
    Bert.alert("Passwords must match!", "info", "growl-bottom-right")
  } else{
    Accounts.createUser({
      username: document.getElementById("registerUsername").value,
      email: document.getElementById("registerEmail").value,
      password: document.getElementById("registerPassword").value
    }, err => {
      if(err){
        Bert.alert("Something went wrong.....", "danger", "fixed-top")
      } else {
        Meteor.call("users.init");
        Bert.alert("Welcome to Pynook!", "info", "fixed-top");
        back = Session.get("back");
        back ? FlowRouter.go(back) : FlowRouter.go("home");
      }
    });
  }
}
