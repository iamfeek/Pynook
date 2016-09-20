import React from 'react';
import Loading from '/imports/ui/components/utils/Loading'
import BusinessForm from './BusinessForm';

export default ConfirmConvertModal = props => {

  return(
    <div id="confirmConvertModal" className="modal modal-fixed-footer">
      <div className="done hide center modal-content">
        <h3>Welcome to Pynook Business!</h3>
      </div>
      <div id="loading" className="modal-content hide center">
        <h2 className="center">We are converting your account...</h2>
        <Loading />
      </div>

      <div className="modal-content main center">
        <h2>Convert to Pynook Business</h2>
        <h6>You are about to convert to our Pynook Business account.</h6>

        <div className="col s8 offset-s2">
          <BusinessForm profile={{email: Meteor.user().emails[0].address}} ref={() => $("input, textarea").each(function (i, e) {$(e).attr("disabled", false)})}/>
        </div>
      </div>f




      <div className="modal-footer main">
        <a onClick={() => convert()} className="btn-flat">Yes, convert!</a>
      </div>
    </div>
  )
}

const convert = () => {
  let email = document.getElementById("business_email").value;
  let name = document.getElementById("business_name").value;
  let block = document.getElementById("business_block").value;
  let address = document.getElementById("business_address").value;
  let unit = document.getElementById("business_unit").value;
  let hours = document.getElementById("business_hours").value;
  let postal = document.getElementById("business_postal").value;

  if(name.length=="" || address.length=="" || hours.length==""){
    Bert.alert("Please fill up all the fields!", "danger");
    return;
  }

  let profile = {
    email: email,
    name: name,
    block: block,
    address: address,
    unit: unit,
    hours: hours,
    postal: parseInt(postal)
  }

  $(".main").addClass("hide");
  $("#loading").removeClass("hide");

  console.log(profile);

  Meteor.call("business.convert", profile, (err, res) => {
    if(res){
      Bert.alert("Converted!", "success", 'growl-bottom-right')
      setTimeout(() => {$("#confirmConvertModal").closeModal()}, 3000)

    } else{
      Bert.alert("Something went wrong!", "danger")
      $("#loading").addClass('hide');
      $(".main").removeClass("hide")
    }
  })
}
