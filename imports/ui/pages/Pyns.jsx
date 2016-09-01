import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns as PynsDB} from '/imports/api/pyns.js';
import Loading from '/imports/ui/components/utils/Loading'

import SearchResults from '/imports/ui/components/search/SearchResults'

class Pyns extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      filterState: false
    }
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
        <div id="map" className="col" height="100%">
          {this.mappify()}
          <Loading />
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  sub = Meteor.subscribe("pyns.approved")
  // console.debug("sub: " + sub.ready())
  pyns = PynsDB.find({}, {sort: {createdAt: 1}}).fetch();
  // console.debug("Pyns: " + JSON.stringify(pyns, null, 2))

  return {
    loading: !sub.ready(),
    pyns: pyns
  }
}, Pyns)
