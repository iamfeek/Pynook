import React from 'react';

export default Maps = props => {
  return(
    <div id={props.id} ref={() => {mappify(props.id, props.pyns)}} />
  )
}

const mappify = (id, pyns) => {
  GoogleMaps.create({
    name: 'map',
    element: document.getElementById('map'),
    options: {
      center: new google.maps.LatLng(1.356895, 103.863355),
      zoom: 11
    }
  });
  
  let markers = pyns.map(p => p.latlng);

  GoogleMaps.ready(id, map => {
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
