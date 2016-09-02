import React from 'react';

export default EditPynForm = props => {
  let pyn = props.pyn;
  return(
    <form id="editPynForm" onSubmit={edit.bind(this)}>
      <input hidden id="pynId" defaultValue={pyn._id} />
      <div className="row">
        <div className="input-field col s12">
          <input id="pynName" type="text" className="validate" defaultValue={pyn.name} required />
          <label htmlFor="pynName">Pyn Name</label>
        </div>
      </div>

      <div className="row" style={{marginBottom: "55px"}}>
        <div className="input-field col s12">
          <input id="pynTagline" required type="text" className="validate" defaultValue={pyn.tagline} style={{marginBottom: "5px"}}/>
          <label htmlFor="pynTagline">Tagline(optional)</label>
          <span style={{color: "#919191"}}>Keep it short and descriptive as it will appear on search results instead of the link description</span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <textarea id="pynDescription" defaultValue={pyn.description} required onClick={() => {initTinyMCE()}}></textarea>
          <label style={{marginTop: "-35px"}}htmlFor="pynDescription">Description</label>
        </div>
      </div>

      <div className="row" style={{marginTop: '45px'}}>
        <div className="input-field col s12">
          <select defaultValue={pyn.type} id="type">
            <option value="">Choose your type</option>
            <option value="Learn">Learn</option>
            <option value="Socialize">Socialize</option>
            <option value="Buy">Buy</option>
          </select>
          <label>Pick the type</label>
          <span style={{color: "#919191"}}>Pynook categorises all Pyns to three major types. Find out more at our FAQ.</span>
        </div>
      </div>

      <div className="row" style={{marginTop: '55px'}}>
        <div className="input-field col s12">
          <select defaultValue={pyn.category} id="category">
            <option value="">Choose your category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Sports">Sports</option>
            <option value="Creative">Creative</option>
            <option value="Services">Services</option>
            <option value="Handicraft">Handicraft</option>
          </select>
          <label>Pick the category</label>
          <span style={{color: "#919191"}}>Visitors can filter their search by the categories and amenities they want - so make sure you choose wisely</span>
        </div>
      </div>



      <div className="row" style={{marginTop: "45px"}}>
        <div className="col s12">
          Gallery
          <br></br>
          <input
            defaultValue={pyn.photos}
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

      <div className="row" style={{marginTop: "40px"}}>
        <div className="col s12">
          <button id="pynaplacesubmit" type="submit" className="btn">Done Editing</button>
        </div>
      </div>

      {initialize()}
    </form>
  )
}

const edit = e => {
  e.preventDefault();
  let id = document.getElementById("pynId").value;
  let name = document.getElementById("pynName").value;
  let tagline = document.getElementById("pynTagline").value;
  let description = tinymce.get('pynDescription').getContent();
  let type = document.getElementById("type").value;
  let category = document.getElementById('category').value;
  let photos = [];

  //checking photos has been uploaded.
  a = $(".uploadcare-widget-file-name");
  if(a.length != 0){
    countOfPhotos = parseInt((a[0].innerHTML).charAt(0));
    baseURL = document.getElementById("photos").value;
    for(i=0; i < countOfPhotos; i++){
      photos.push(baseURL+ "nth/" + i + "/");
    }
  }

  if(photos.length == 0){
    Bert.alert("Please add at least one photo", "danger", "growl-bottom-left");
    return;
  }

  if(type === "" || category === ""){
    Bert.alert("Please pick a type and category", "danger", "growl-bottom-left");
    return;
  }

  editedPyn = {
    name: name,
    tagline: tagline,
    description: description,
    category: category,
    type: type,
    photos: photos
  }

  // console.debug("ID: " + id)
  // console.debug(JSON.stringify(editedPyn, null, 2));

  Meteor.call("pyns.edit", editedPyn, id, (err, res) => {
    if(err) Bert.alert("Something went wrong with the edit. We are looking into it.", "danger", "growl-bottom-right");

    if(!err){
      Bert.alert("Successfully edited.", "info", "growl-bottom-left");
      FlowRouter.go("pyn", {id: id});
    }
  })
}

const initTinyMCE = () => {
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
    toolbar: 'bold italic | numlist | link image | undo redo'
  });
}


const initialize = () => {
  setTimeout(() => {
    Materialize.updateTextFields();
    initTinyMCE();
    $('select').material_select();
    Ucare.load();
  }, 500)
}
