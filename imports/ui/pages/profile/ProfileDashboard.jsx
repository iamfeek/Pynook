import React from 'react';
import '/imports/ui/components/utils';
import {createContainer} from 'meteor/react-meteor-data';

import ProfileAction from '/imports/ui/components/profile/ProfileAction';

const ProfileDashboard = props => {
  return(
    <div id="profile">
      <PageHeader src="/skill2.jpg" title="Dashboard" />
      <div className="wider-content row">
        <ProfileAction title="My Pyns" pathName="profile.my-pyns" />

        {props.hasBusinessAccount ? <ProfileAction title="My Business" pathName="business.dashboard" /> : null}
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Dashboard - Pynook");
  return {
    hasBusinessAccount: Roles.userIsInRole(Meteor.userId(), "business")
  }
}, ProfileDashboard )
