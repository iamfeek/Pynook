import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr'
import {mount} from 'react-mounter';

import Layout from '/imports/ui/layouts/Layout.jsx';

import Login from '/imports/ui/pages/accounts/Login';
import Register from '/imports/ui/pages/accounts/Register';

import Home from '/imports/ui/pages/Home.jsx';

import Pyns from '/imports/ui/pages/pyn/Pyns.jsx';
import Pyn from '/imports/ui/pages/pyn/Pyn.jsx';
import PynAPlace from '/imports/ui/pages/pyn/PynAPlace.jsx';
import EditPyn from '/imports/ui/pages/pyn/EditPyn';

import ProfileDashboard from '/imports/ui/pages/profile/ProfileDashboard';
import MyPyns from '/imports/ui/pages/profile/MyPyns';

import AdminDashboard from '/imports/ui/pages/admin/AdminDashboard';
import PynsManagement from '/imports/ui/pages/admin/PynsManagement';

function becauseAuthenticated(context, redirect){
  if(Meteor.userId()){
    redirect("/");
  }
}

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
});

adminRoutes.route("/", {
  action: () => {
    mount(Layout, {
      content: () => <AdminDashboard />
    })
  },
  name: "admin.dashboard"
});

adminRoutes.route("/pyns", {
  action: () => {
    mount(Layout, {
      content: () => <PynsManagement />
    })
  },
  name: "admin.pyns"
});


var profileRoutes = FlowRouter.group({
  prefix: "/dashboard",
  name: "dashboard"
});

profileRoutes.route("/", {
  action: () => {
    mount(Layout, {
      content: () => <ProfileDashboard />
    })
  },
  name: "profile.dashboard"
});

profileRoutes.route("/my-pyns", {
  action: () => {
    mount(Layout, {
      content: () => <MyPyns />
    })
  },
  name: "profile.my-pyns"
});




FlowRouter.triggers.enter([becauseAuthenticated], {only: ["login", "register"]})

FlowRouter.route('/', {
  name: "home",
  action: () => {
    mount(Layout, {
      content: () => <Home />
    });
  }
});

FlowRouter.route("/pyn/edit/:id", {
  name: "pyn.edit",
  action: params => {
    mount(Layout, {
      content: () => <EditPyn id={params.id} />
    })
  }
})

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
  action: (params, queryParams) => {
    // console.log(queryParams)
    mount(Layout, {
      content: () => <Pyns query={queryParams}/>
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
