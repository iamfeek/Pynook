import React from 'react';

export default NoPyns = props => {
  return(
      <div id="noPyns" className="valign-wrapper">
        <h2 className="valign centerByMargin">You have yet to make a Pyn :(
          <br></br>
          <span className="noPyn_action">
            <a href={FlowRouter.path("pyn.a.place")} >Create A Pyn Now!</a>
          </span>
          </h2>
      </div>
  )
}
