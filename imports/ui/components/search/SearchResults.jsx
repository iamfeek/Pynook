import React from 'react';

import Loading from '/imports/ui/components/utils/Loading'
import SearchResult from '/imports/ui/components/search/SearchResult.jsx';
import SearchResultEmpty from '/imports/ui/components/search/SearchResultEmpty.jsx';

export default SearchResults = props => {
  if(props.loading){
    return(
      <div>
        <Loading />
      </div>
    )
  } else{
    return(
      <div>
        {renderResult(pyns)}
      </div>
    )
  }
}

let renderResult = pyns => {
  if(pyns.length === 0) return <SearchResultEmpty />
  return pyns.map((pyn, number) => {
    return <SearchResult pyn={pyn} key={number} />
  })
}
