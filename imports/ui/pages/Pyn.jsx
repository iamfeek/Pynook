import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns.js';
import {Reviews} from '/imports/api/reviews.js';

import Loading from '/imports/ui/components/utils/Loading';
import PynHeader from '/imports/ui/components/pyn/PynHeader';
import PynMapWidget from '/imports/ui/components/pyn/PynMapWidget';
import PynGalleryWidget from '/imports/ui/components/pyn/PynGalleryWidget';
import PynActions from '/imports/ui/components/pyn/PynActions';
import PynDescription from '/imports/ui/components/pyn/PynDescription';
import PynWriteReview from '/imports/ui/components/pyn/PynWriteReview';
import PynReviews from '/imports/ui/components/pyn/PynReviews';

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
    reviews = props.reviews;
    // console.debug("Reviews: " + reviews);
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

            <PynReviews reviews={reviews} />

            <PynWriteReview _id={pyn._id}/>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(({id}) => {
  pynsHandle = Meteor.subscribe("pyns.single", id);
  reviewsHandle = Meteor.subscribe("reviews.single", id);
  pyn = Pyns.findOne();
  reviews = Reviews.find().fetch();
  // console.debug("Container pyn: " + pyn);

  if(pyn){
    DocHead.setTitle(pyn.name + " - Pynook")
    SEO.set({
      title: pyn.name,
      description: pyn.description,
      meta: {
        'property="og:title"': pyn.title,
        'property="og:description"': pyn.description,
        'property="og:image"': pyn.photos[0],
        'name="twitter:image"': pyn.photos[0]
      }
    });
    // var metaInfo = [
    //   {name: "description", content: pyn.tagline},
    //   {name: "og:title", content: pyn.name},
    //   {name: "og:description", content: pyn.description},
    //   {name: "og:image", content: pyn.photos[0]},
    //   {name: "og:type", content: "object"}
    // ]
    // metaInfo.map(mi => {
    //   DocHead.addMeta(mi);
    // })
  } else{
    DocHead.setTitle("Loading Pyn - Pynook")
  }


  return {
    loading: (pynsHandle && reviewsHandle && pyn && reviews) ? false : true,
    pyn: pyn,
    reviews: reviews
  }
}, Pyn)
