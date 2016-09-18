import React from 'react';


export default BusinessPlanForm = props => {
  let plan = props.plan ? props.plan : {}
  return(
    <form id="businessPlanForm" onSubmit={submit.bind(this)} className="col s12 l6 offset-l3" ref={() => Materialize.updateTextFields()}>
      <div className="input-field col s12">
        <label htmlFor="business_name">Plan Title</label>
        <input defaultValue={plan.title} placeholder="Title" id="title" type="text" />
      </div>

      <div className="input-field col s12">
        <label htmlFor="business_address">Plan Price</label>
        <input defaultValue={plan.price} placeholder="Price" id="price" type="number" />
      </div>

      <TextArea id="description" header="Description of plan"/>

      <div className="input-field col s12">
        <button className="btn btn-flat" type="submit" name="action">
          Create Plan
        </button>
      </div>
    </form>
  )
}

const submit = e => {
  e.preventDefault();

  let title = $("#title").val();
  let price = $("#price").val();
  let description = tinyMCE.get('description').getContent();

  let plan = {
    title: title,
    price: parseInt(price),
    description: description
  }

  Meteor.call("plans.create", plan, err => {
    if(err){
      Bert.alert("Oh no! Something went wrong!", "danger", "growl-bottom-left");
      return;
    }

    Bert.alert("Plan created!", "success", "growl-bottom-left");
    $("input[type=text], input[type=number]").each((index, e) => e.value = "");
    tinyMCE.activeEditor.setContent('');
  })
}
