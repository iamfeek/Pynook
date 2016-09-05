import React from 'react';

export default TypeSearch = props => {
  return(
    <select id="searchType" defaultValue={FlowRouter.getQueryParam("type")}>
      <option value="">Experience</option>
      <option value="Learn">Learn</option>
      <option value="Socialize">Socialize</option>
      <option value="Buy">Buy</option>
      {$("#searchType").material_select(change.bind(this))}
    </select>
  )
}

const change = () => {
  FlowRouter.setQueryParams({type: $("#searchType").val()})
}
