import React from 'react';

export default PynDescription = props => {
  return(
      <div className="pyn_widget_base">
        <div className="pyn_description" dangerouslySetInnerHTML={createMarkup(props.description)}/>
      </div>

  )
}

let createMarkup = d => {
  return{
    __html: d
  }
}
