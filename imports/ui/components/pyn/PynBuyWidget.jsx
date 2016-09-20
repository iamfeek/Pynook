import React from 'react';
import ShippingInfoModal from './ShippingInfoModal';

export default PynBuyWidget = props => {
  let price = props.price;
  let listingId = props.listingId;
  let businessId = props.businessId;
  return(
    <div className="pyn_widget">
      <div className="row">
        <h2 className="center red-text marginBottomZero">
          ${price}
        </h2>
        <div className="col s4 offset-s1" style={{marginTop: "1rem"}}>
          <h5>Quantity:</h5>
        </div>
        <div className="input-field col s6">
          <input type="number" id="quantity" defaultValue="1" ref={() => Materialize.updateTextFields()}/>
        </div>
        <div className="col s12 center marginTop20">
          <button ref={() => $('.modal-trigger').leanModal()} data-target="shippingInfoModal" className="btn btn-flat red white-text modal-trigger">Order Now</button>
        </div>

        <ShippingInfoModal listingId={listingId} businessId={businessId}/>
      </div>
    </div>
  )
}
