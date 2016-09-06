import React from 'react';

export default BusinessAction = props => {
  return(
    <div className="business_action-wrapper col s4">
      <a className="business_action" href={FlowRouter.path(props.pathName)}>
        {props.title}
      </a>
    </div>
  )
}
