import React from 'react';

export default TypeTiles = props => {
  return(
    <div id="TypeTiles">
      <h5 className="center" style={{marginTop: "-20px"}}>Discover A New</h5>
      <h2 className="center" style={{marginTop: "0px"}}>Experience</h2>


      <div className="col s3 typeImageWrapper">
        <a href={FlowRouter.path("pyns", "", {type: "Socialize"})} className="typeImage valign-wrapper" style={{backgroundPosition: "50% 70%", height: "100%", width: "100%", backgroundImage: "url('/socialize.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Socialize</h2>
        </a>
      </div>
      <div className="col s3 typeImageWrapper">
        <a href={FlowRouter.path("pyns", "", {type: "Learn"})} className="typeImage valign-wrapper" style={{backgroundPosition: "50% 30%", height: "100%", width: "100%", backgroundImage: "url('/learn.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Learn</h2>
        </a>
      </div>
      <div className="col s3 typeImageWrapper">
        <a href={FlowRouter.path("pyns", "", {type: "Buy"})} className="typeImage valign-wrapper" style={{backgroundPosition: "50% 50%", height: "100%", width: "100%", backgroundImage: "url('/buy.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Buy</h2>
        </a>
      </div>

      <div className="col s3 typeImageWrapper">
        <a href={FlowRouter.path("pyn.a.place")} className="typeImage valign-wrapper" style={{backgroundPosition: "50% 50%", height: "100%", width: "100%", backgroundSize: "cover", backgroundImage: "url('/pynaplace2.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Pyn A Place</h2>
        </a>
      </div>
    </div>
  )
}
