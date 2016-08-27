import React from 'react';
import {DocHead} from 'meteor/kadira:dochead'

import Navbar from './Navs/Navbar.jsx';

export default class Layout extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      user: Meteor.user()
    }
  }

  componentDidMount(){
    DocHead.addMeta({
      name: "viewport",
      width: 'device-width',
      "initial-scale": '1',
      "user-scalable": "0"
    });
  }

  render(){
    return(
      <div>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/hanken" type="text/css"/>
        <header>
          <Navbar user={this.state.user}/>
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
