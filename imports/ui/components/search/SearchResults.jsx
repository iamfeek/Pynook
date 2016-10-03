import React from 'react';

import Loading from '/imports/ui/components/utils/Loading'
import SearchResult from '/imports/ui/components/search/SearchResult.jsx';
import SearchResultEmpty from '/imports/ui/components/search/SearchResultEmpty.jsx';

export default SearchResults = props => {
  let items = props.items;
  if(items.length === 0) return <SearchResultEmpty />

  return(
    <div id="searchResults" className="col s12">
      {items.map(item => <SearchResult item={item} key={item._id} />)}
    </div>
  )
}
