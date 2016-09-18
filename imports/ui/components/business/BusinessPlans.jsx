import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Plans} from '/imports/api/plans';

import '/imports/ui/components/utils';
import BusinessPlan from './BusinessPlan';

const BusinessPlans = props => {
  if(props.loading) return <Loading />

  let plans = props.plans;
  return(
    <div id="businessPlans" className="row">
      <h2 className="header center">Our Plans</h2>
      {plans.map(p => <BusinessPlan plan={p} />)}
    </div>
  )
}

export default createContainer(() => {
  let handle = Meteor.subscribe("plans.active");
  let plans = Plans.find().fetch();

  return{
      loading: !(handle.ready() && plans),
      plans: plans
  }
}, BusinessPlans)
