import React from 'react';

export default TypeSearch = props => {


  return(
    <select id="searchType" defaultValue={FlowRouter.getQueryParam("type")}>
      <option value="">Pick an Experience</option>
      <option value="Learn">Learn</option>
      <option value="Socialize">Socialize</option>
      <option value="Buy">Buy</option>
      {init()}
    </select>
  )
}


const init = () => {
  setTimeout(() => {console.log("SETTINGS"); $("#searchType").material_select(change())}, 5000)
}

const change = () => {
  $("#searchType").material_select(change.bind(this))
  FlowRouter.setQueryParams({type: $("#searchType").val()})
  console.log("change")

}
