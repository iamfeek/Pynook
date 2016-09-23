import React from 'react';
import TextArea from '/imports/ui/components/forms/TextArea';

export default BusinessRemarksField = props => {
  return(
    <span>
      <TextArea id={props.id+"-remarks"} header="Remarks" defaultValue={props.remarks}/>

      <p><a className="btn btn-flat red white-text centerbyMargin marginTop20" onClick={() => update(props.id)}>Update Remarks</a></p>

    </span>
  )
}

const update = id => {
  remark = tinymce.get(id+"-remarks").getContent();
  Meteor.call("orders.updateRemark", id, remark, (err,res) => {
    if(err){
      Bert.alert("Something went wrong!!", "danger");
      return;
    }

    Bert.alert("Updated!", "info");
  });
}
