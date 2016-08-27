import React from 'react';

export default SearchResult = props => {
  pyn = props.pyn;
  imageURL = props.pyn.photos[0]+"-/resize/313x192/";
  return(
      <div className="col l6 SearchResult">
        <div className="SearchResult_wrapper">
          <div className="col s12 image" style={{backgroundImage: "url("+imageURL+")", backgroundSize: "cover"}} />
          <div className="col s12 body">
            <h2 className="SearchResult_title">{pyn.name}</h2>
            <div className="SearchResult_tagline">{pyn.tagline}</div>

            <footer className="SearchResult_footer">
              <div className="SearchResult_cardpin">
                <img src="/pin2.svg"/>
              </div>

              <div className="SearchResult_address">
                {pyn.location}
              </div>
            </footer>
          </div>
        </div>
      </div>
  )
}
