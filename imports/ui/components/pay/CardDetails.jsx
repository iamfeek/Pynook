import React from 'react';

export default CardDetails = props => {
  return(
    <form id="cardDetails" className="row">
      <div className="input-field col s12">
        <label htmlFor="number">Card Number</label>
        <input id="number" type="Number" className="validate" />

      </div>
      <div className="input-field col s4">
        <label htmlFor="month">Expiry Month</label>
        <input id="month" type="Number" className="validate" />

      </div>
      <div className="input-field col s4">
        <label htmlFor="year">Expiry Year</label>
        <input id="year" type="Number" className="validate" />

      </div>
      <div className="input-field col s4">
        <label htmlFor="cvv">CVV</label>
        <input id="cvv" type="Number" className="validate" />
      </div>
    </form>

  )
}
