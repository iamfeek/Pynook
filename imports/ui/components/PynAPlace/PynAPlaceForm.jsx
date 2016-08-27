import React from 'react';
import ImageThumbnail from '/imports/ui/components/Image/ImageThumbnail.jsx';
import {Session} from 'meteor/session';


export default class PynAPlaceForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loaded: GoogleMaps.loaded(),
    }

    this.submit = this.submit.bind(this)
  }
  componentDidMount(){
    this.initTinyMCE();
    $('select').material_select();
    Ucare.load();
  }

  initTinyMCE(){
    // console.debug("Tiny MCE Initialising..");
    tinymce.EditorManager.execCommand('mceRemoveEditor',true, "pynDescription");
    tinymce.init({
      selector: '#pynDescription',
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
      height: 180,
      menubar: false,
      content_css: [
        '//www.tinymce.com/css/codepen.min.css'
      ],
      toolbar: 'bold italic | bullist numlist | link image | undo redo'
    });
  }

  getLocation(){
    // console.debug("Getting Location")
    x = $("#location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
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
      Session.set("latlng", latlng);
      geocoder.geocode({'location': latlng}, function(results, status) {
        if (status === 'OK') {
          if (results[1]) {
            map.setZoom(16);
            var marker = new google.maps.Marker({
              position: latlng,
              map: map
            });

            var formatted = results[1].address_components[0].long_name + ", " + results[0].formatted_address;
            // console.debug("Address: " + formatted);
            $("#loc")[0].value = formatted;
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

  submit(){
    name = this.refs.name.value;
    tagline = this.refs.tagline.value;
    description = tinymce.get('pynDescription').getContent();
    category = document.getElementById('category').value;
    address = document.getElementById('loc').value;
    latlng = Session.get("latlng");
    photos = [];

    let status = true;

    if(!Meteor.user()){
      $("#loginModal").openModal();
      Bert.alert("You have to be logged in.", "info", "growl-top-right");
      return;
    }

    //checking photos has been uploaded.
    a = $(".uploadcare-widget-file-name");
    if(a.length != 0){
      countOfPhotos = parseInt((a[0].innerHTML).charAt(0));
      baseURL = this.refs.photos.value;
      for(i=0; i < countOfPhotos; i++){
        photos.push(baseURL+ "nth/" + i + "/");
      }
    }

    if(name === "" || description === "" || category === "" || photos.length === 0){
      status = false;
      Bert.alert("Please fill up all the fields", "danger", "fixed-top");
    }

    console.debug(status);
    if(status){
      console.debug(status)
      pyn = {
        name: name,
        tagline: tagline,
        description: description,
        category: category,
        address: address,
        latlng: latlng,
        photos: photos
      }

      console.debug(JSON.stringify(pyn, null, 2))

      Meteor.call('pyns.insert', pyn, (err, res) => {
        if(err){
          Bert.alert("Oops! Something happened. Please try again.", "danger", "fixed-top");
        }

        if(!err){
          Bert.alert("Yay! Pyn has been sent for moderation. We will get back to you within 24hours!", "success", "fixed-top");
          FlowRouter.go("home");
        }
      })
    }
  }

  render(){
    return(
      <div id="pynaplaceform">
        <div className="row">
          <div className="input-field col s12">
            <input id="pynName" ref="name" type="text" className="validate" required />
            <label htmlFor="pynName">Pyn Name</label>
          </div>
        </div>

        <div className="row" style={{marginBottom: "55px"}}>
          <div className="input-field col s12">
            <input id="pynTagline" ref="tagline" type="text" className="validate" style={{marginBottom: "5px"}}/>
            <label htmlFor="pynTagline">Tagline(optional)</label>
            <span style={{color: "#919191"}}>Keep it short and descriptive as it will appear on search results instead of the link description</span>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea id="pynDescription" required  onClick={() => {this.initTinyMCE()}}></textarea>
            <label style={{marginTop: "-35px"}}htmlFor="pynDescription">Description</label>
          </div>
        </div>

        <div className="row" style={{marginTop: '55px'}}>
          <div className="input-field col s12">
            <select defaultValue="" id="category" required ref="category">
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
        <div className="row" style={{marginTop: "25px"}}>
          <div className="col s12">
            Gallery
            <br></br>
            <input
              required
              ref="photos"
              id="photos"
              type="hidden"
              role="uploadcare-uploader"
              data-tabs="file camera url"
              data-multiple="true"
              data-preview-step="true"
              data-clearable="true"
              data-crop="free"
              data-multiple-max="9"
              />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input hidden id="loc" ref='loc' defaultValue="" />
            <div className="col s12">
              <a className="btn-flat" style={{width: "100%", textAlign: "center"}} onClick={this.getLocation.bind(this)}>Reset Location</a>
            </div>
            {this.getLocation()}
            <div id="map-container" style={{height: "35vh", width: "100%", marginBottom: "45px"}}>Getting location....</div>
          </div>

          <div className="row" style={{marginTop: "40px"}}>
            <div className="col s12">
              <a id="pynaplacesubmit" className="btn z-depth-0" onClick={this.submit.bind(this)}>Submit</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
