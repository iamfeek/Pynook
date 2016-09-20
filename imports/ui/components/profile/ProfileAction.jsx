import React from 'react';

export default ProfileAction = props => {
  return(
    <div className="profile_action-wrapper col s12 l4 marginBottom20">
      <a className="profile_action" href={FlowRouter.path(props.pathName)}>
        {props.title}
      </a>
    </div>
  )
}
