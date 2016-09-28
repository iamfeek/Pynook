import React from 'react';

export default BusinessForm = props => {
  let profile = props.profile ? props.profile : {}

  return(
    <form className="col s12 l6 offset-l3" id="businessForm" ref={() => Materialize.updateTextFields()}>
      <div className="input-field col s12">
        <input disabled defaultValue={profile.email} id="business_email" type="email" className="validate" />
        <label htmlFor="business_email">Email</label>
      </div>

      <div className="input-field col s12">
        <input disabled defaultValue={profile.name} id="business_name" type="text" className="validate" />
        <label htmlFor="business_name">Name</label>
      </div>

      <div className="input-field col s12">
        <input disabled defaultValue={profile.block} id="business_block" type="text" className="validate" />
        <label htmlFor="business_block">Block</label>
      </div>

      <div className="input-field col s12">
        <input disabled defaultValue={profile.address} id="business_street" type="text" className="validate" />
        <label htmlFor="business_street">Address</label>
      </div>

      <div className="input-field col s12">
        <input disabled defaultValue={profile.unit} id="business_unit" type="text" className="validate" />
        <label htmlFor="business_unit">Unit</label>
      </div>

      <div className="input-field col s12">
        <input disabled defaultValue={profile.postal} id="business_postal" type="text" className="validate" />
        <label htmlFor="business_postal">Postal Code</label>
      </div>

      <div className="input-field col s12">
        <input disabled defaultValue={profile.hours} id="business_hours" type="text" className="validate" />
        <label htmlFor="business_hours">Hours</label>
      </div>
    </form>
  )
}
