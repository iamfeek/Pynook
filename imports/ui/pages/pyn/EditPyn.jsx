import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns.js';
import '/imports/ui/components/utils';

import EditPynForm from '/imports/ui/components/pyn/EditPynForm';

const EditPyn = props => {
  let pyn = props.pyn;

  if(props.loading) return <Loading />
  if(!props.allowed || !props.user) return <AccessDenied />

  return(
    <div id="editPyn">
      <PageHeader src="/edit-pyn.jpg" title="Edit Your Pyn" />
      <div className="content">
        <EditPynForm pyn={pyn} />
      </div>
    </div>
  )
}

export default createContainer(({id}) => {
  DocHead.setTitle("Edit Pyn - Pynook");
  var handle = Meteor.subscribe("pyns.single", id);
  var pyn = Pyns.findOne({_id: id});
  // console.log(Meteor.userId())
  let allowed = false;

  if(pyn){
    allowed = (pyn.owner === Meteor.user()._id)
  }
  // console.log(allowed)
  return {
    user: Meteor.user(),
    allowed: allowed,
    loading: (handle.ready() && pyn) ? false : true,
    pyn: pyn
  }
}, EditPyn)
