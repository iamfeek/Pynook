import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import PynReviewForm from './PynReviewForm';
import IsLoggedInChecker from '/imports/ui/components/accounts/IsLoggedInChecker'

export default PynWriteReview = props => {
  return(
    <div className="pyn_widget_base" id="respond">
      <h3 className="pyn_review-title">Rate and write a review</h3>

      {props.user ? <PynReviewForm _id={props._id}/> : <IsLoggedInChecker />}
    </div>
  )
}

export default createContainer(() => {
  return {
    user: Meteor.user()
  }
}, PynWriteReview)
