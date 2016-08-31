import React from 'react';
import PynReviewForm from './PynReviewForm';

export default PynWriteReview = props => {
  return(
    <div className="pyn_widget_base" id="respond">
      <h3 className="pyn_review-title">Rate and write a review</h3>

      <PynReviewForm _id={props._id}/>
    </div>
  )
}
