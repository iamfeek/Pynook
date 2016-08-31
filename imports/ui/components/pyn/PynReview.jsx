import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Reviews} from '/imports/api/users.js';

const PynReview = props => {
  var mN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  review = props.review;
  createdAt = review.createdAt;
  date = createdAt.getDate() + " " + mN[createdAt.getMonth()] + ", " + createdAt.getFullYear();
  return(
    <div className="pyn_review">
      <div className="pyn_review_content-wrapper">
        <div className="pyn_review_content">
          <h3 className="pyn_review_content-title">
            "{review.title}"
            <span style={{fontSize: "12px"}}> by </span>
            <span style={{fontSize: "12px", textDecoration: "underline"}}> {review.username} </span>
            <span style={{fontSize: "12px"}}> on </span>
            <span style={{fontSize: "12px", textDecoration: "underline"}}> {date} </span>
            </h3>
            <div className="pyn_widget_base">
              {review.description}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default createContainer(({review}) => {
    return {
      review: review
    }
  }, PynReview)
