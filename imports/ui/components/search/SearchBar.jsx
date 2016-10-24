import React from 'react';
import TextSearch from '/imports/ui/components/search/TextSearch';
import TypeSearch from '/imports/ui/components/search/TypeSearch';
import CategorySearch from '/imports/ui/components/search/CategorySearch';

export default SearchBar = props => {
  return(
    <div id="searchBar" className="col s12 l10 offset-l1">
      <div className="col s12 searchBar_fields-wrapper">
        <div className="col s12 l4"><TextSearch /></div>
        <div className="col l4 hide-on-med-and-down"><TypeSearch id="homeSearch"/></div>
        <div className="col l4 hide-on-med-and-down"><CategorySearch /></div>
      </div>
    </div>
  )
}


const search = () => {
  let q = $("#textSearch").val();
  let category = $("#searchCategory").val();
  let type = $("#searchType").val();

  mQuery = {};
  if(q != "") mQuery["q"] = q;
  if(category != "") mQuery["category"] = category;
  if(type != "") mQuery["type"] = type;

  FlowRouter.go("pyns", {}, mQuery);
}
