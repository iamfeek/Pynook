import React from 'react';
import TextArea from '/imports/ui/components/forms/TextArea'

export default NewListingForm = props => {
  return(
    <form id="newListingForm" className="col s6 offset-s3" onSubmit={submit.bind(this)}>
      <div className="input-field col s12">
        <h5 className="field-header">Name</h5>
        <input required id="listings_name" type="text" className="validate" />
      </div>

      <div className="input-field col s12">
        <h5 className="field-header">Price</h5>
        <input required id="listings_price" type="number" className="validate" />
      </div>

      <div className="col s12">
        <h5 className="field-header">Images</h5>
        <div className="input-field center">
          <input
            ref={() => Ucare.load()}
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

      <div className="input-field col s12">
        <h5 className="field-header">Description</h5>

        <TextArea id="listings_description" />
      </div>

      <div className="input-field col s12 center" >
        <button className="btn btn-flat" type="submit">Submit</button>
      </div>
    </form>
  )
}

const submit = e => {
  console.debug("Submitting.")
  e.preventDefault();

  let name = document.getElementById("listings_name").value;
  let price = document.getElementById("listings_price").value;
  let description = tinyMCE.get('listings_description').getContent();
  let photos = [];

  let a = $(".uploadcare-widget-file-name");
  if(a.length != 0){
    let countOfPhotos = parseInt((a[0].innerHTML).charAt(0));
    // console.log("Count of Photos: ", countOfPhotos);
    let baseURL = document.getElementById("photos").value;
    // console.debug("Base URL: ", baseURL);
    for(i=0; i < countOfPhotos; i++){
      photos.push(baseURL+ "nth/" + i + "/");
    }
  }

  let listing = {
    name: name,
    price: price,
    photos: photos,
    description: description,
  }

  // console.debug(JSON.stringify(listing, null, 2))

  Meteor.call("listings.create", listing, (err, res) => {
    if(err) Bert.alert("Something went wrong! Please email our support team.", "danger", "growl-bottom-left");

    if(res){
      Bert.alert("New listing created!", "success", "growl-bottom-left");
      clearForm();
    }
  });
}

const clearForm = () => {
  $('html,body').animate({ scrollTop: 0 }, 'slow');
  $("input[type=text], input[type=number]").each((index, e) => e.value = "");
  tinyMCE.activeEditor.setContent('');
  uploadcare.MultipleWidget('[role=uploadcare-uploader][data-multiple]').value("");
}
