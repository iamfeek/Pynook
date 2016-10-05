import React from 'react';
import PynCard from '/imports/ui/components/pyn/PynCard';

export default SearchResult = props => {
  return(
    <div className="col l6 s12 SearchResult" >
      <PynCard pyn={props.item} action={props.action} />
    </div>
  )
}

// <div className="SearchResult_wrapper clickable">
//   <a href={FlowRouter.path("pyn", {id: item._id})}>
//     <div className="col s12 image" style={{backgroundImage: "url("+imageURL+")", backgroundSize: "cover"}}></div>
//
//     <PynBody item={item}/>
//   </a>
// </div>

const PynBody = props => {
  let item = props.item;
  return(
    <div className="col s12 body">
      <div className="col s9">
          <h5 className="SearchResult_title">{item.name}</h5>
      </div>

      <div className="col s3">
        {item.type != "pyn" ? <h5>${item.price}</h5> : null}
      </div>
    </div>
  )
}
