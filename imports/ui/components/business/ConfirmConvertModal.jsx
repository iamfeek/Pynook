import React from 'react';
import Loading from '/imports/ui/components/utils/Loading'

export default ConfirmConvertModal = props => {

  return(
    <div id="confirmConvertModal" className="modal bottom-sheet">
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
      </div>
      <div className="modal-footer main">
        <a onClick={() => convert()} className="btn-flat">Yes, convert!</a>
      </div>
    </div>
  )
}

const convert = () => {
  $(".main").addClass("hide");
  $("#loading").removeClass("hide");

  Meteor.call("business.convert", (err, res) => {
    if(res){
      Bert.alert("Converted!", "success", 'growl-bottom-right')
      $("#confirmConvertModal").closeModal();
    } else{
      Bert.alert("Something went wrong!", "danger", 'growl-bottom-right')
      $("#loading").addClass('hide');
      $(".main").removeClass("hide")
    }
  })
}
