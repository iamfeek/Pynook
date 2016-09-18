import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Plans} from '/imports/api/plans';

import BusinessPlansList from '/imports/ui/components/admin/plans/BusinessPlansList';

const BusinessPlansManagement = props => {
  if(props.loading) return <Loading />

  let plans = props.plans;
  return(
    <div id="businessPlansManagement">
      <PageHeader src="/business-plan-management.jpg" title="Business Plan Management" />

      <div className="wider-content row">
        Plans Count: {plans.length}

        <BusinessPlansList />
        <a className="btn btn-flat red white-text" href={FlowRouter.path("admin.plans.new")}>New Plan</a>
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Plans Management - Pynook")
  let handle = Meteor.subscribe("plans.all");
  let plans = Plans.find().fetch();



  return{
    loading: !(handle.ready() && plans),
    plans: plans
  }
}, BusinessPlansManagement)
