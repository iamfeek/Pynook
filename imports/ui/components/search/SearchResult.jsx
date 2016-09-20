import React from 'react';

export default SearchResult = props => {
  // console.debug("Link: " + props.item._id)
  let item = props.item;
  let type = item.type;
  imageURL = item.photos[0]+"-/resize/313x192/";
  return(
    <div className="col l6 s12 SearchResult" >
      <div className="SearchResult_wrapper clickable">
        <a href={FlowRouter.path("pyn", {id: item._id})}>
          <div className="col s12 image" style={{backgroundImage: "url("+imageURL+")", backgroundSize: "cover"}}></div>

          {type=="pyn" ? <PynBody item={item} /> : <ListingBody item={item} />}
        </a>
      </div>
    </div>
  )
}

const PynBody = props => {
  let item = props.item;
  return(
    <div className="col s12 body">
      <h2 className="SearchResult_title">{item.name}</h2>
      <div className="SearchResult_tagline">{item.tagline}</div>

      <footer className="SearchResult_footer">
        <div className="SearchResult_cardpin">
          <img src="/pin2.svg"/>
        </div>

        <div className="SearchResult_address">
          {item.address}
        </div>
      </footer>
    </div>
  )
}

const ListingBody = props => {
  let item = props.item;
  return (
    <div className="col s12 body">
      <h2 className="SearchResult_title">{item.name}</h2>
      <div className="SearchResult_tagline">{item.tagline}</div>

      <footer className="SearchResult_footer">
        <div className="col s12">
          ${item.price}
        </div>
      </footer>
    </div>
  )
}
