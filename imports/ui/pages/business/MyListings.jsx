import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';

const MyListings = props => {
  if(props.loading) return <Loading />
  listings = props.listings;
  return(
    <div>
      <PageHeader src="/my-pyns.jpg" title={title} />

      {pyns.length==0 ? <NoPyns /> : null}
      <div className="wider-content row" style={{marginTop: "40px"}}>
        {pyns.map(p => <MyPyn pyn={p} key={p._id}/>)}
      </div>
    </div>
  )
}

export default createContainer(() => {
  let handle = Meteor.subscribe("listings.self");
  return {

  }
})
