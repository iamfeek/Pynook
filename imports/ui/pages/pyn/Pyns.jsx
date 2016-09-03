import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns as PynsDB} from '/imports/api/pyns.js';
import Loading from '/imports/ui/components/utils/Loading'

import SearchResults from '/imports/ui/components/search/SearchResults'
import CategorySearch from '/imports/ui/components/search/CategorySearch'
import TypeSearch from '/imports/ui/components/search/TypeSearch'
import TextSearch from '/imports/ui/components/search/TextSearch'

class Pyns extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    DocHead.setTitle("Pyns - Pynook")

    setTimeout(() => {
      GoogleMaps.create({
        name: 'map',
        element: document.getElementById('map'),
        options: {
          center: new google.maps.LatLng(1.356895, 103.863355),
          zoom: 11
        }
      });
    }, 1000)
  }

  mappify(){
    if(!this.props.loading){
      // this.getMarkers(this.props.pyns);
      markers = this.getMarkers(this.props.pyns);
      // console.debug(markers)
      // markers = [
      //   new google.maps.LatLng(1.356895, 103.863355),
      //   new google.maps.LatLng(1.338000, 103.850880),
      //     new google.maps.LatLng(1.324000, 103.850880),
      //     new google.maps.LatLng(1.328000, 103.850880)
      // ]


      GoogleMaps.ready('map', map => {
        markers.map(latlng => {
          marker = new google.maps.Marker({
            animation: google.maps.Animation.DROP,
            icon: window.location.origin+"/location_general.png",
            position: new google.maps.LatLng(latlng),
            map: map.instance
          })
        });
      })
    }
  }

  getMarkers(pyns){
    markers = []

    return pyns.map(pyn => {
      // return markers.push(pyn.latlng);
      return pyn.latlng;
    })

    // return markers;
  }

  render(){
    return(
      <div id="pyns" className="row">
        <div id="resultsSection" className="col" style={{marginRight: "0px"}}>
          <h3 className="center">Search</h3>
          <div id="searchFilters" className="col l12">
            <div className="SearchFilter">
              <TextSearch />
            </div>
            <div className="SearchFilter row">
              <div className="col s6" style={{paddingLeft: "0"}}><CategorySearch /></div>
              <div className="col s6" style={{paddingRight: "0"}}><TypeSearch /></div>
            </div>
          </div>

          <div id="searchResults" className="col l12">
            <SearchResults pyns={this.props.pyns} loading={this.props.loading}/>
          </div>
        </div>
        <div id="map" className="col" height="100%">
          {this.mappify()}
          <Loading />
        </div>
      </div>
    )
  }
}

export default createContainer(({query}) => {
  mQuery = {};
  if(query.q) mQuery["name"] = {$regex: new RegExp(query.q, "i")};
  if(query.category) mQuery["category"] = {$regex: new RegExp(query.category, "i")};
  if(query.type) mQuery["type"] = {$regex: new RegExp(query.type, "i")};

  sub = Meteor.subscribe("pyns.approved");
  pyns = PynsDB.find(mQuery, {sort: {createdAt: 1}}).fetch();

  return {
    loading: (!sub.ready() && pyns),
    pyns: pyns
  }
}, Pyns)
