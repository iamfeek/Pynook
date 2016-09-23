import React from 'react';

export default TextArea = props => {
  let value = props.defaultValue;
  value ? null : value="";

  return(
    <div className="input-field col s12">
      <h5 className="field-header">{props.header}</h5>
      <textarea
        id={props.id}
        onClick={() => initTinyMCE(props.id, value)}
        ref={() => initTinyMCE(props.id, value) }
        />
    </div>
  )
}

const initTinyMCE = (id, value) => {
  tinymce.EditorManager.execCommand('mceRemoveEditor',true, id);
  tinymce.init({
    selector: "#"+id,
    skin_url: '/packages/teamon_tinymce/skins/lightgray',
    height: 180,
    menubar: false,
    content_css: [
      '//www.tinymce.com/css/codepen.min.css'
    ],
    toolbar: 'bold italic | numlist | link image | undo redo',
    // setup : function(ed)
    // {
    //   ed.on('init', function()
    //   {
    //     this.execCommand("fontName", false, "tahoma");
    //     this.execCommand("fontSize", false, "1.4rem");
    //     this.execCommand("color", false, "#484848");
    //   });
    // }
  });
  tinyMCE.activeEditor.setContent(value);
}
