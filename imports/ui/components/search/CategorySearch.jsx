import React from 'react';

export default CategorySearch = props => {
  return(
    <select id="searchCategory" defaultValue={FlowRouter.getQueryParam("category")}>
      <option value="">Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Sports">Sports</option>
        <option value="Creative">Creative</option>
        <option value="Services">Services</option>
        <option value="Handicraft">Handicraft</option>
        {$("#searchCategory").material_select(change.bind(this))}
    </select>
  )
}

const change = () => {
  FlowRouter.setQueryParams({category: $("#searchCategory").val()})
}
