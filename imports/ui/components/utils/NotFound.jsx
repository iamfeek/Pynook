import React from 'react';

export default AccessDenied = props => {
  DocHead.setTitle("Page not found - Pynook");
  DocHead.addMeta({
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  });
  return(
    <div className="valign-wrapper row" style={{height: "450px"}}>
      <div className="valign centerByMargin">
        <h1 className="center">:(</h1>
        <br></br>
        <h3 className="center">Woops! The content you are requesting is not available!</h3>

        <h4 className="center">Maybe visit our <a className="red-text" href={FlowRouter.path("home")}>homepage</a>?</h4>
      </div>

    </div>
  )
}
