import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Listings as ListingsDB} from '/imports/api/listings';

import Listing from '/imports/ui/components/listings/Listing';

const MyListings = props => {
  if(props.loading) return <Loading />
  let listings = props.listings;
  return(
    <div>
      <PageHeader src="/my-pyns.jpg" title={listings.length+" listings"} />

      <div className="wider-content row">
        <div className="col s12"><a href={FlowRouter.path("listings.create")} className="btn btn-flat transparent center">Create A Listing</a></div>
        {listings.map(l => <Listing listing={l} key={l._id}/>)}
      </div>

    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("My Listings - Pynook")
  let handle = Meteor.subscribe("listings.self");
  let listings = ListingsDB.find().fetch();

  return {
    loading: !(handle.ready() && listings),
    listings: listings
  }
}, MyListings);
