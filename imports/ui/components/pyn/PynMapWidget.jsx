import React from 'react';

export default PynMapWidget = props => {
  if(!props.latlng) return;
  return(
    <div className="pyn_widget">
      <div className="pyn_map" id="map">
        {getMap(props.latlng)}
        <Loading />
      </div>

      <span className="pyn_address">
        {props.address}
      </span>

      <span className="pyn_get-directions">
        <a target="_blank" href={"//maps.google.com/maps?daddr="+props.latlng.lat+","+props.latlng.lng}>Get Directions</a>
      </span>
    </div>
  )
}

let getMap = latlng => {
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
    });
  }, 500)
}
