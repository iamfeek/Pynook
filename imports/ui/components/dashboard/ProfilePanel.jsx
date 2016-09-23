import React from 'react';
import DashboardAction from './DashboardAction';

export default ProfilePanel = () => {
  return(
    <div className="col s12 l6">
      <h2 className="center">Profile</h2>
      <DashboardAction title="My Pyns" pathName="profile.my-pyns" />
      <DashboardAction title="My Orders" pathName="orders.my-orders" />
      <DashboardAction title="Purchase History" pathName="#"/>
    </div>
  )
}
