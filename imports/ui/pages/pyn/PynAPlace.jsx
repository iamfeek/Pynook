import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import PageHeader from '/imports/ui/components/utils/PageHeader.jsx';
import IsLoggedInChecker from '/imports/ui/components/accounts/IsLoggedInChecker.jsx';
import PynAPlaceForm from '/imports/ui/components/PynAPlace/PynAPlaceForm.jsx';

const PynAPlace = props => {
  return(
    <div id="pynaplace">
      <PageHeader src="/pynaplace2.jpg" title="Pyn A Place"/>
      <h1 className="center hide-on-med-and-up">Pyn A Place</h1>

      <div id="accountdetails" className="centerByMargin hide-on-small-only">
        <IsLoggedInChecker />
      </div>

      <div className="wider-content row">
        <div className="col l8 offset-l2">
          <PynAPlaceForm />
        </div>

      </div>

    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("Pyn A Place - Pynook")
  DocHead.addMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });
  return{}
}, PynAPlace)
