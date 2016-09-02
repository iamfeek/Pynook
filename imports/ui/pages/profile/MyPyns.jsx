import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns';

import NoPyns from '/imports/ui/components/profile/NoPyns';
import MyPyn from '/imports/ui/components/profile/MyPyn';

const MyPyns = props => {
  if(props.loading) return <Loading />
  let pyns = props.pyns;
  word = pyns.length==1 ? " Pyn" : " Pyns";
  title = "You have " + pyns.length + word;
  return(
    <div>
      <PageHeader src="/my-pyns.jpg" title={title} />

      {pyns.length==0 ? <NoPyns /> : null}
      <div className="wider-content row" style={{marginTop: "40px"}}>
        {pyns.map(p => <MyPyn pyn={p} />)}
      </div>
    </div>
  )
}

export default createContainer(() => {
  DocHead.setTitle("My Pyns - Pynook")
  var handle = Meteor.subscribe("pyns.self");
  var pyns = Pyns.find().fetch();

  return {
    loading: (handle.ready() && pyns) ? false : true,
    pyns: pyns
  }
}, MyPyns)
