import React from 'react';
import CategorySearch from '/imports/ui/components/search/CategorySearch'
import TypeSearch from '/imports/ui/components/search/TypeSearch'
import TextSearch from '/imports/ui/components/search/TextSearch'

export default SearchFilters = props => {
  return(
      <div className="SearchFilter row"  ref={() => $("select").material_select()}>
        <div className="col s12 l4" style={{padding: "0"}}><TextSearch /></div>
        <div className="col s6 l4" style={{padding: "0"}}><CategorySearch /></div>
        <div className="col s6 l4" style={{padding: "0"}}><TypeSearch /></div>
      </div>
  )
}
