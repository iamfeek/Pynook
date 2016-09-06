import React from 'react';

export default ProfileAction = props => {
  return(
    <div className="profile_action-wrapper col s4">
      <a className="profile_action" href={FlowRouter.path(props.pathName)}>
        {props.title}
      </a>
    </div>
  )
}
