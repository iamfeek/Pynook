import React from 'react';
import Loading from '/imports/ui/components/utils/Loading'
import ShippingInfoForm from './ShippingInfoForm';

export default ShippingInfoModal = props => {

  return(
    <div id="shippingInfoModal" className="modal modal-fixed-footer">
      <div className="done hide center modal-content">
        <h3>Placing Order!</h3>
      </div>
      <div id="loading" className="modal-content hide center">
        <h2 className="center">We are converting your account...</h2>
        <Loading />
      </div>

      <div className="modal-content main center">
        <h2>Shipping Info</h2>

          <ShippingInfoForm email={Meteor.user().emails[0].address} />
      </div>




      <div className="modal-footer main">
        <a onClick={() => confirm(props.listingId, props.businessId)} className="btn-flat">Proceed to payment</a>
      </div>
    </div>
  )
}

const confirm = (listingId, businessId) => {
  let email = document.getElementById("order_email").value;
  let name = document.getElementById("order_name").value;
  let block = document.getElementById("order_block").value;
  let address = document.getElementById("order_address").value;
  let unit = document.getElementById("order_unit").value;
  let postal = document.getElementById("order_postal").value;

  if(email == "" || name == "" || block == "" || address == "" || unit == "" || postal == ""){
    Bert.alert("Please fill up all the fields!", "danger");
    return;
  }

    let shippingInfo = {
      email: email,
      name: name,
      block: block,
      address: address,
      unit: unit,
      postal: parseInt(postal)
    }

    let order ={
      listing: listingId,
      business: businessId,
      shippingInfo: shippingInfo,
      quantity: parseInt($("#quantity").val())
    }


  $(".main").addClass("hide");
  $("#loading").removeClass("hide");

  Meteor.call("orders.create", order, (err, orderId) => {
    if(err){
      $(".main").removeClass("hide");
      $("#loading").addClass("hide");
      Bert.alert("Oh no! somethign went wrong!", "danger");
      return;
    }

    $("#shippingInfoModal").closeModal();
    FlowRouter.go("pay", {id: orderId});
  });
}
