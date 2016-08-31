import React from 'react'

export default PynPhotoThumbnail = props => {
  return(
      <div className="pyn_photo_thumbnail">
        <img className="materialboxed" height="100%" width="100%" src={props.src} />
        {init()}
      </div>
  )
}

let init = () => {
  $('.materialboxed').materialbox();
}
