import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import PynReview from './PynReview'

export default PynReviews = props => {
  reviews = props.reviews;
  // console.debug("Reviews: " + JSON.stringify(props.reviews, null, 2))
  return(
    <div id="pyn_reviews">
      <h2 className="pyns_reviews-title">{reviews.length} Review{reviews.length > 1 ? "s" : ""}</h2>

      {reviews.map(r => <PynReview review={r} />)}
    </div>
  )
}
