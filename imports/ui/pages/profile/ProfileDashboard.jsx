import React from 'react';
import '/imports/ui/components/utils';
import {createContainer} from 'meteor/react-meteor-data';

import ProfileAction from '/imports/ui/components/profile/ProfileAction';

const ProfileDashboard = props => {
  return(
    <div id="profile">
      <PageHeader src="/skill2.jpg" title="Dashboard" />
      <div className="row">
        <h2 className="center">Dashboard</h2>
        <div className="col s12 l10 offset-l1">
          <ProfileAction title="My Pyns" pathName="profile.my-pyns" />

          {props.hasBusinessAccount ? <ProfileAction title="My Business" pathName="business.dashboard" /> : null}
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Dashboard - Pynook");
  DocHead.addMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });
  return {
    hasBusinessAccount: Roles.userIsInRole(Meteor.userId(), "business")
  }
}, ProfileDashboard )
