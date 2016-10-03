import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns as PynsDB} from '/imports/api/pyns.js';
import Loading from '/imports/ui/components/utils/Loading'
import Maps from '/imports/ui/components/utils/Maps';

import SearchResults from '/imports/ui/components/search/SearchResults';
import SearchFilters from '/imports/ui/components/search/SearchFilters';


const Pyns = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let pyns = props.pyns;
  return(
    <div id="pyns" className="row">
      <div id="resultsSection" className="col s12 l7">
        <div id="searchFilters" className="col s12">
          <SearchFilters />
        </div>

        <div className="col s12" style={{lineHeight: "40px", background: "#f7f7f7", padding: "0px 30px"}}>
          <label className="info left valign col s12 l9 paddingZero"><i className="fa fa-info-circle" aria-hidden="true"></i> Some Pyns may contain in-app purchases</label>
          <label className="info right valign col s12 l3 paddingZero textAlignRight resultsFound">{pyns.length} found</label>
        </div>

          <SearchResults items={pyns} />
      </div>

      <div id="map" className="hide-on-med-and-down col l5 fixed-top">
        <Maps id="map" pyns={pyns}/>
        <Loading />
      </div>
    </div>
  )
}

export default createContainer(({query}) => {
  DocHead.setTitle("Pyns - Pynook")
  DocHead.addMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });

  mQuery = {};
  if(query.q) mQuery["name"] = {$regex: new RegExp(query.q, "i")};
  if(query.category) mQuery["category"] = {$regex: new RegExp(query.category, "i")};
  if(query.type) mQuery["type"] = {$regex: new RegExp(query.type, "i")};

  let sub = Meteor.subscribe("pyns.approved");
  let pyns = PynsDB.find(mQuery, {sort: {type: 1, createdAt: 1}}).fetch();

  return {
    loading: !(sub.ready() && pyns),
    pyns: pyns
  }
}, Pyns)
