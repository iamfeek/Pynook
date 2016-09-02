import React from 'react';
import '/imports/ui/components/utils';
import {createContainer} from 'meteor/react-meteor-data';

const ProfileDashboard = props => {
  return(
    <div id="profile">
      <PageHeader src="/skill2.jpg" title="Dashboard" />
      <div className="wider-content row">
        <div className="profile_action-wrapper col s12">
          <a className="profile_action" href={FlowRouter.path("profile.my-pyns")}>
            My Pyns
          </a>
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Dashboard - Pynook");
  return {
  }
}, ProfileDashboard )
