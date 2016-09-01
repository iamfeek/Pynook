import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns.js'

import PageHeader from '/imports/ui/components/utils/PageHeader';
import Loading from '/imports/ui/components/utils/Loading';
import AccessDenied from '/imports/ui/components/utils/AccessDenied';
import NotApprovedPyns from '/imports/ui/components/admin/NotApprovedPyns'

PynsManagement = props => {
  pyns = props.pyns;
  if(props.loading){
    return <div style={{height: "100vh"}}><Loading /></div>
  }else if(props.isAdmin){
    return(
      <div id="PynsManagement">
        <PageHeader src="/pyns-management.jpg" title="Pyns Management" />
          <h3 className="center">
            {pynStats(pyns)}
          </h3>
        <div className="wider-content row">
          {pyns.map(pyn => {
            return <NotApprovedPyns pyn={pyn} key={pyn._id}/>
          })}
        </div>
      </div>
    )
  } else return <AccessDenied />
}

const pynStats = pyns => {
  if(pyns.length === 0){
    return "No pyns to approve"
  } else {
    return (pyns.length + " pyns")
  }
}

export default createContainer(() => {
  DocHead.setTitle("Pyns Management - Pynook")
  var handle = Meteor.subscribe("pyns.toApprove");
  var pyns = Pyns.find({}, {sort: {createdAt: 1}}).fetch();
  // console.log(pyns)

  return {
    isAdmin: Roles.userIsInRole(Meteor.userId(), "admin"),
    loading: (pyns && handle.ready()) ? false : true,
    pyns: pyns
  }

}, PynsManagement)
