import React from 'react';

import Navbar from './Navs/Navbar.jsx';

export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/hanken" type="text/css"/>
        <header>
          <Navbar />
        </header>

        <main>
          {this.props.content()}
        </main>

        <footer>
          This is our footer.
        </footer>
      </div>
    )
  }
}
