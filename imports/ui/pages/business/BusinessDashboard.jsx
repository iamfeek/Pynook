import React from 'react';
import "/imports/ui/components/utils"
import {createContainer} from 'meteor/react-meteor-data'
import {Business} from '/imports/api/business.js'

import BusinessConvert from '/imports/ui/components/business/BusinessConvert';
import BusinessAction from '/imports/ui/components/business/BusinessAction';

const BusinessDashboard = props => {
  if(!props.isBusinessAccount) return <BusinessConvert />
  if(props.loading) return <Loading />

  return(
    <div id="businessDashboard">
      <PageHeader src="/business-dashboard.jpg" title="Pynook Business" />
      <div className="tagline">
        <h6>Powered by the <span className="italics">Pynook Network&trade;</span></h6>
      </div>


      <div className="wider-content center">
        <BusinessAction title="My Listings" pathName="business." />
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Business Lounge - Pynook")
  // Roles.userIsInRole(Meteor.userId(), "business") ? null : window.location.href = FlowRouter.url("business.convert");

  let isBusinessAccount = Roles.userIsInRole(Meteor.userId(), "business");

  if(isBusinessAccount){
    let handle = Meteor.subscribe("business.self");
    let business = Business.findOne();

    return {
      isBusinessAccount: isBusinessAccount,
      loading: (handle.ready() && business) ? false : true,
      business: business
    }
  }

  return {
    isBusinessAccount: isBusinessAccount,
    loading: true
  }




}, BusinessDashboard)
