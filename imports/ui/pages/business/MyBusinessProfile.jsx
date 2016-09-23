import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Business} from '/imports/api/business';

import BusinessForm from '/imports/ui/components/business/BusinessForm';

const MyBusinessProfile = props => {
  if(!props.isBusinessAccount) return <BusinessConvert />
  if(props.loading) return <Loading />
  profile = props.profile
  return(
    <div>
      <PageHeader src="/my-business-profile2.jpg" title="My Business Profile" />

      <div className="row">
        <div className="col s12 l10 offset-l1">
          <h2 className="center">Business Profile</h2>
          <h5 className="center">Created at {profile.createdAt.getFullYear()}</h5>
          <BusinessForm profile={profile} />
        </div>
      </div>
    </div>
  )
}

const toggler = e => {
  let isChecked = document.getElementById("edit");
  console.debug(isChecked);
}


const disableForm = () => {
  console.debug("Disabling form");
  $("input[type=text], textarea").each(function (i, e) {
    $(e).attr("disabled", true)
  })
}

const enableForm = () => {
  console.debug("Enabling form");
  $("input[type=text], textarea").each(function (i, e) {
    $(e).attr("disabled", false)
  })
}

export default createContainer(() => {
  DocHead.setTitle("My Business Profile - Pynook");
  let isBusinessAccount = Roles.userIsInRole(Meteor.userId(), "business");
  let handle = Meteor.subscribe("business.self");
  let profile = Business.findOne();

  // console.debug("Own Business: ", profile);

  return {
    loading: !(handle.ready() && profile),
    isBusinessAccount: isBusinessAccount,
    profile: profile
  }
}, MyBusinessProfile);
