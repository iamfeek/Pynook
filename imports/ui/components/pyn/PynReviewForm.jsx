import React from 'react';

export default PynReviewForm = props => {
  return(
    <form id="pyn_review-form" onSubmit={submit.bind(this)}>
      <input defaultValue={props._id} id="pynId" hidden />
      <div className="row">
        <div className="input-field col s12">
          <label htmlFor="pyn_review-title">Title of your review:</label>
          <input id="pyn_review-title" type="text" required />

        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <label htmlFor="pyn_review-description">Your Review:</label>
          <textarea id="pyn_review-description" className="materialize-textarea" required></textarea>

        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <button id="pyn_review-submit" type="submit" className="btn btn-flat">Submit Your Review</button>
        </div>
      </div>
    </form>
  )
}

let submit = e => {
  e.preventDefault();
  pynId = $("#pynId")[0];
  title = $("#pyn_review-title")[0];
  description = $("#pyn_review-description")[0];


  review = {
    pyn: pynId.value,
    title: title.value,
    description: description.value,
  }

  console.debug(review);

  Meteor.call("pyns.insertReview", review, (err, res) => {
    if(err){
      Bert.alert("Oops! Something happened. Please try again later.", "danger", "growl-top-right");
    } else{
      Bert.alert("Your review has been posted. Thanks!", "success");
      title.value = "";
      description.value = "";
      $(".input-field input, .input-field textarea").blur()
    }
  });
}
