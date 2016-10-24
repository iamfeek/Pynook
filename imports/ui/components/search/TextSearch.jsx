import React from 'react';

export default TextSearch = props => {
  return(
    <input ref={() => $("#textSearch").focus()} id="textSearch" placeholder="Search" defaultValue={FlowRouter.getQueryParam("q")} onChange={() => FlowRouter.go("pyns", {}, {q: document.getElementById("textSearch").value})}/>
  )
}
