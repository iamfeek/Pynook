import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr'
import {mount} from 'react-mounter';

import Layout from '/imports/ui/layouts/Layout.jsx';

import Login from '/imports/ui/pages/accounts/Login';
import Register from '/imports/ui/pages/accounts/Register';

import Home from '/imports/ui/pages/Home.jsx';

import Pyns from '/imports/ui/pages/Pyns.jsx';
import Pyn from '/imports/ui/pages/Pyn.jsx';
import PynAPlace from '/imports/ui/pages/PynAPlace.jsx';

function becauseAuthenticated(context, redirect){
  if(Meteor.userId()){
    redirect("/");
  }
}

FlowRouter.triggers.enter([becauseAuthenticated], {only: ["login", "register"]})

FlowRouter.route('/', {
  name: "home",
  action: () => {
    mount(Layout, {
      content: () => <Home />
    });
  }
});

FlowRouter.route('/pyn/:id', {
  name: "pyn",
  action: params => {
    mount(Layout, {
      content: () => <Pyn id={params.id}/>
    });
  }
});

FlowRouter.route('/pyns', {
  name: "pyns",
  action: () => {
    mount(Layout, {
      content: () => <Pyns />
    });
  }
});

FlowRouter.route('/pyn-a-place', {
  name: "pyn.a.place",
  action: () => {
    mount(Layout, {
      content: () => <PynAPlace />
    });
  }
});

FlowRouter.route("/login", {
  name: "login",
  action: () => {
    mount(Layout, {
      content: () => <Login />
    })
  }
})

FlowRouter.route("/register", {
  name: "register",
  action: () => {
    mount(Layout, {
      content: () => <Register />
    })
  }
})
