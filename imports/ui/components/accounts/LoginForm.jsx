import React from 'react';
import {Session} from 'meteor/session';

export default class LoginForm extends React.Component{
  constructor(props){
    super(props)

    console.debug("BACK: " + Session.get("back"))
  }

  login(){
    if(Meteor.user()){
      FlowRouter.go("home");
    }
    Meteor.loginWithPassword(this.refs.loginEmail.value, this.refs.loginPassword.value, err => {
      if(err){
        Bert.alert("We can't find that combination. Please try again!", "danger", "fixed-top");
      } else{
        console.info("Login success")
        back = Session.get("back");
        back ? FlowRouter.go(back) : FlowRouter.go("home");
        Bert.alert("Welcome back!", "success", "growl-bottom-right")
      }
    })
  }


  render(){
    return(
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input id="email" ref="loginEmail" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row" style={{marginBottom: "0px"}}>
          <div className="input-field col s12">
            <input id="password" ref="loginPassword" type="password" className="validate" />
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
            <div id="loginModalSubmit" className="clickable accountModalSubmit" onClick={this.login.bind(this)}>
              Log In&nbsp;
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="row" id="signUpText">
          <div className="col s12">
            Don't have an account? <span className="red-text clickable" onClick={() => {FlowRouter.go("register")}}>Sign Up</span>
        </div>
      </div>
    </form>
  )
}
}
