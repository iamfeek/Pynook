import React from 'react';

export default class PynAPlaceForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loaded: GoogleMaps.loaded()
    }
  }
  componentDidMount(){
    tinymce.init({
      selector: 'textarea',
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
      height: 180,
      menubar: false,
      content_css: [
        '//www.tinymce.com/css/codepen.min.css'
      ],
      toolbar: 'bold italic | bullist numlist | link image | undo redo'
    });

    $('select').material_select();
  }

  getLocation(){
    // console.debug("Getting Location")
    x = $("#location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  showPosition(position){
    GoogleMaps.create({
      name: 'exampleMap',
      element: document.getElementById('map-container'),
      options: {
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        zoom: 17
      }
    });

    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      // var marker = new google.maps.Marker({
      //   position: map.options.center,
      //   map: map.instance
      // });

      var map = map.instance;
      var geocoder = new google.maps.Geocoder;
      var infowindow = new google.maps.InfoWindow;
      var input = position.coords.latitude+","+position.coords.longitude;
      var latlngStr = input.split(',', 2);
      var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
          if (results[1]) {
            map.setZoom(17);
            var marker = new google.maps.Marker({
              position: latlng,
              map: map
            });

            var formatted = results[1].address_components[0].long_name + ", " + results[0].formatted_address;
            console.debug("Address: " + formatted);
            $("#location")[0].innerHTML = formatted;
            infowindow.setContent(formatted);
            infowindow.open(map, marker);
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    });
  }

  render(){
    return(
      <form id="pynaplaceform">
        <div className="row">
          <div className="input-field col s12">
            <input id="pynName" type="text" className="validate" />
            <label htmlFor="pynName">Pyn Name</label>
          </div>
        </div>

        <div className="row" style={{marginBottom: "55px"}}>
          <div className="input-field col s12">
            <input id="pynTagline" type="text" className="validate" style={{marginBottom: "5px"}}/>
            <label htmlFor="pynTagline">Tagline(optional)</label>
            <span style={{color: "#919191"}}>Keep it short and descriptive as it will appear on search results instead of the link description</span>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea id="pynDescription"></textarea>
            <label style={{marginTop: "-35px"}}htmlFor="pynDescription">Description</label>
          </div>
        </div>

        <div className="row" style={{marginTop: '55px'}}>
          <div className="input-field col s12">
            <select defaultValue="">
              <option value="">Choose your option</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Sports">Sports</option>
              <option value="Creative">Creative</option>
              <option value="Services">Services</option>
              <option value="Handicraft">Handicraft</option>
            </select>
            <label>Pick a category</label>
            <span style={{color: "#919191"}}>Visitors can filter their search by the categories and amenities they want - so make sure you choose wisely</span>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <div id="locationBox" className="col s8">
              Address of Pyn: <span id="location"></span>
          </div>
          <div className="col s4">
            <a className="btn-flat" onClick={this.getLocation.bind(this)}>Get Location</a>
          </div>
          {this.getLocation()}
          <div id="map-container" style={{height: "35vh", width: "100%"}}></div>
        </div>
      </div>

      <div className="row">
        <div className="col s12">
          <div className="uploader-btn">
            <div className="spacer">
              <div className="text">Add Photo</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
}
