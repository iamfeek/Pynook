import React from 'react';
import '/imports/ui/components/utils';
import {createContainer} from 'meteor/react-meteor-data';

import ProfilePanel from '/imports/ui/components/dashboard/ProfilePanel';
import BusinessPanel from '/imports/ui/components/dashboard/BusinessPanel';
import BusinessConvertPanel from '/imports/ui/components/dashboard/BusinessConvertPanel';

const Dashboard = props => {
  return(
    <div id="profile">
      <PageHeader src="/skill2.jpg" title="Dashboard" />
      <div className="container">
        <h2 className="center hide-on-large-only">Dashboard</h2>

        <ProfilePanel />

        {props.isBusinessAccount ? <BusinessPanel /> : <BusinessConvertPanel />}

      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Dashboard - Pynook");
  let isBusinessAccount = Roles.userIsInRole(Meteor.userId(), "business");

  return {
    isBusinessAccount: isBusinessAccount
  }

}, Dashboard )
