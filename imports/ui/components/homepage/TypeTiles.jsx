import React from 'react';

export default TypeTiles = props => {
  return(
    <div id="TypeTiles">
      <h2 className="center">Experience</h2>
      <h5 className="center" style={{marginBottom: "30px", marginTop: "-20px"}}>Discover</h5>

      <div className="col s3 typeImageWrapper">
        <div className="typeImage valign-wrapper" style={{backgroundPosition: "50% 70%", height: "100%", width: "100%", backgroundImage: "url('/socialize.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Socialize</h2>
        </div>
      </div>
      <div className="col s3 typeImageWrapper">
        <div className="typeImage valign-wrapper" style={{backgroundPosition: "50% 30%", height: "100%", width: "100%", backgroundImage: "url('/learn.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Learn</h2>
        </div>
      </div>
      <div className="col s3 typeImageWrapper">
        <div className="typeImage valign-wrapper" style={{backgroundPosition: "50% 50%", height: "100%", width: "100%", backgroundImage: "url('/buy.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Buy</h2>
        </div>
      </div>

      <div className="col s3 typeImageWrapper">
        <div className="typeImage valign-wrapper" style={{backgroundPosition: "50% 50%", height: "100%", width: "100%", backgroundSize: "cover", backgroundImage: "url('/pynaplace2.jpg')"}}>
          <h2 className="valign" style={{marginTop: "180px"}}>Pyn A Place</h2>
        </div>
      </div>
    </div>
  )
}
