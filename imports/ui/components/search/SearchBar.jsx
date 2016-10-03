import React from 'react';
import {HomeTextSearch} from '/imports/ui/components/search/HomeSearchFields';
import {HomeTypeSearch} from '/imports/ui/components/search/HomeSearchFields';
import {HomeCategorySearch} from '/imports/ui/components/search/HomeSearchFields';

export default SearchBar = props => {
  return(
    <div id="searchBar" className="col s12 l10 offset-l1">
      <div className="col s12 l10 searchBar_fields-wrapper" style={{padding: "0px 15px", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
        <div className="col s12 l4" style={{padding: "0"}}><HomeTextSearch /></div>
        <div className="col s6 l4" style={{padding: "0"}}><HomeTypeSearch /></div>
        <div className="col s6 l4" style={{padding: "0"}}><HomeCategorySearch /></div>
      </div>

      <div className="col s12 l2 searchBar_fields-wrapper" style={{padding: "0px", borderRadius: "4px", overflow: "hidden"}}>
        <div className="col s6 center valign-wrapper clickable" style={{background: "transparent", padding: "0", height: "100%"}}>
          <h5 className="valign centerByMargin white-text"><i className="fa fa-location-arrow" aria-hidden="true"></i></h5>
        </div>

        <div className="col s6 center valign-wrapper clickable" onClick={() => search()} style={{background: "transparent", padding: "0", height: "100%", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
          <h5 className="valign centerByMargin white-text"><i className="fa fa-search" aria-hidden="true"></i></h5>
        </div>
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
