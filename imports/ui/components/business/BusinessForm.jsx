import React from 'react';

export default BusinessForm = props => {
  let profile = props.profile ? props.profile : {}

  return(
    <form className="col s12 l6 offset-l3" id="businessForm" ref={() => Materialize.updateTextFields()}>
      <div className="input-field col s12">
        <label htmlFor="business_name">Business Name</label>
        <input disabled defaultValue={profile.name} placeholder="Home Business Name" id="business_name" type="text" className="validate" />
      </div>

      <div className="input-field col s12">
        <label htmlFor="business_address">Business Address</label>
        <input disabled defaultValue={profile.address} placeholder="Home Business Address" id="business_address" type="text" className="validate" />
      </div>

      <div className="input-field col s12">
        <label htmlFor="business_address">Business Operating Hours</label>
        <input disabled defaultValue={profile.hours} placeholder="Home Business Operating Hours" id="business_hours" type="text" className="validate" />
      </div>
    </form>
  )
}
