import React from 'react';

export default CategoryTiles = props => {
  return(
    <div style={{height: "100vh"}}>
      <h2 className="center">Explore The World</h2>
      <h5 className="center" style={{marginBottom: "30px", marginTop: "-20px"}}>Feel The Homeliness</h5>

      <div className="row">
        <div className="col s8 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Food"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/food1.jpg')", backgroundPosition: "center 70%"}}>
            <h1 className="valign white-text">Food</h1>
          </a>
        </div>
        <div className="col s4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Food"})}  className="categoryTile valign-wrapper" style={{backgroundImage: "url('/food2.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>

      <div className="row">
        <div className="col s4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Travel"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/travel2.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
        <div className="col s4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Travel"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/travel1.jpg')", backgroundSize: "cover"}}>
            <h1 className="valign white-text">Travel</h1>
          </a>
        </div>
        <div className="col s4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Travel"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/travel3.jpg')", backgroundSize: "cover"}}>

          </a>
        </div>
      </div>



      <div className="row">
        <div className="col s4 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/skill2.jpg')"}}>

          </a>
        </div>
        <div className="col s8 categoryTileWrapper">
          <a href={FlowRouter.path("pyns", "", {category: "Creative"})} className="categoryTile valign-wrapper" style={{backgroundImage: "url('/skill1.jpg')", backgroundPosition: "center 70%"}}>
            <h1 className="valign white-text">Creative</h1>
          </a>
        </div>
      </div>
    </div>
  )
}
