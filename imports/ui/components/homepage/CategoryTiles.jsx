import React from 'react';

export default CategoryTiles = props => {
  return(
    <div id="categoryTiles">
      <h5 className="center">Discover Your</h5>
      <h3 className="center" style={{marginTop: "-13px"}}>Neighbourhood</h3>

      <div className="row">
        <div className="col s12 l8 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Food"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/food1.jpg')", backgroundPosition: "center 70%"}}>
            <h1 className="valign white-text">Food</h1>
          </a>
        </div>
        <div className="col hide-on-small-only l4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Food"})}  className="categoryTile valign-wrapper" style={{backgroundImage: "url('/food2.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>

      <div className="row">
        <div className="col l4 categoryTileWrapper  hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Travel"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/travel2.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
        <div className="col l4 s12 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Travel"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/travel1.jpg')", backgroundSize: "cover"}}>
            <h1 className="valign white-text">Travel</h1>
          </a>
        </div>
        <div className="col l4 categoryTileWrapper  hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Travel"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/travel3.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>



      <div className="row">
        <div className="col l4 categoryTileWrapper hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/skill2.jpg')"}}>

          </a>
        </div>
        <div className="col l8 s12 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/skill1.jpg')", backgroundPosition: "center 70%"}}>
            <h1 className="valign white-text">Creative</h1>
          </a>
        </div>
      </div>
    </div>
  )
}
