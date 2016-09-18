import React from 'react';
import {DocHead} from 'meteor/kadira:dochead'

import Navbar from './Navs/Navbar.jsx';

export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

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

        <footer className="center" style={{padding: "25px", height: "auto", background: "#484848", borderTop: "1px solid rgba(0, 0, 0, 0.075)", color: "white"}}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <p>About Us | Terms of Use | Privacy Policy | FAQ | Pyn A Place</p>
          <p>Pynook &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
}
