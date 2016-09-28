import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns.js';
import {Reviews} from '/imports/api/reviews.js';

import Loading from '/imports/ui/components/utils/Loading';
import PynHeader from '/imports/ui/components/pyn/PynHeader';
import PynMapWidget from '/imports/ui/components/pyn/PynMapWidget';
import PynBuyWidget from '/imports/ui/components/pyn/PynBuyWidget';
import PynGalleryWidget from '/imports/ui/components/pyn/PynGalleryWidget';
import PynActions from '/imports/ui/components/pyn/PynActions';
import PynDescription from '/imports/ui/components/pyn/PynDescription';
import PynWriteReview from '/imports/ui/components/pyn/PynWriteReview';
import PynReviews from '/imports/ui/components/pyn/PynReviews';
import CarouselItem from '/imports/ui/components/utils/CarouselItem';

const Pyn = props =>{
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let pyn = props.pyn;
  let reviews = props.reviews;
  let type = pyn.type;
  return (
    <div id="pyn" className="row">

      <div className="pyn_carousel carousel carousel-slider" style={{maxHeight: "220px !important"}} ref={() => $('.carousel.carousel-slider').carousel({full_width: true, indicators: true})}>
        {pyn.photos.map(src => <CarouselItem src={src} key={src}/>)}
      </div>



      <PynHeader name={pyn.name} category={pyn.category} tagline={pyn.tagline} />

      <div className="row">
        <div className="col s12 l6 offset-l1">
          <PynActions />
          <PynDescription description={pyn.description} />
          <PynReviews reviews={reviews} />
          <PynWriteReview _id={pyn._id}/>
        </div>

        <div className="col s12 l4">
          {
            type=="pyn" ? <PynMapWidget address={pyn.address} latlng={pyn.latlng}/> : <PynBuyWidget businessId={pyn.businessId} listingId={pyn._id} price={pyn.price} />
        }

        <PynGalleryWidget category={pyn.category} photos={pyn.photos} />
      </div>
    </div>
  </div>
)
}

export default createContainer(({id, type}) => {
  let pynsHandle = Meteor.subscribe("pyns.single", id);
  let reviewsHandle = Meteor.subscribe("reviews.single", id);
  let pyn = Pyns.findOne();
  let reviews = Reviews.find().fetch();
  // console.debug("Container pyn: " + pyn);

  if(pyn){
    DocHead.setTitle(pyn.name + " - Pynook")
    DocHead.addMeta({name: "description", content: pyn.description});

  } else{
    DocHead.setTitle("Loading Pyn - Pynook")
  }


  return {
    loading: !(pynsHandle.ready() && reviewsHandle.ready() && pyn && reviews),
    pyn: pyn,
    reviews: reviews
  }
}, Pyn)
