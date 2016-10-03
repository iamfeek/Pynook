import React from 'react';

export default BusinessDropdown = props => {
  return(
    <ul id="businessDropdown" className="dropdown-content navDropdowns" data-constrainwidth="false" style={{width: "300px"}}>
      <li><a href={FlowRouter.path("business.my-profile")}>Profile</a></li>
      <li><a href={FlowRouter.path("business.my-orders")}>Orders</a></li>
      <li><a href={FlowRouter.path("business.my-listings")}>Listings</a></li>
    </ul>
  )
}
