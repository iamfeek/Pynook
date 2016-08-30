import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns.js';

import Loading from '/imports/ui/components/utils/Loading';
import PynHeader from '/imports/ui/components/pyn/PynHeader';
import PynMapWidget from '/imports/ui/components/pyn/PynMapWidget';
import PynGalleryWidget from '/imports/ui/components/pyn/PynGalleryWidget';
import PynActions from '/imports/ui/components/pyn/PynActions';
import PynDescription from '/imports/ui/components/pyn/PynDescription';
import PynWriteReview from '/imports/ui/components/pyn/PynWriteReview';

const Pyn = props =>{
  // console.debug("Loading: " + this.props.loading)
  if(props.loading){
    return(
      <div style={{height: "100vh", width: "100%"}}>
        <Loading />
      </div>
    )
  } else{
    pyn = props.pyn;
    // console.debug("Loading: " + this.props.loading)
    // console.debug("Pyn render: " + pyn)
    return (
      <div id="pyn" className="row">
        <div className="pyn_image" style={{backgroundImage: "url("+ pyn.photos[0] +")", backgroundSize: "contain"}} />

        <PynHeader name={pyn.name} category={pyn.category} tagline={pyn.tagline} />

        <div className="wider-content">
          <div className="pyn_sidebar">
            <PynMapWidget address={pyn.address} latlng={pyn.latlng}/>
            <PynGalleryWidget category={pyn.category} photos={pyn.photos} />
          </div>

          <div className="pyn_content">
            <PynActions />

            <PynDescription description={pyn.description} />

            <PynWriteReview _id={pyn._id}/>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(({id}) => {
  handle = Meteor.subscribe("pyns.single", id);
  pyn = Pyns.findOne();
  // console.debug("Container pyn: " + pyn);

  return {
    loading: (pyn && handle) ? false : true,
    pyn: pyn
  }
}, Pyn)
