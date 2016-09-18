import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import PageHeader from '/imports/ui/components/utils/PageHeader';

const AdminDashboard = props => {
  return(
    <div id="adminPanel">
      <PageHeader title="Admin Panel" src="/admin3.jpg"/>

      <div className="wider-content">
        <div className="actionWrapper valign-wrapper">
          <a href={FlowRouter.path("admin.pyns")} className="valign">
            Pyns Management
          </a>
        </div>

        <div className="actionWrapper valign-wrapper">
          <a href={FlowRouter.path("admin.plans")} className="valign">
            Business Plans
          </a>
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  Roles.userIsInRole(Meteor.userId(), "admin") ? null : window.location=location.origin+FlowRouter.path("home");

  DocHead.setTitle("Admin Panel - Pynook")
  return {

  }
}, AdminDashboard)
