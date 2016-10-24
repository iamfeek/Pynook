import React from 'react';

export default TypeSearch = props => {


  return(
    <select className="center" id={props.id} defaultValue={FlowRouter.getQueryParam("type")} ref={init.bind(this)}>
      <option value="">Pick an Experience</option>
      <option value="Learn">Learn</option>
      <option value="Socialize">Socialize</option>
      <option value="Buy">Buy</option>
    </select>
  )
}

const init = e => {
  $(e).material_select(() => change(e));
}

const change = e => {
  FlowRouter.go("pyns", {}, {type: $(e).val()})
}
