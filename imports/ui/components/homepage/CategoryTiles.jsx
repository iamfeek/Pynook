import React from 'react';

export default CategoryTiles = props => {
  return(
    <div id="categoryTiles" className="valign col s12 l10 offset-l1">
      <h5 className="center">Discover Your</h5>
      <h3 className="center" style={{marginTop: "-5px"}}>Neighbourhood</h3>

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
          <a href={FlowRouter.path("pyns", "", {category: "Sports"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/sports3-small.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
        <div className="col l8 s12 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Sports"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/sports1.jpg')",backgroundSize: "cover", backgroundPosition: "center 65%"}}>
            <h1 className="valign white-text center">Sports & Wellness</h1>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col l4 categoryTileWrapper  hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/creative3.jpg')", backgroundSize: "cover",}}>

          </a>
        </div>
        <div className="col l4 s12 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/creative2.jpg')", backgroundSize: "cover"}}>
            <h1 className="valign white-text">Creative</h1>
          </a>
        </div>
        <div className="col l4 categoryTileWrapper  hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/creative1.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>

      <div className="row">
        <div className="col s12 l8 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Services"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/services1.jpg')", backgroundPosition: "center 70%"}}>
            <h1 className="valign white-text">Services</h1>
          </a>
        </div>
        <div className="col hide-on-small-only l4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Services"})}  className="categoryTile valign-wrapper" style={{backgroundImage: "url('/services2.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>

      <div className="row">
        <div className="col l4 categoryTileWrapper  hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Handicraft"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/craft2.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
        <div className="col l4 s12 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Handicraft"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/craft1.jpg')", backgroundSize: "cover"}}>
            <h1 className="valign white-text">Handicraft</h1>
          </a>
        </div>
        <div className="col l4 categoryTileWrapper  hide-on-small-only">
          <a href={FlowRouter.path("pyns", "", {category: "Handicraft"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/craft3.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>
    </div>
  )
}
