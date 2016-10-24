import React from 'react';

export default CategorySearch = props => {
  return(
    <select id="searchCategory" defaultValue={FlowRouter.getQueryParam("category")} ref={init.bind(this)}>
      <option value="">Pick a Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Sports">Sports</option>
        <option value="Creative">Creative</option>
        <option value="Services">Services</option>
        <option value="Handicraft">Handicraft</option>
    </select>
  )
}

const init = e => {
  $(e).material_select(() => change(e));
}

const change = e => {
  FlowRouter.go("pyns", {}, {category: $(e).val()})
}
