import React from 'react';
import {DocHead} from 'meteor/kadira:dochead'

import Navbar from './Navs/Navbar.jsx';

export default class Layout extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillMount(){
    DocHead.addMeta({name: "msapplication-TileColor", content: "#ffffff"});
    DocHead.addMeta({name: "msapplication-TileImage", content: "/ms-icon-144x144.png"});
    DocHead.addMeta({name: "theme-color", content: "#FF4d55"});
    DocHead.addLink({rel:"icon", sizes:"16x16 32x32", href:"/favicon.ico?v:2"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"57x57", href:"/apple-icon-57x57.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"60x60", href:"/apple-icon-60x60.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"72x72", href:"/apple-icon-72x72.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"76x76", href:"/apple-icon-76x76.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"114x114", href:"/apple-icon-114x114.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"120x120", href:"/apple-icon-120x120.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"144x144", href:"/apple-icon-144x144.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"152x152", href:"/apple-icon-152x152.png"});
    DocHead.addLink({rel:"apple-touch-icon", sizes:"180x180", href:"/apple-icon-180x180.png"});
    DocHead.addLink({rel:"icon", type:"image/png", sizes:"192x192",  href:"/android-icon-192x192.png"});
    DocHead.addLink({rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"});
    DocHead.addLink({rel:"icon", type:"image/png", sizes:"96x96", href:"/favicon-96x96.png"});
    DocHead.addLink({rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"});
    DocHead.addLink({rel:"manifest", href:"/manifest.json"})
    DocHead.addMeta({
      name: "viewport",
      content: "width=device-width, initial-scale=1"
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

        <footer id="pageFooter" className="center" style={{padding: "25px", height: "auto", background: "#484848", borderTop: "1px solid rgba(0, 0, 0, 0.075)", color: "white"}}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <p><a href={FlowRouter.path("about")}>About Us</a> | <a href={FlowRouter.path("termsofuse")}>Terms Of Use</a> | Privacy Policy | <a href={FlowRouter.path("faq")}>FAQ</a> | <a href={FlowRouter.path("pyn.a.place")}>Pyn A Place</a></p>
          <p>Pynook &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
}
