import React from 'react';

export default Listing = props => {
  let listing = props.listing;
  return(
    <div className="listing col s12 l4">
      <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={listing.photos[0]} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{listing.name}<i className="fa fa-ellipsis-v right"></i></span>
          <p><a href="#">Edit</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{listing.name}<i className="fa fa-times right"></i></span>
          <p className="card-content" dangerouslySetInnerHTML={setDescription(listing.description)}/>
        </div>
      </div>
    </div>
  )
}

const setDescription = desc => {return {__html: desc}}
