import React from 'react';
import "/imports/ui/components/utils";
import BusinessPlanForm from '/imports/ui/components/business/BusinessPlanForm';
import {createContainer} from 'meteor/react-meteor-data';

const NewBusinessPlan = props => {
  return(
    <div id="newBusinessPlan">
      <PageHeader src="/new-business-plan.jpg" title="New Business Plan" />

      <div className="wider-content row">
        <BusinessPlanForm />
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("New Business Plan - Pynook");
  return {}
}, NewBusinessPlan)
