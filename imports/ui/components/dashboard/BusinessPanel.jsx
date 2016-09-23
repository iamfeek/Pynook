import React from 'react';

import DashboardAction from './DashboardAction';

export default BusinessPanel = () => {
  return(
    <div id="businessPanel" className="col s12 l6">
      <h2 className="center">Business</h2>
      <DashboardAction title="Listings" pathName="business.my-listings" />

      <DashboardAction title="Profile" pathName="business.my-profile" />

      <DashboardAction title="Orders" pathName="business.my-orders" />
    </div>
  )
}
