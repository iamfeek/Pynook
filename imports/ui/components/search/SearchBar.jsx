import React from 'react';

export default class SearchBar extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.filterState ? "UP" : "DOWN"}

        <a className="btn" onClick={() => {this.props.changeFilterState()}}>Toggle</a>
      </div>
    )
  }
}
