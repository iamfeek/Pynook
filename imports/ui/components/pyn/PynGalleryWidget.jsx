import React from 'react';

export default PynGalleryWidget = props => {
  return(
    <div className="pyn_widget">
      <div className="pyn_category">
        <span className="pyn_category-title">{props.category}</span>
      </div>

      <div className="pyn_gallery-title">
        <span className="right">All photos({props.photos.length})</span>
        <span className="left">Photo gallery</span>
      </div>
      <div className="pyn_gallery">
        Images here.
      </div>
    </div>
  )
}
