import React from 'react';

import PynPhotoThumbnail from './PynPhotoThumbnail';

export default PynGalleryWidget = props => {
  setTimeout(() => {
    $('.materialboxed').materialbox();
  }, 2000)
  return(
    <div className="pyn_widget">
      <div className="pyn_category">
        <span className="pyn_category-title">{props.category}</span>
      </div>

      <div className="pyn_gallery-title">
        <span className="right">{props.photos.length} photo{props.photos.length > 1 ? "s" : ""}</span>
        <span className="left">Photo gallery</span>
      </div>
      <div className="pyn_gallery">
        {props.photos.map(p => <PynPhotoThumbnail key={Math.random()} src={p}/>)}
      </div>
    </div>
  )
}
