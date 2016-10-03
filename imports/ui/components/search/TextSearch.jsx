import React from 'react';

export default TextSearch = props => {
  return(
    <input id="textSearch" placeholder="Search" defaultValue={FlowRouter.getQueryParam("q")} onChange={() => FlowRouter.setQueryParams({q: document.getElementById("textSearch").value})}/>
  )
}
