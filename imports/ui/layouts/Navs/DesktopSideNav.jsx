import React from 'react';

export default DesktopSideNav = props => {
  let user = props.user;
  return(
    <ul className="side-nav" id="desktop-sidenav">
      <UserSection user={props.user}/>

      {props.user ? <li onClick={() => logout()}><a>Logout</a></li> : <li><a href={FlowRouter.go("login")}>Login/Register</a></li>}
    </ul>
  )
}
