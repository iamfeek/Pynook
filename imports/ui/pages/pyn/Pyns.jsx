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
        <div id="searchFilters" className="col s12 fixed-top">
          <SearchFilters />
          <div className="row borderTop">
            <ul className="tabs" ref={() => $('ul.tabs').tabs()}>
              <li className="tab col s6"><a href="#pynsTab">Pyns</a></li>
              <li className="tab col s6"><a href="#listingsTab">Listings</a></li>
            </ul>
          </div>
        </div>

        <div id="searchResults" className="col s12">

          <div id="pynsTab">
          <SearchResults pyns={pyns}/>
          </div>
          <div id="listingsTab">
          <SearchResults pyns={[]} />
          </div>

        </div>
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

  sub = Meteor.subscribe("pyns.approved");
  pyns = PynsDB.find(mQuery, {sort: {createdAt: 1}}).fetch();

  return {
    loading: !(sub.ready() && pyns),
    pyns: pyns
  }
}, Pyns)
