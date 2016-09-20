import React from 'react';

export default ShippingInfoForm = props => {
  return(
    <form className="col s12 l8 offset-l2" id="businessForm" ref={() => Materialize.updateTextFields()}>
      <div className="input-field col s12">
        <input defaultValue={props.email} id="order_email" type="email" className="validate" />
        <label htmlFor="order_email">Email</label>
      </div>

      <div className="input-field col s12">
        <input id="order_name" type="text" className="validate" />
        <label htmlFor="order_name">Name</label>
      </div>

      <div className="input-field col s12">
        <input id="order_block" type="text" className="validate" />
        <label htmlFor="order_block">Block</label>
      </div>

      <div className="input-field col s12">
        <input id="order_address" type="text" className="validate" />
        <label htmlFor="order_address">Address</label>
      </div>

      <div className="input-field col s12">
        <input id="order_unit" type="text" className="validate" />
        <label htmlFor="order_unit">Unit</label>
      </div>

      <div className="input-field col s12">
        <input  id="order_postal" type="text" className="validate" />
        <label htmlFor="order_postal">Postal Code</label>
      </div>
    </form>
  )
}
