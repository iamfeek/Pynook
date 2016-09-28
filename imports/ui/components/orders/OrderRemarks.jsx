import React from 'react';

export default OrderRemarks = props => {
  let remarks = props.remarks;

  return(
      <span dangerouslySetInnerHTML={createMarkup(remarks)} />
  )
}
let createMarkup = d => {
  return{
    __html: d
  }
}
