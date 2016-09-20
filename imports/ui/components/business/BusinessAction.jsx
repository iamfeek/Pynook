import React from 'react';

export default BusinessAction = props => {
  return(
    <div className="business_action-wrapper col l4 s12 marginBottom20">
      <a className="business_action" href={FlowRouter.path(props.pathName)}>
        {props.title}
      </a>
    </div>
  )
}
