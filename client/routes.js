import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import React from 'react';
import {mount} from 'react-mounter';

import Layout from '/imports/ui/layouts/Layout.jsx';

import Home from '/imports/ui/pages/Home.jsx';

import PynAPlace from '/imports/ui/pages/PynAPlace.jsx';

FlowRouter.route('/', {
  name: "home",
  action: () => {
    mount(Layout, {
      content: () => <Home />
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
