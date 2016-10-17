import React from 'react';
import Loading from '/imports/ui/components/utils/Loading'
import BusinessForm from '/imports/ui/components/business/BusinessForm';

export default ConvertPanel = props => {

  return(
    <div id="convertPanel">
      <BusinessForm profile={{email: Meteor.user().emails[0].address}} ref={() => {$("input, textarea").each(function (i, e) {$(e).attr("disabled", false)})}}/>
      <Loading ref={() => showForm()}/>
      <div id="success" className="col s12 center" ref={() => $("#success").css("display", "none")}>
        <h4>Welcome to Pynook Business!</h4>
      </div>
      <div className="businessConvert_action">
        <button className="btn btn-flat btn-large blue white-text" onClick={() => confirmConvert()}>Convert Now</button>
      </div>
    </div>
  )
}

const hideForm = () => {
  $("#loading").css("display", "block");
  $("#businessForm").css("display", "none");
}

const showForm = () => {
  $("#loading").css("display", "none")
  $("#businessForm").css("display", "block");
}

const showSuccess = () => {
  $("#loading").css("display", "none");
  $("#businessForm").css("display", "none");
  $("#success").css("display", "block");
}

const confirmConvert = () => {
  if(confirm("Are you sure the information is accurate?")) convert();
}

const convert = () => {
  hideForm();
  let email = document.getElementById("business_email").value;
  let name = document.getElementById("business_name").value;
  let block = document.getElementById("business_block").value;
  let street = document.getElementById("business_street").value;
  let unit = document.getElementById("business_unit").value;
  let hours = document.getElementById("business_hours").value;
  let postal = document.getElementById("business_postal").value;

  var geocoder = new google.maps.Geocoder();
  let address = block + " " + street + " Singapore " + postal;
  geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            let latlng = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
            doIt(latlng);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });

  const doIt = latlng => {
    if(name.length=="" || block.length=="" || street.length=="" || unit.length=="" || postal.length=="" || hours.length==""){
      Bert.alert("Please fill up all the fields!", "danger");
      return;
    }

    let profile = {
      email: email,
      name: name,
      address: {
        block: block,
        street: street,
        unit: unit,
        postal: parseInt(postal)
      },
      latlng: latlng,
      hours: hours,
    }

    Meteor.call("business.convert", profile, (err, res) => {
      if(res){
        Bert.alert("Welcome to Pynook Business!", "success")
        showSuccess();
      } else{
        Bert.alert("Something went wrong!", "danger");
        showForm();
      }
    })
  }
}
