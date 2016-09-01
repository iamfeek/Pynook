import React from 'react';
import {DocHead} from 'meteor/kadira:dochead'

import Navbar from './Navs/Navbar.jsx';

export default class Layout extends React.Component{
  constructor(props){
    super(props)
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
          <Navbar />
        </header>

        <main>
          {this.props.content()}
        </main>

        <footer className="center" style={{marginTop: "40px", paddingTop: "40px", borderTop: "1px solid rgba(0, 0, 0, 0.075)"}}>
          Pynook &copy; {new Date().getFullYear()}
        </footer>
      </div>
    )
  }
}
