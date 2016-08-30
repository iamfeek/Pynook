import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Pyns} from '/imports/api/pyns.js';

import Loading from '/imports/ui/components/utils/Loading';
import PageHeader from '/imports/ui/components/utils/PageHeader';

class Pyn extends React.Component{
  constructor(props){
    super(props);

    this.getmap = this.getMap.bind(this)
    this.test = this.test.bind(this);
  }

  getMap(latlng){
    // latlng = this.props.pyn.latlng;
    // console.debug(latlng)
    setTimeout(() => {
      GoogleMaps.create({
        name: 'map',
        element: document.getElementById('map'),
        options: {
          center: new google.maps.LatLng(latlng.lat, latlng.lng),
          zoom: 14
        }
      });

      GoogleMaps.ready('map', map => {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(latlng.lat, latlng.lng),
          map: map.instance
        })
      })
    }, 500)

  }

  test(t){
    console.debug("Test")
    console.debug(t.props.pyn.name)
  }

  render(){
    // console.debug("Loading: " + this.props.loading)
    if(this.props.loading){
      return(
        <div style={{height: "100vh", width: "100%"}}>
          <Loading />
        </div>
      )
    } else{
      pyn = this.props.pyn;
      // console.debug("Loading: " + this.props.loading)
      // console.debug("Pyn render: " + pyn)
      return (
        <div id="pyn" className="row">
          <div className="pyn_image" style={{backgroundImage: "url("+ pyn.photos[0] +")", backgroundSize: "contain"}} />

          <header className="pyn_header">
            <div className="wider-content">
              <div className="pyn_breadcrumb">
                <a href={FlowRouter.path("pyns")}>Pyns </a>
                <span className="pyn_breadcrumb_arrow">&gt;&gt;</span>
                <a href=""> {pyn.category}</a>
              </div>

              <h1 className="pyn_title">{pyn.name}</h1>
              <span className="pyn_tagline">{pyn.tagline}</span>
            </div>
          </header>

          <div className="wider-content">
            <div className="pyn_sidebar">
              <div className="pyn_widget">
                <div className="pyn_map" id="map">
                  {this.getMap(pyn.latlng)}
                  <Loading />
                </div>

                <span className="pyn_address">
                  {pyn.address}
                </span>

                <span className="pyn_get-directions">
                  <a target="_blank" href={"//maps.google.com/maps?daddr="+pyn.latlng.lat+","+pyn.latlng.lng}>Get Directions</a>
                </span>
              </div>

              <div className="pyn_widget">
                <div className="pyn_category">
                  <span className="pyn_category-title">{pyn.category}</span>
                </div>

                <div className="pyn_gallery-title">
                  <span className="right">All photos({pyn.photos.length})</span>
                  <span className="left">Photo gallery</span>
                </div>
                <div className="pyn_gallery">
                  Images here.
                </div>
              </div>

            </div>

            <div>
              <div className="pyn_actions">
                <a href="#respond">
                  <span className="pyn_action_icon">
                    <img src="/write-a-review.svg" width="15px" height="15px" />
                  </span>

                  <span className="pyn_action_text">
                    Write A Review
                  </span>
                </a>
              </div>
            </div>
          </div>


        </div>
      )
    }
  }
}

export default createContainer(({id}) => {
  handle = Meteor.subscribe("pyns.single", id);
  pyn = Pyns.findOne();
  // console.debug("Container pyn: " + pyn);

  return {
    loading: (pyn && handle) ? false : true,
    pyn: pyn
  }
}, Pyn)
