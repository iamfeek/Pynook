import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns as PynsDB} from '/imports/api/pyns.js';

import SearchResults from '/imports/ui/components/search/SearchResults'

class Pyns extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    DocHead.setTitle("Pyns - Pynook")
  }

  render(){
    return(
      <div id="pyns" className="row">
        <div id="resultsSection" className="col" style={{marginRight: "0px"}}>
          <div id="searchFilters" className="col l12">
            <div className="SearchFilter">
              <label className="SearchFilter_title">Categories</label>
            </div>
            <div className="SearchFilter">
              <label className="SearchFilter_title">Location</label>
            </div>
          </div>

          <div id="searchResults" className="col l12">
            <SearchResults pyns={this.props.pyns} loading={this.props.loading}/>
          </div>
        </div>
        <div id="map" className="col">
          <img src="/map.png" width="100%" height="100%" />
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  sub = Meteor.subscribe("pyns.all")
  // console.debug("sub: " + sub.ready())
  pyns = PynsDB.find({}).fetch();
  // console.debug("Pyns: " + JSON.stringify(pyns, null, 2))

  return {
    loading: !sub.ready(),
    pyns: pyns
  }
}, Pyns)
