import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns';

import Listing from '/imports/ui/components/listings/Listing';

const MyListings = props => {
  if(props.loading) return <Loading />
  let listings = props.listings;
  return(
    <div>
      <PageHeader src="/my-pyns.jpg" title={listings.length+" listings"} />

      <div className="row">
        <h2 className="center">My Listings</h2>
        <div className="col s12 center">
          <a href={FlowRouter.path("listings.create")} className="btn btn-flat blue white-text center">Create A Listing</a>
        </div>
        {listings.map(l => <Listing listing={l} key={l._id}/>)}

        <div className="col s12 center">
          <a href={FlowRouter.path("listings.create")} className="btn btn-flat blue white-text center">Create A Listing</a>
        </div>
      </div>

    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("My Listings - Pynook")
  let handle = Meteor.subscribe("pyns.listings.self");
  let listings = Pyns.find().fetch();

  return {
    loading: !(handle.ready() && listings),
    listings: listings
  }
}, MyListings);
