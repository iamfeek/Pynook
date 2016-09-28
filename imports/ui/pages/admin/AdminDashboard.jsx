import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import PageHeader from '/imports/ui/components/utils/PageHeader';
import AccessDenied from '/imports/ui/components/utils/AccessDenied';
const AdminDashboard = props => {
  if(!props.isAdmin) return <AccessDenied />
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

        <div className="actionWrapper valign-wrapper">
          <a href={FlowRouter.path("admin.orders")} className="valign">
            Orders Management
          </a>
        </div>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Admin Panel - Pynook")
  return {
    isAdmin: Roles.userIsInRole(Meteor.userId(), "admin")
  }
}, AdminDashboard)
