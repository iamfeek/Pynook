import React from 'react';

import Loading from '/imports/ui/components/utils/Loading'
import SearchResult from '/imports/ui/components/search/SearchResult.jsx';
import SearchResultEmpty from '/imports/ui/components/search/SearchResultEmpty.jsx';

export default SearchResults = props => {
  let items = props.items;
  if(items.length === 0) return <SearchResultEmpty />
  console.log(props.mode)
  return(
    <div id="searchResults" className="col s12">
      {items.map(item => {
        if(props.mode == "edit"){
          const CardAction = () => <a href={FlowRouter.path("pyn.edit", {id: item._id})}>Edit</a>
        return <SearchResult item={item} key={item._id} action={<CardAction />} />
      }else if(props.mode == "view"){
        const CardAction = () => <a href={FlowRouter.path("pyn", {id: item._id})}>View</a>
      return <SearchResult item={item} key={item._id} action={<CardAction />} />
    }
  })}
</div>
)
}
