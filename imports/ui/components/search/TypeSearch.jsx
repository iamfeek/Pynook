import React from 'react';

export default TypeSearch = props => {
  return(
    <select id="searchType" defaultValue={FlowRouter.getQueryParam("type")} className="browser-default" onChange={() => FlowRouter.setQueryParams({type: document.getElementById("searchType").value})}>
      <option value="">Type</option>
        <option value="Learn">Learn</option>
        <option value="Socialize">Socialize</option>
        <option value="Buy">Buy</option>
    </select>
  )
}
