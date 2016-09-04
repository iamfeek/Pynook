import React from 'react';

export default TypeSearch = props => {
  return(
    <select id="searchType" defaultValue={FlowRouter.getQueryParam("type")} onChange={() => FlowRouter.setQueryParams({type: document.getElementById("searchType").value})}>
      <option value="">Experience</option>
        <option value="Learn">Learn</option>
        <option value="Socialize">Socialize</option>
        <option value="Buy">Buy</option>
    </select>
  )
}
