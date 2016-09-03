import React from 'react';
import './HomeSearchFields';

export default SearchBar = props => {
  setTimeout(() => {
    $("select").material_select()
  }, 500)
  return(
    <div id="searchBar" style={{width: "600px"}}>
      <div className="row" style={{marginBottom: "0px"}}>
        <div className="col s4 searchBar_fields-wrapper" style={{borderRadius: "4px 0 0 0", borderRight: "1px solid rgba(0,0,0,0.1)"}}>
          <HomeTextSearch />
        </div>
        <div className="col s4 searchBar_fields-wrapper">
          <HomeTypeSearch />
        </div>

        <div className="col s4 searchBar_fields-wrapper" style={{borderRadius: "0 4px 0 0"}}>
          <HomeCategorySearch />
        </div>
      </div>
      <div className="row searchBar_action-wrapper">
        <div className="col s6" style={{borderRight: "1px solid rgba(0,0,0,0.36)", padding: "0"}} onClick={() => search()}>
          <span className="searchBar_action">Search</span>
        </div>
        <div className="col s6" style={{padding: "0"}}>
          <span className="searchBar_action" >
            Nearby
          </span>
        </div>
      </div>
    </div>
  )
}


const search = () => {
  let q = document.getElementById("textSearch").value;
  let category = document.getElementById("searchCategory").value;
  let type = document.getElementById("searchType").value;

  mQuery = {};
  if(q != "") mQuery["name"] = q;
  if(category != "") mQuery["category"] = category;
  if(type != "") mQuery["type"] = type;

  FlowRouter.go("pyns", {}, mQuery);
}
