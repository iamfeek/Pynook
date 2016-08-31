import React from 'react';
import { Accounts } from 'meteor/accounts-base'
import {Session} from 'meteor/session';

export default class RegisterForm extends React.Component{
  constructor(props){
    super(props)

    console.debug("BACK: " + Session.get("back"))
  }

  register(){
    if(Meteor.user()) FlowRouter.go("home")
    let password = this.refs.registerPassword.value;
    let cPassword = this.refs.registerCPassword.value;

    if(password != cPassword){
      cPasswordElement = document.getElementById('registerCPassword')
      cPasswordElement.blur();
      cPasswordElement.value = "";
      Bert.alert("Passwords must match!", "info", "growl-bottom-right")
    } else{
      Accounts.createUser({
        username: this.refs.registerUsername.value,
        email: this.refs.registerEmail.value,
        password: this.refs.registerPassword.value
      }, err => {
        if(err){
          console.log(err)
          Bert.alert("Something went wrong.....", "danger", "fixed-top")
        }else {
          Bert.alert("Welcome to Pynook!", "info", "fixed-top");
          back = Session.get("back");
          back ? FlowRouter.go(back) : FlowRouter.go("home");
        }
      })
    }
  }

  render(){
    return(
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input id="registerUsername" ref="registerUsername" type="text" className="validate" />
            <label htmlFor="registerUsername">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="registerEmail" ref="registerEmail" type="email" className="validate" />
            <label htmlFor="registerEmail">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="registerPassword" ref="registerPassword" type="password" className="validate" />
            <label htmlFor="registerPassword">Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input id="registerCPassword" ref="registerCPassword" type="password" className="validate" />
            <label htmlFor="registerCPassword">Confirm Password</label>
          </div>
        </div>

        <div className="row">
          <div className="col s12 center">
            <div id="registerModalSubmit" className="clickable accountModalSubmit" onClick={this.register.bind(this)}>
              Register&nbsp;
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="row" id="signUpText">
          <div className="col s12">
            Have an account? <span className="red-text clickable" onClick={() => {FlowRouter.go("login")}}>Log In</span>
        </div>
      </div>
    </form>
    )
  }
}
