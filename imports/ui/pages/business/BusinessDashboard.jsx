import React from 'react';
import "/imports/ui/components/utils"
import {createContainer} from 'meteor/react-meteor-data'

import BusinessSignUpAdvert from '/imports/ui/components/business/BusinessSignUpAdvert';

const BusinessDashboard = props => {
  if(Roles.userIsInRole("business")){
    return(
      <div id="businessDashboard">
        <PageHeader src="/business-dashboard.jpg" title="Pynook Business" />
        <div className="tagline">
          <h6>Powered by the <span className="italics">Pynook Network&trade;</span></h6>
        </div>


        <div className="wider-content">

        </div>
      </div>
    )
  } else{
    return <BusinessSignUpAdvert />
  }
}

export default createContainer(() => {
  DocHead.setTitle("Business Lounge - Pynook")

  return {
    hasBusinessAccount: Roles.userIsInRole("business")
  }
}, BusinessDashboard)
