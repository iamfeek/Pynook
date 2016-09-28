import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import "/imports/ui/components/utils"
import {Business} from '/imports/api/business'

import NewListingForm from '/imports/ui/components/listings/NewListingForm';

const CreateAListing = props => {
  if(props.loading) return <Loading />
  if(props.loading || !props.isBusiness) return <AccessDenied />

  return (
    <div id="createAListing">
      <PageHeader src="/create-a-listing.jpg" title="Create A Listing" />

      <div className="row center">
      <h2 className="hide-on-large-only">Create A Listing</h2>
        <NewListingForm />
      </div>

    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Create A Listing - Pynook")
  let isBusiness =  Roles.userIsInRole(Meteor.userId(), "business")
  let handle = Meteor.subscribe("business.self");
  let profile = Business.findOne();

  return {
    isBusiness: isBusiness,
    loading: !(handle.ready() && profile),
    profile: profile
  }
}, CreateAListing)
