import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Listings as PynsDB} from '/imports/api/pyns.js';
import Loading from '/imports/ui/components/utils/Loading'
import Maps from '/imports/ui/components/utils/Maps';

import SearchResults from '/imports/ui/components/search/SearchResults';
import SearchFilters from '/imports/ui/components/search/SearchFilters';


const Listings = props => {
  if(props.loading) return <div className="wider-content"><Loading /></div>

  let pyns = props.pyns;
  return(
    <div id="pyns" className="row">
      <div id="resultsSection" className="col s12">
        <div id="searchFilters" className="col s12 fixed-top">
          <SearchFilters />
        </div>
        <div id="searchResults" className="col s12">
          <SearchResults items={listings}/>
        </div>
      </div>
    </div>
  )
}

export default createContainer(({query}) => {
  DocHead.setTitle("Listings - Pynook")
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
}, Listings)
