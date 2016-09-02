import React from 'react';

export default MyPyn = props => {
  let pyn = props.pyn;
  let imageURL = props.pyn.photos[0]+"-/resize/313x192/";
  return(
    <div className="col l6 SearchResult" style={{height: "415px"}}>
      <div className="SearchResult_wrapper">
        <div className="col s12 image" style={{backgroundImage: "url("+imageURL+")", backgroundSize: "cover"}}></div>
        <div className="col s12 body">
          <h2 className="SearchResult_title">{pyn.name}</h2>
          <div className="SearchResult_tagline">{pyn.tagline}</div>

          <footer className="SearchResult_footer">
            <div className="SearchResult_cardpin">
              <img src="/pin2.svg"/>
            </div>

            <div className="SearchResult_address">
              {pyn.address}
            </div>
          </footer>
          <footer className="SearchResult_adminActions">
            <div className="col s6 SearchResult_adminAction" onClick={() => {FlowRouter.go("pyn", {id: pyn._id})}} style={{borderRight: "1px solid rgba(0, 0, 0, 0.075)"}}>View</div>
            <div className="col s6 SearchResult_adminAction" onClick={() => {FlowRouter.go("pyn.edit", {id: pyn._id})}}>Edit</div>
          </footer>
        </div>

      </div>
    </div>
  )
}
