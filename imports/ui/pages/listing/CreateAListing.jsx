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

      <div className="wider-content row">
      <h4 className="center" style={{marginBottom: "0px"}}>You are creating a new listing for...</h4>
      <h4 className="center red-text" style={{marginTop: "0px"}}>{props.profile.name}</h4>
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
