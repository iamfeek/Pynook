import React from 'react';

import DashboardAction from './DashboardAction';

export default BusinessConvertPanel = () => {
  return(
    <div id="businessConvertPanel" className="col s12 l6">
      <h2 className="center">Business</h2>
      <DashboardAction title="Convert Now" pathName="convert" />
    </div>
  )
}
