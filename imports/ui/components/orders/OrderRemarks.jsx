import React from 'react';

export default OrderRemarks = props => {
  let remarks = props.remarks;

  return(
    <span>
      <h5 className="center marginBottomZero">Remarks</h5>
      <span dangerouslySetInnerHTML={createMarkup(remarks)} />
    </span>
  )
}
let createMarkup = d => {
  return{
    __html: d
  }
}
